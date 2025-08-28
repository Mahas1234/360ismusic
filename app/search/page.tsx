import DealCard from '@/components/deals/deal-card';
import { allDeals } from '@/lib/data/deals';

interface SearchPageProps {
  searchParams?: { q?: string };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = (searchParams?.q || '').toString().trim();

  // Simple server-side search across title, description, category and features
  const results = query
    ? allDeals.filter((deal) => {
        const hay = [deal.title, deal.description, deal.category, ...(deal.features || [])]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return query.toLowerCase().split(/\s+/).every((term) => hay.includes(term));
      })
    : [];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Search Results</h1>
          <p className="text-sm text-gray-600 mt-1">
            {query ? (
              <>
                Showing results for <span className="font-medium">“{query}”</span>
                {results.length > 0 ? (
                  <span className="ml-2 text-gray-500">({results.length} found)</span>
                ) : null}
              </>
            ) : (
              'Enter a search query using the search box in the header.'
            )}
          </p>
        </div>

        {query && results.length === 0 && (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-4">Try different keywords or check spelling.</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((deal, idx) => (
              <DealCard key={deal.id} deal={deal} index={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
