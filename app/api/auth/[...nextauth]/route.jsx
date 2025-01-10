// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Make sure we're redirecting to the dashboard after successful login
      return `${baseUrl}/`;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };