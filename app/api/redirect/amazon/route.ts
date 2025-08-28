import { NextResponse } from 'next/server';

// Note: The affiliate redirect API was removed to support static export (GitHub Pages).
// The UI now links directly to Amazon using `lib/utils/amazon.buildAmazonUrl` which appends
// the affiliate tag. If you still require a server-side redirect, host it separately (Vercel/Netlify).

export async function GET() {
  return new NextResponse('Affiliate redirect endpoint removed. Use direct Amazon links.', { status: 410 });
}
