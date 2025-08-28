export function buildAmazonUrl(productUrl?: string, productTitle?: string): string {
  // Prefer explicit India affiliate tag, then fallback to generic affiliate ID
  const affiliateId = process.env.NEXT_PUBLIC_AMAZON_IN_TAG || process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_ID || 'mahas0f-21';

  try {
    const titleQuery = productTitle?.trim();

    // If no productUrl provided, use product title as search query when available
    if (!productUrl || productUrl.trim() === '') {
      const base = new URL('https://www.amazon.in/s');
      if (titleQuery) base.searchParams.set('k', titleQuery);
      base.searchParams.set('tag', affiliateId);
      return base.toString();
    }

    const input = productUrl.trim();

    // If input is just an ASIN, prefer productTitle for search if available
    const asinOnlyMatch = input.toUpperCase().match(/^(B[0-9A-Z]{9,12}|[A-Z0-9]{10})$/);
    if (asinOnlyMatch) {
      const query = titleQuery || asinOnlyMatch[0];
      const url = new URL('https://www.amazon.in/s');
      url.searchParams.set('k', query);
      url.searchParams.set('tag', affiliateId);
      return url.toString();
    }

    // If it's an Amazon URL, try to extract a readable product name from the path
    if (/amazon\.(com|in|co\.uk|de|ca|co|com\.au)/i.test(input)) {
      try {
        const parsed = new URL(input);
        // If a search query 'k' already exists, prefer to keep it but replace tag
        const existingK = parsed.searchParams.get('k');
        if (existingK) {
          const keep = existingK;
          const out = new URL('https://www.amazon.in/s');
          out.searchParams.set('k', keep);
          out.searchParams.set('tag', affiliateId);
          return out.toString();
        }

        // Try to derive a product name from the pathname before '/dp/' or from the path segments
        let nameQuery = '';
        const pathname = parsed.pathname || '';
        const dpIndex = pathname.toLowerCase().indexOf('/dp/');
        if (dpIndex > 0) {
          // segment before /dp/ often contains the product title with hyphens
          nameQuery = pathname.substring(1, dpIndex).replace(/[-_/]+/g, ' ');
        } else {
          const parts = pathname.split('/').filter(Boolean);
          if (parts.length) {
            // join parts except common prefixes like 'gp' or 'product'
            nameQuery = parts.filter(p => !/^(gp|product)$/i.test(p)).join(' ');
          }
        }

        // If we couldn't get a name from the path, use provided productTitle if available
        if (!nameQuery && titleQuery) nameQuery = titleQuery;

        // As a final fallback, if an ASIN exists in the URL use it as query
        if (!nameQuery) {
          const asinMatch = input.match(/(?:dp|gp\/product|product)\/(B[0-9A-Z]{9,12})/i) || input.match(/\/([A-Z0-9]{10})(?:[/?]|$)/i);
          if (asinMatch && asinMatch[1]) nameQuery = asinMatch[1];
        }

        const out = new URL('https://www.amazon.in/s');
        if (nameQuery) out.searchParams.set('k', nameQuery.trim());
        out.searchParams.set('tag', affiliateId);
        return out.toString();
      } catch (e) {
        // fall through to generic search
      }
    }

    // For non-Amazon inputs, prefer titleQuery if present, otherwise use the input as query
    const fallbackQuery = titleQuery || input;
    const searchUrl = new URL('https://www.amazon.in/s');
    if (fallbackQuery) searchUrl.searchParams.set('k', fallbackQuery);
    searchUrl.searchParams.set('tag', affiliateId);
    return searchUrl.toString();
  } catch (error) {
    console.error('Error building Amazon URL:', error);
    return productUrl || `https://www.amazon.in/?tag=${affiliateId}`;
  }
}

// Pricing / display helpers
const DEFAULT_USD_TO_INR = parseFloat(process.env.NEXT_PUBLIC_USD_TO_INR || '83');
const DISPLAY_CURRENCY = (process.env.NEXT_PUBLIC_DISPLAY_CURRENCY || 'INR').toUpperCase();

export function usdToInr(amountUsd: number, rate = DEFAULT_USD_TO_INR): number {
  return Math.round((amountUsd || 0) * rate * 100) / 100; // keep two decimal precision
}

export function formatPrice(price: number | undefined | null): string {
  if (price == null || isNaN(price as any)) return '';

  if (DISPLAY_CURRENCY === 'INR') {
    const inr = usdToInr(price as number);
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(inr);
  }

  // default USD formatting
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price as number);
}

export function calculateSavings(original: number, sale: number): string {
  const savings = (original || 0) - (sale || 0);
  return formatPrice(savings);
}

export function getDiscountBadge(discount: number): string {
  return `-${discount}% OFF`;
}