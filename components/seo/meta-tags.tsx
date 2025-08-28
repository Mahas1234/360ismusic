import Head from 'next/head';
import StructuredData from '../ui/structured-data';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductSchema {
  name: string;
  description?: string;
  image?: string;
  sku?: string;
  brand?: string;
  price?: string | number;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | string;
  url?: string;
  asin?: string;
}

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
  product?: ProductSchema;
}

export default function MetaTags({
  title,
  description,
  keywords = [],
  image = '/og-default.jpg',
  url = '',
  type = 'website',
  noIndex = false,
  breadcrumbs = [],
  faq = [],
  product,
}: MetaTagsProps) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || '360ismusic';
  const fullUrl = siteUrl + url;
  const fullImageUrl = image?.startsWith('http') ? image : siteUrl + image;
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en_IN';

  // Organization + Website structured data
  const orgAndWebsite: any = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        'name': siteName,
        'url': siteUrl,
        'logo': {
          '@type': 'ImageObject',
          'url': `${siteUrl}/logo.png`
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        'url': siteUrl,
        'name': siteName,
        'publisher': {
          '@id': `${siteUrl}/#organization`
        },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': `${siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  // BreadcrumbList structured data
  let breadcrumbLd = null;
  if (breadcrumbs.length > 0) {
    breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        'position': i + 1,
        'name': b.name,
        'item': siteUrl + b.url
      }))
    };
  } else if (url && url !== '/') {
    // Derive simple breadcrumb from path
    const parts = url.split('/').filter(Boolean);
    if (parts.length > 0) {
      breadcrumbLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': parts.map((p, i) => {
          const name = decodeURIComponent(p.replace(/[-_]/g, ' '));
          const itemUrl = siteUrl + '/' + parts.slice(0, i + 1).join('/');
          return {
            '@type': 'ListItem',
            'position': i + 1,
            'name': name,
            'item': itemUrl
          };
        })
      };
    }
  }

  // Product structured data (optional)
  let productLd = null;
  if (product?.name) {
    productLd = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': product.name,
      'description': product.description || description,
      'image': product.image ? (product.image.startsWith('http') ? product.image : siteUrl + product.image) : fullImageUrl,
      'sku': product.sku || product.asin || undefined,
      'brand': product.brand ? { '@type': 'Brand', 'name': product.brand } : undefined,
      'offers': product.price ? {
        '@type': 'Offer',
        'url': product.url || fullUrl,
        'priceCurrency': product.currency || 'INR',
        'price': String(product.price),
        'availability': product.availability ? `https://schema.org/${product.availability}` : 'https://schema.org/InStock'
      } : undefined
    };
  }

  // FAQ structured data (optional)
  let faqLd = null;
  if (faq.length > 0) {
    faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faq.map(f => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer
        }
      }))
    };
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

        {noIndex && <meta name="robots" content="noindex,nofollow" />}

        {/* Open Graph */}
        <meta property="og:locale" content={locale} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={fullImageUrl} />

        {/* Canonical URL */}
        <link rel="canonical" href={fullUrl} />

        {/* Additional SEO tags */}
        <meta name="author" content={siteName} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      {/* Structured data JSON-LD */}
      <StructuredData data={orgAndWebsite} />
      {breadcrumbLd && <StructuredData data={breadcrumbLd} />}
      {productLd && <StructuredData data={productLd} />}
      {faqLd && <StructuredData data={faqLd} />}
    </>
  );
}