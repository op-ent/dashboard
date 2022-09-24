import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { pages } from "~/lib/next-auth";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // TODO: replace with proper client
        // const res = await fetch("http://localhost:3333/api/auth/login", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
        // const error = undefined;
        // if (error) {
        //   return null;
        // }
        // const user = await res.json();
        // return user;
        if (
          credentials?.email === "test@test.com" &&
          credentials?.password === "test"
        ) {
          return {
            name: "Test",
            email: credentials?.email,
          };
        }
        return null;
      },
    }),
  ],
  pages,
});
