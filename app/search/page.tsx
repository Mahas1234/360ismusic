"use client";

import { useEffect, useState } from 'react';
import DealCard from '@/components/deals/deal-card';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = (searchParams?.get('q') || '').toString().trim();

  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      if (!query) {
        setResults([]);
        return;
      }

      setLoading(true);
      // Dynamically import the large deals dataset on the client to avoid bundling it into the server static build
      const mod = await import('@/lib/data/deals');
      const allDeals = (mod as any).allDeals as any[];

      const q = query.toLowerCase();
      const filtered = allDeals.filter((deal) => {
        const hay = [deal.title, deal.description, deal.category, ...(deal.features || [])]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return q.split(/\s+/).every((term) => hay.includes(term));
      });

      if (!cancelled) {
        setResults(filtered);
        setLoading(false);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [query]);

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

        {query && results.length === 0 && !loading && (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-4">Try different keywords or check spelling.</p>
          </div>
        )}

        {loading && (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-gray-600">Searching...</p>
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
