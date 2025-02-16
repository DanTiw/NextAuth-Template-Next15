import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Attempt to retrieve the token from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If the user is not authenticated, redirect to the home page
  if (!token && req.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Allow the request to proceed if authenticated
  return NextResponse.next();
}

// Apply middleware to all routes except the home page
export const config = {
  matcher: ['/protected/:path*', '/dashboard/:path*'], // Add any other protected routes here
};
