import HeroBanner from '@/components/home/hero-banner';
import DealsCarousel from '@/components/deals/deals-carousel';
import CategoriesGrid from '@/components/home/categories-grid';
import NewsletterSignup from '@/components/ui/newsletter-signup';
import StructuredData from '@/components/ui/structured-data';
import { allDeals } from '@/lib/data/deals';
import { generateProductJsonLd, generateFAQJsonLd, generateWebsiteJsonLd } from '@/lib/utils/seo';

export default function Home() {
  const trendingDeals = allDeals.filter(deal => deal.isTrending).slice(0, 12);
  const todayDeals = allDeals.filter(deal => deal.isFeatured).slice(0, 12);

  const faqs = [
    {
      question: "How often are deals updated on 360ismusic?",
      answer: "We update our Amazon music deals daily to ensure you get the latest discounts and flash sales from top brands."
    },
    {
      question: "Are these Amazon affiliate links?",
      answer: "Yes, 360ismusic participates in the Amazon India Associates Program. When you purchase through our links, we may earn a commission at no additional cost to you."
    },
    {
      question: "What types of music equipment do you cover?",
      answer: "We cover guitars, studio gear, headphones, keyboards, audio interfaces, and music accessories from premium brands like Fender, Audio-Technica, Yamaha, and more."
    },
    {
      question: "How do I know these deals are legitimate?",
      answer: "All deals are verified from Amazon India and include real customer reviews, ratings, and current pricing. We focus on genuine discounts from authorized sellers."
    },
    {
      question: "Do you offer price matching or guarantees?",
      answer: "While we don't offer price matching, we strive to showcase the best available deals. Our affiliate links ensure you get the current Amazon pricing."
    }
  ];

  return (
    <>
      {/* Website Schema */}
      <StructuredData data={generateWebsiteJsonLd()} />
      
      {/* FAQ Schema */}
      <StructuredData data={generateFAQJsonLd(faqs)} />
      
      {/* Structured Data for Featured Products */}
      {allDeals.slice(0, 10).map((deal) => (
        <StructuredData key={deal.id} data={generateProductJsonLd(deal)} />
      ))}

      <HeroBanner />
      
      <section id="featured-deals" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DealsCarousel 
            deals={todayDeals}
            title="🔥 Today's Featured Deals"
          />
        </div>
      </section>

      <CategoriesGrid />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DealsCarousel 
            deals={trendingDeals}
            title="📈 Trending Deals"
          />
        </div>
      </section>

      <NewsletterSignup />

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose 360ismusic for Amazon Music Deals?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Curated Selection</h3>
                <p className="text-gray-600">
                  We hand-pick only the best Amazon deals on guitars, studio equipment, headphones, 
                  and music accessories from trusted brands.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ Daily Updates</h3>
                <p className="text-gray-600">
                  Our team updates deals daily, ensuring you never miss flash sales or 
                  limited-time offers on premium music gear.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">💰 Maximum Savings</h3>
                <p className="text-gray-600">
                  Find discounts up to 70% off on top music brands including Fender, 
                  Audio-Technica, Yamaha, and more.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">📱 Mobile Optimized</h3>
                <p className="text-gray-600">
                  Shop deals seamlessly on any device with our fast, mobile-first 
                  design optimized for quick purchasing decisions.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Popular Music Equipment Categories
            </h3>
            
            <ul className="space-y-2 text-gray-600">
              <li><strong>Electric & Acoustic Guitars:</strong> Fender, Gibson, Martin, Taylor, Epiphone deals</li>
              <li><strong>Studio Equipment:</strong> Audio interfaces, monitors, microphones, mixers</li>
              <li><strong>Headphones & Earbuds:</strong> Sony, Audio-Technica, Sennheiser, Beats</li>
              <li><strong>Keyboards & Synths:</strong> Digital pianos, MIDI controllers, synthesizers</li>
              <li><strong>Recording Gear:</strong> USB microphones, pop filters, audio cables</li>
              <li><strong>Music Accessories:</strong> Guitar picks, straps, cases, stands</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600">
                <strong>Affiliate Disclosure:</strong> 360ismusic participates in the Amazon India 
                Associates Program. When you purchase through our affiliate links, we may earn a commission 
                at no additional cost to you. This helps support our site and allows us to continue finding 
                the best deals for musicians and audio enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}