import { NextRequest, NextResponse } from 'next/server';

import data from '@/lib/data';
import dbConnect from '@/lib/dbConnect';

export const GET = async (request: NextRequest) => {
  const { users, products } = data;
  await dbConnect();
  return NextResponse.json({
    message: 'seeded successfully',
    users,
    products,
  });
};
