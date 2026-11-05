import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();
const SECRET = process.env.JWT_SECRET || 'super-secret-key-for-dev';

export function signToken(payload: any) {
  return jwt.sign(payload, SECRET, { expiresIn: '1d' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET) as any;
  } catch (error) {
    return null;
  }
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  if (!token) return null;

  const payload = verifyToken(token);
  if (!payload) return null;

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
  });

  return user;
}
