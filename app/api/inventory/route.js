import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
      const inventarioData = await prisma.inventory.findMany();
      return NextResponse.json(inventarioData);
    } catch (error) {
      console.error("Error fetching data:", error);
      return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
    }
  }