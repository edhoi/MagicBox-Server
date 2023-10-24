//await prisma.setting.delete({ where: { id: 2, }, })
import { prisma } from '@/app/lib/db'
import { NextResponse } from "next/server"

export async function GET() {
    
    const res = await prisma.setting.deleteMany({})

    return NextResponse.json({ "message": 'PURGED!' })
}