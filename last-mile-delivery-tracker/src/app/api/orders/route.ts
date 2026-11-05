import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';
import { calculateVolumetricWeight, calculateCharge } from '../../../lib/rate-engine';
import { assignAgentToOrder } from '../../../lib/assignment-engine';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const customerId = searchParams.get('customerId');
  const agentId = searchParams.get('agentId');

  let where = {};
  if (customerId) where = { customerId };
  if (agentId) where = { agentId };

  try {
    const orders = await prisma.order.findMany({
      where,
      include: { pickupZone: true, dropZone: true, trackings: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerId, pickupAddress, dropAddress, pickupZoneId, dropZoneId, dimensions, actualWeight, orderType, paymentType } = body;

    // 1. Calculate volumetric weight
    const [l, b, h] = dimensions.split(',').map(Number);
    const volumetricWeight = calculateVolumetricWeight(l, b, h);

    // 2. Find rate card
    const rateCard = await prisma.rateCard.findFirst({
      where: {
        orderType,
        sourceZoneId: pickupZoneId,
        destinationZoneId: dropZoneId,
      },
    });

    if (!rateCard) {
      return NextResponse.json({ error: 'No rate card found for this route and order type' }, { status: 400 });
    }

    // 3. Calculate charge
    const { billedWeight, totalCharge } = calculateCharge(
      Number(actualWeight),
      volumetricWeight,
      rateCard.baseRate,
      rateCard.weightRate,
      rateCard.codSurcharge,
      paymentType
    );

    // 4. Create Order
    const order = await prisma.order.create({
      data: {
        customerId,
        pickupAddress,
        dropAddress,
        pickupZoneId,
        dropZoneId,
        dimensions,
        actualWeight: Number(actualWeight),
        volumetricWeight,
        billedWeight,
        orderType,
        paymentType,
        totalCharge,
        status: 'PENDING',
      },
    });

    // 5. Auto-assign agent
    const agentId = await assignAgentToOrder(pickupZoneId, order.id);
    if (agentId) {
      await prisma.order.update({
        where: { id: order.id },
        data: { agentId, status: 'ASSIGNED' },
      });
      await prisma.orderTracking.create({
        data: {
          orderId: order.id,
          status: 'ASSIGNED',
          actorId: customerId, // System/Customer triggering it
          message: 'Agent auto-assigned',
        },
      });
    }

    // Also log initial creation
    await prisma.orderTracking.create({
      data: {
        orderId: order.id,
        status: 'PENDING',
        actorId: customerId,
        message: 'Order created',
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
