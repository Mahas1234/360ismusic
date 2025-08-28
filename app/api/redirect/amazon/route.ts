import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Redirect helper for Amazon affiliate links
// Usage examples:
// GET /api/redirect/amazon?asin=B07QR6Z1JB
// GET /api/redirect/amazon?product=focusrite%20scarlett
// GET /api/redirect/amazon?q=focusrite+scarlett

export async function GET(request: Request) {
  const url = new URL(request.url);
  const asin = (url.searchParams.get('asin') || '').trim();
  const product = (url.searchParams.get('product') || '').trim();
  const q = (url.searchParams.get('q') || '').trim();
  const fallback = (url.searchParams.get('fallback') || '').trim();

  const TAG = process.env.AMAZON_AFFILIATE_TAG || 'mahas0f-21';
  let target = 'https://www.amazon.in';

  if (asin && /^[A-Z0-9]{10}$/.test(asin)) {
    target += `/dp/${asin}?tag=${encodeURIComponent(TAG)}`;
  } else if (product) {
    // prefer `product` (human-readable product name) for search
    target += `/s?k=${encodeURIComponent(product)}&tag=${encodeURIComponent(TAG)}`;
  } else if (q) {
    target += `/s?k=${encodeURIComponent(q)}&tag=${encodeURIComponent(TAG)}`;
  } else if (fallback) {
    target += `/s?k=${encodeURIComponent(fallback)}&tag=${encodeURIComponent(TAG)}`;
  } else {
    target += `/?tag=${encodeURIComponent(TAG)}`;
  }

  return NextResponse.redirect(target, 307);
}
