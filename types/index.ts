export interface Deal {
  id: string;
  title: string;
  description: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  category: string;
  amazonUrl: string;
  features: string[];
  pros?: string[];
  cons?: string[];
  isFeatured?: boolean;
  isTrending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  dealCount: number;
}

export interface Newsletter {
  email: string;
  subscribed_at?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  published_at: string;
  category: string;
  tags: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}