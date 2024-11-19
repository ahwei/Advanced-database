import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set.');
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: name || '',
        },
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
