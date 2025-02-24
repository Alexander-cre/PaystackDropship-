import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
        authorization: {
          params: {
            scope: 'email profile', // Requesting email and profile scopes
          },
        },
      }),
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Redirect to the profile page after sign-in
            return `http://localhost:3000/user`; // Adjust the path as needed
          },
      async session({ session, token }) {
        // Attach user information to the session object
        session.user.email = token.email;
        session.user.name = token.name;

        return session;
      },
      async jwt({ token, user, account }) {
        if (account) {
          token.email = user.email; // Store email in token
          token.name = user.name; // Store name in token
        }
    
        return token;
      },
    },
  }