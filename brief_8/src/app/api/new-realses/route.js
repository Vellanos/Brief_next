
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET() {
    const getSpotifyAuthToken = async () => {
        const options = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + Buffer.from(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID + ':' + process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET).toString('base64')
            },
            data: 'grant_type=client_credentials'
        };

        const fetchToken = async () => {
            try {
                const response = await axios.post(
                    options.url,
                    options.data,
                    { headers: options.headers });

                if (response.status === 200) {
                    return response.data.access_token;
                }
            } catch (error) {
                return null
            }
        }

        return fetchToken()
    }
    const accessToken = await getSpotifyAuthToken()
    console.log(accessToken)
    const res = await fetch('https://api.spotify.com/browse/new-releases', {
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