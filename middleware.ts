import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl;
  const url = req.nextUrl.clone();
  switch (pathname) {
    // case "/":
    //   url.pathname = "/auth/login";
    //   return NextResponse.redirect(url);
    default:
      return NextResponse.next();
  }
}
