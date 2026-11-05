import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../../../generated/prisma';

const prisma = new PrismaClient();

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    // Await params first to satisfy Next.js route segment config rules if required
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const { status, actorId } = await req.json();

    const order = await prisma.order.update({
      where: { id },
      data: { status },
    });

    await prisma.orderTracking.create({
      data: {
        orderId: id,
        status,
        actorId,
        message: `Status updated to ${status}`,
      },
    });

    // Simulated Email/SMS Notification
    console.log(`[NOTIFICATION] Email & SMS sent to Customer for Order ${id}: Status changed to ${status}`);

    // If failed, auto-reschedule logic could go here, or just flag it as failed.
    if (status === 'FAILED') {
      console.log(`[NOTIFICATION] Order ${id} failed. Customer notified to reschedule.`);
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
