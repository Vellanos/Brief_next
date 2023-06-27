
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET() {
    const { accessToken } = await getServerSession(authOptions)
    const res = await fetch('https://api.spotify.com/v1/me/top/artists', {
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY,
            'Authorization': `Bearer ${accessToken}`
        },
    })
    const data = await res.json()
    console.log(data);

    return NextResponse.json({ data })
}