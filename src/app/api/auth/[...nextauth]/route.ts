import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const expectedUsername = process.env.ADMIN_USERNAME || "admin";
        const expectedPassword = process.env.ADMIN_PASSWORD || "admin123";
        
        if (credentials?.username === expectedUsername && credentials?.password === expectedPassword) {
          return { id: "1", name: "Admin", email: "admin@itvexo.com" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_dev",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
