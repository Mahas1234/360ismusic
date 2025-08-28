import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import StructuredData from '@/components/ui/structured-data';
import { generateWebsiteJsonLd, generateOrganizationJsonLd } from '@/lib/utils/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '360ismusic - Best Amazon Music & Tech Deals',
  description: 'Discover incredible savings on Amazon music instruments, studio gear, headphones, and audio equipment. Up to 70% off premium brands with daily deal updates.',
  keywords: ['amazon deals', 'music instruments', 'studio gear', 'headphones', 'music equipment', 'guitar deals', 'audio gear'],
  authors: [{ name: '360ismusic' }],
  creator: '360ismusic',
  publisher: '360ismusic',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://360ismusic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '360ismusic - Best Amazon Music & Tech Deals',
    description: 'Discover incredible savings on Amazon music instruments, studio gear, headphones, and audio equipment.',
    url: '/',
    siteName: '360ismusic',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: '360ismusic - Amazon Music Deals',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '360ismusic - Best Amazon Music & Tech Deals',
    description: 'Discover incredible savings on Amazon music instruments, studio gear, headphones, and audio equipment.',
    images: ['/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={generateWebsiteJsonLd()} />
        <StructuredData data={generateOrganizationJsonLd()} />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.pexels.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}