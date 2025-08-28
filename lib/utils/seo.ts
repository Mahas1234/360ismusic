import { Deal, BlogPost } from '@/types';

export function generateProductJsonLd(deal: Deal) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: deal.title,
    description: deal.description,
    image: deal.image,
    brand: {
      '@type': 'Brand',
      name: 'Various'
    },
    offers: {
      '@type': 'Offer',
      price: deal.salePrice,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Amazon'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: deal.rating,
      reviewCount: deal.reviewCount
    }
  };
}

export function generateReviewJsonLd(deal: Deal) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: deal.title,
      image: deal.image
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: deal.rating,
      bestRating: 5
    },
    author: {
      '@type': 'Organization',
      name: '360ismusic'
    },
    publisher: {
      '@type': 'Organization',
      name: '360ismusic',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`
      }
    }
  };
}

export function generateFAQJsonLd(faqs: Array<{question: string, answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateBlogJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      '@type': 'Organization',
      name: '360ismusic'
    },
    publisher: {
      '@type': 'Organization',
      name: '360ismusic',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`
      }
    },
    datePublished: post.published_at,
    dateModified: post.published_at
  };
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '360ismusic',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${process.env.NEXT_PUBLIC_SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '360ismusic',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    description: 'Your ultimate destination for the best Amazon deals on music instruments, studio gear, headphones, and audio equipment.',
    sameAs: [
      'https://twitter.com/360ismusic',
      'https://facebook.com/360ismusic',
      'https://instagram.com/360ismusic'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@360ismusic.com'
    },
    foundingDate: '2024',
    knowsAbout: [
      'Music Instruments',
      'Studio Equipment',
      'Audio Gear',
      'Amazon Deals',
      'Music Technology'
    ]
  };
}

export function generateBreadcrumbJsonLd(category: { name: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.NEXT_PUBLIC_SITE_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Categories',
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/categories`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/category/${category.slug}`
      }
    ]
  };
}