import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./auth/AuthService";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const session = await getSession();

  const excludedPaths = ["/login", "/api"];

  if (excludedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (!session) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
