import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))

  // const { pathname } = request.nextUrl;

  // if (
  //   (pathname === "/login" || pathname === "/register") &&
  //   request.cookies.has("userAuth")
  // )
  //   return NextResponse.redirect(new URL("/", request.url));

  // if (
  //   (pathname === "/" || pathname === "/accounts") &&
  //   !request.cookies.has("userAuth")
  // )
  //   return NextResponse.redirect(new URL("/login", request.url));

  // return NextResponse.next();

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}