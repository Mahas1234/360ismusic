import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import DealCard from '@/components/deals/deal-card';
import StructuredData from '@/components/ui/structured-data';
import { allDeals, categories } from '@/lib/data/deals';
import { generateProductJsonLd, generateBreadcrumbJsonLd } from '@/lib/utils/seo';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found - 360ismusic',
    };
  }

  return {
    title: `Best ${category.name} Deals on Amazon - 360ismusic`,
    description: `Find the best Amazon deals on ${category.name.toLowerCase()}. ${category.description} with up to 70% off premium brands.`,
    keywords: [`${category.name.toLowerCase()} deals`, 'amazon music deals', 'music equipment'],
    openGraph: {
      title: `Best ${category.name} Deals on Amazon - 360ismusic`,
      description: `Find the best Amazon deals on ${category.name.toLowerCase()}. ${category.description}`,
      images: [category.image],
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  // In a real app, you would fetch deals by category from your database/API
  const categoryDeals = allDeals.filter(deal => 
    deal.category === category.id || 
    deal.category === category.slug
  );

  return (
    <>
      {/* Breadcrumb Schema */}
      <StructuredData data={generateBreadcrumbJsonLd(category)} />
      
      {/* Structured Data */}
      {categoryDeals.slice(0, 10).map((deal) => (
        <StructuredData key={deal.id} data={generateProductJsonLd(deal)} />
      ))}

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Best {category.name} Deals
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {category.description}. Find amazing discounts on top brands with verified Amazon deals.
              </p>
              <div className="flex items-center justify-center mt-6 text-white/80">
                <span className="text-sm">
                  {category.dealCount} active deals • Updated daily
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Deals Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {categoryDeals.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {categoryDeals.length} {category.name} Deals
                  </h2>
                  
                  {/* Filter/Sort options would go here */}
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Sort by:</span>
                    <select className="border border-gray-300 rounded-md px-3 py-1">
                      <option>Discount %</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rating</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryDeals.map((deal, index) => (
                    <DealCard key={deal.id} deal={deal} index={index} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No deals available right now
                </h3>
                <p className="text-gray-600 mb-6">
                  Check back soon for new {category.name.toLowerCase()} deals!
                </p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                  Notify Me When Available
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Category Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About {category.name} Deals
              </h2>
              
              <p className="text-gray-600 mb-6">
                {category.description} Our curated selection includes deals from top brands, 
                ensuring you get the best value for your money. We update our {category.name.toLowerCase()} 
                deals daily to bring you the freshest discounts and limited-time offers.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Shop {category.name} on Amazon?
              </h3>
              
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Wide Selection:</strong> Thousands of {category.name.toLowerCase()} from various brands on Amazon India</li>
                <li>• <strong>Prime Shipping:</strong> Fast, free delivery with Amazon Prime India</li>
                <li>• <strong>Customer Reviews:</strong> Real feedback from verified purchasers</li>
                <li>• <strong>Return Policy:</strong> Easy returns and exchanges</li>
                <li>• <strong>Price Protection:</strong> Competitive pricing and deal alerts</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="font-semibold text-gray-900 mb-3">💡 Pro Tips for {category.name} Shopping:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Check deal expiration dates - many offers are time-sensitive</li>
                  <li>• Read customer reviews and ratings before purchasing</li>
                  <li>• Compare prices across different models and brands</li>
                  <li>• Sign up for our newsletter to get notified about flash sales</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}