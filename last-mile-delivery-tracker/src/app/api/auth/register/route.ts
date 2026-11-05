import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '../../../../../generated/prisma';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, password, role, zoneId } = await req.json();

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        zoneId: role === 'AGENT' ? zoneId : null,
      },
    });

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
