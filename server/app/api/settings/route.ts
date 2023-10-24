//api route to pull all message entries
import { prisma } from '@/app/lib/db'
import { NextResponse } from 'next/server'

//api route to push message entry

export async function GET() {

    const settings: Setting[] = await prisma.setting.findMany()

    return NextResponse.json( settings )
}
