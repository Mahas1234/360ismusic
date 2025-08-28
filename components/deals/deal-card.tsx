"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, ExternalLink, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Deal } from '@/types';
import { buildAmazonUrl, formatPrice, getDiscountBadge } from '@/lib/utils/amazon';

interface DealCardProps {
  deal: Deal;
  index?: number;
}

export default function DealCard({ deal, index = 0 }: DealCardProps) {
  const handleAmazonClick = () => {
    const affiliateUrl = buildAmazonUrl(deal.amazonUrl);
    window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
    
    // Track affiliate click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'affiliate_click', {
        product_id: deal.id,
        product_name: deal.title,
        value: deal.salePrice
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={deal.image}
          alt={deal.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {deal.discount > 0 && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-red-500 hover:bg-red-600 text-white font-bold px-2 py-1">
              <Tag className="w-3 h-3 mr-1" />
              {getDiscountBadge(deal.discount)}
            </Badge>
          </div>
        )}

        {/* Featured/Trending Badges */}
        <div className="absolute top-3 right-3 flex flex-col space-y-1">
          {deal.isFeatured && (
            <Badge variant="secondary" className="text-xs">
              Featured
            </Badge>
          )}
          {deal.isTrending && (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs">
              Trending
            </Badge>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
          {deal.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {deal.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(deal.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {deal.rating} ({deal.reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">
              {formatPrice(deal.salePrice)}
            </span>
            {deal.originalPrice > deal.salePrice && (
              <span className="text-lg text-gray-400 line-through">
                {formatPrice(deal.originalPrice)}
              </span>
            )}
          </div>
          {deal.originalPrice > deal.salePrice && (
            <span className="text-sm text-green-600 font-semibold">
              Save {formatPrice(deal.originalPrice - deal.salePrice)}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Button 
          onClick={handleAmazonClick}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Check Price on Amazon
        </Button>

        {/* Features */}
        {deal.features && deal.features.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Features:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {deal.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}