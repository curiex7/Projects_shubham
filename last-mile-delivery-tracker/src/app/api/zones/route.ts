import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const zones = await prisma.zone.findMany();
    return NextResponse.json(zones);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, areas } = await req.json();
    const zone = await prisma.zone.create({
      data: { name, areas },
    });
    return NextResponse.json(zone, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
