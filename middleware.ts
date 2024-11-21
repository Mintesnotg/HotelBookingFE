import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });

  // Define paths that require authentication
  const protectedPaths = ['/main'];

  const isProtectedPath = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path));

  if (isProtectedPath) {
    debugger;
    if (!token) {
      // Redirect to sign-in page if not authenticated
      const url = new URL('/login', request.url);
      url.searchParams.set('callbackUrl', request.url); // Optional: To redirect back after sign-in
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Specify the paths the middleware applies to
export const config = {
  matcher: ['/main/:path*'],
};
