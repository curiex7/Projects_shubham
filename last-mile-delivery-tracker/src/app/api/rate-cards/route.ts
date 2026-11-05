import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const rateCards = await prisma.rateCard.findMany({
      include: { sourceZone: true, destinationZone: true },
    });
    return NextResponse.json(rateCards);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { orderType, sourceZoneId, destinationZoneId, baseRate, weightRate, codSurcharge } = await req.json();
    const rateCard = await prisma.rateCard.create({
      data: {
        orderType,
        sourceZoneId,
        destinationZoneId,
        baseRate: Number(baseRate),
        weightRate: Number(weightRate),
        codSurcharge: Number(codSurcharge),
      },
    });
    return NextResponse.json(rateCard, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
