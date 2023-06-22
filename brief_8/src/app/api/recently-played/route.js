
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET() {
    const { accessToken } = await getServerSession(authOptions)
    const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=20', {
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY,
            'Authorization': `Bearer ${accessToken}`
        },
    })
    const data = await res.json()

    // const recentlyPlayedTracks = data.items.map(item => ({
    //     name: item?.track?.name,
    //     id: item?.track?.id,
    //     album: {
    //         name: item?.track?.album?.name,
    //         id: item?.track?.album?.id,
    //         image: item?.track?.album?.images[0]?.url,
    //         artist: item?.track?.artists[0]?.name,
    //     },
    // }))

    // console.log(recentlyPlayedTracks)

    return NextResponse.json({ data })
}