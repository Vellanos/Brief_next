import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import refreshAccessToken from "@/app/components/lib/spotify/refreshAccessToken"

export const authOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
            authorization: {
                url: "https://accounts.spotify.com/authorize?",
                params: {
                    scope: process.env.NEXT_PUBLIC_SCOPE,
                }
            },
        })
    ],
    pages: {
        signIn: "/",
        error: "/404"
    },
    callbacks: {
        async jwt({ token, user, account }) {
            // Initial sign in
            if (account && user) {
                return {
                    accessToken: account.access_token,
                    accessTokenExpires: account.expires_at * 1000,
                    refreshToken: account.refresh_token,
                    user,
                }
            }

            // Return previous token if the access token has not expired yet
            if (Date.now() < token.accessTokenExpires) {
                return token
            }

            // Access token has expired, try to update it
            return refreshAccessToken(token)
        },
        async session({ session, token }) {
            session.user = token.user
            session.accessToken = token.accessToken
            session.error = token.error
            return session
        },

    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
