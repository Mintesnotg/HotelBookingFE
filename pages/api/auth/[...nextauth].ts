import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) : Promise<any>  {
        debugger;
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Account/Login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const data = await response.json();

        if (response.ok && data?.Token) {
          return {
            id: data.userId,
            email: credentials?.email,
            token: data.Token,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      // session.user.id = token.id;
      // session.user.token = token.token;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login", // Custom sign-in page
  },
  secret: process.env.AUTH_SECRET,
});
