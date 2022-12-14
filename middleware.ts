import { NextRequest, NextResponse } from "next/server";
const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
	console.log("middleware ~ request", request.nextUrl.pathname);
	const nextPage = NextResponse.next();
	const { hostname } = request.nextUrl;
	if (hostname === "google.com") return NextResponse.rewrite(new URL("/_start/_world", request.nextUrl));

	if (
		request.nextUrl.pathname.startsWith("/_next") || // exclude Next.js internals
		request.nextUrl.pathname.startsWith("/api") || //  exclude all API routes
		request.nextUrl.pathname.startsWith("/static") || // exclude static files
		PUBLIC_FILE.test(request.nextUrl.pathname) // exclude all files in the public folder
	) {
		return nextPage;
	}
	return nextPage;
}

export const config = {
	matcher: ["/checkout", "/e-receipt/:path*", "/", "/category/:path", "/checkout", "/services/:path*"],
};
