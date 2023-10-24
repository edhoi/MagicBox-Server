//api route to push message entry
import { prisma } from '@/app/lib/db'
import { NextResponse } from "next/server"

type setting = {
    displayOption?: string,
    Data?: string,
}

export async function POST(request: Request) {
    const data: setting = await request.json()
    console.log('incoming data: ', data)

    const { displayOption, Data } = data
    const res = await prisma.setting.create({ data: {displayOption: data.displayOption, Data: data.Data}})

    return NextResponse.json( res )
}