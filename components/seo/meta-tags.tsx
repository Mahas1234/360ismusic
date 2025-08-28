import Head from 'next/head';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

export default function MetaTags({
  title,
  description,
  keywords = [],
  image = '/og-default.jpg',
  url = '',
  type = 'website',
  noIndex = false
}: MetaTagsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const fullUrl = siteUrl + url;
  const fullImageUrl = image.startsWith('http') ? image : siteUrl + image;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="360ismusic" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Additional SEO tags */}
      <meta name="author" content="360ismusic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Head>
  );
}