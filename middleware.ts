import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { pages } from "~/lib/next-auth";

export default withAuth(
  async function middleware(req: NextRequest, ev: NextFetchEvent) {
    // const { pathname } = req.nextUrl;
    // const url = req.nextUrl.clone();
    // switch (pathname) {
    // case "/":
    //   url.pathname = "/auth/login";
    //   return NextResponse.redirect(url);
    // default:
    return NextResponse.next();
    // }
  },
  {
    callbacks: {
      // never block static assets
      authorized: ({ req, token }) =>
        !!(token || req.nextUrl.pathname.includes(".")),
    },
    pages,
  }
);

export const config = {
  matcher: ["/((?!auth/register|auth/reset-password).*)"],
};
