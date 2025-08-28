export function buildAmazonUrl(productUrl: string): string {
  // Use NEXT_PUBLIC_AMAZON_AFFILIATE_ID when available, otherwise default to site tag
  const affiliateId = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_ID || 'mahas0f-21';

  try {
    // Normalize URL input
    if (!productUrl || productUrl.trim() === '') {
      return `https://www.amazon.in/?tag=${affiliateId}`;
    }

    // If productUrl is just an ASIN (e.g. 'B00HVLUR86' or 10-char code), build dp URL
    const asinOnlyMatch = productUrl.trim().toUpperCase().match(/^(B[0-9A-Z]{9,12}|[A-Z0-9]{10})$/);
    if (asinOnlyMatch) {
      const asin = asinOnlyMatch[0];
      const url = new URL(`https://www.amazon.in/dp/${asin}`);
      url.searchParams.set('tag', affiliateId);
      return url.toString();
    }

    // Try to extract ASIN from common Amazon URL patterns
    const asinMatch = productUrl.match(/(?:dp|gp\/product|product)\/(B[0-9A-Z]{9,12})/i) || productUrl.match(/\/([A-Z0-9]{10})(?:[/?]|$)/i);
    if (asinMatch && asinMatch[1]) {
      const asin = asinMatch[1];
      // Build canonical product URL using ASIN
      const url = new URL(`https://www.amazon.in/dp/${asin}`);
      url.searchParams.set('tag', affiliateId);
      return url.toString();
    }

    // If full URL appears to be an Amazon URL but without ASIN, attempt to append tag
    if (/amazon\.(com|in|co\.uk|de|ca|co|com\.au)/i.test(productUrl)) {
      const url = new URL(productUrl);
      // Replace existing tag if present
      url.searchParams.set('tag', affiliateId);
      return url.toString();
    }

    // Fallback: construct an Amazon search URL using the product title or URL path as query
    const fallbackQuery = encodeURIComponent(productUrl.replace(/https?:\/\//, '').replace(/[^a-zA-Z0-9\s]/g, ' '));
    const searchUrl = new URL(`https://www.amazon.in/s`);
    searchUrl.searchParams.set('k', fallbackQuery);
    searchUrl.searchParams.set('tag', affiliateId);
    return searchUrl.toString();
  } catch (error) {
    console.error('Error building Amazon URL:', error);
    return productUrl;
  }
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function calculateSavings(original: number, sale: number): string {
  const savings = original - sale;
  return formatPrice(savings);
}

export function getDiscountBadge(discount: number): string {
  return `-${discount}% OFF`;
}