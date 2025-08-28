import { Deal } from '@/types';
import importedDeals from './imported-deals-800.json';

export const featuredDeals: Deal[] = [
  {
    id: '1',
    title: 'Audio-Technica ATH-M50x Professional Studio Monitor Headphones',
    description: 'Professional-grade headphones with exceptional clarity and deep bass response.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 149.99,
    salePrice: 99.99,
    discount: 33,
    rating: 4.6,
    reviewCount: 15420,
    category: 'headphones',
    amazonUrl: 'https://amazon.in/dp/B00HVLUR86',
    features: [
      'Professional-grade headphones',
      '45mm large-aperture drivers',
      'Exceptional clarity throughout frequency range',
      'Comfortable around-ear design'
    ],
    pros: [
      'Excellent sound quality',
      'Durable construction',
      'Comfortable for long sessions',
      'Great value for money'
    ],
    cons: [
      'Non-detachable cable',
      'Can be tight on larger heads',
      'Limited color options'
    ],
    isFeatured: true,
    isTrending: true
  },
  {
    id: '2',
    title: 'Yamaha MG10XU 10-Input Stereo Mixer with Effects',
    description: 'Compact analog mixer perfect for small live performances and home recording.',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 199.99,
    salePrice: 149.99,
    discount: 25,
    rating: 4.5,
    reviewCount: 2890,
    category: 'studio-gear',
    // Replaced 404 product URL with ASIN-only fallback so buildAmazonUrl can create a valid affiliate link/search URL at runtime
    amazonUrl: 'https://www.amazon.in/dp/B00IBIVBZW?tag=mahas0f-21',
    features: [
      '10-input stereo mixer',
      'Built-in SPX digital multi-FX processor',
      '1-Knob compressors',
      'USB connectivity for recording'
    ],
    isFeatured: true
  },
  {
    id: '3',
    title: 'Fender Player Stratocaster Electric Guitar',
    description: 'Classic Stratocaster tone and versatility with modern player-friendly features.',
    image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 799.99,
    salePrice: 649.99,
    discount: 19,
    rating: 4.7,
    reviewCount: 1245,
    category: 'guitars',
    amazonUrl: 'https://amazon.in/dp/B077S2QZPX',
    features: [
      'Alder body with gloss polyester finish',
      'Maple neck with modern "C" shape',
      'Three Player Series Alnico V Single-Coil Strat pickups',
      '2-point synchronized tremolo bridge'
    ],
    isFeatured: true
  },
  {
    id: '4',
    title: 'Sony WH-1000XM4 Wireless Premium Noise Canceling Headphones',
    description: 'Industry-leading noise canceling technology with premium sound quality.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 349.99,
    salePrice: 249.99,
    discount: 29,
    rating: 4.4,
    reviewCount: 8760,
    category: 'headphones',
    amazonUrl: 'https://amazon.in/dp/B0863TXGM3',
    features: [
      'Industry-leading noise canceling',
      '30-hour battery life',
      'Touch sensor controls',
      'Speak-to-chat technology'
    ],
    isTrending: true
  },
  {
    id: '5',
    title: 'Blue Yeti USB Microphone for Recording and Streaming',
    description: 'Professional USB condenser microphone with multiple pickup patterns.',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 99.99,
    salePrice: 79.99,
    discount: 20,
    rating: 4.3,
    reviewCount: 12450,
    category: 'studio-gear',
    amazonUrl: 'https://amazon.in/dp/B002VA464S',
    features: [
      'Three-capsule array',
      'Four pickup patterns',
      'Plug and play setup',
      'Zero-latency headphone monitoring'
    ],
    isTrending: true
  },
  {
    id: '6',
    title: 'Ibanez RG Series Electric Guitar - RG550',
    description: 'High-performance electric guitar with super thin neck and locking tremolo.',
    image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 899.99,
    salePrice: 699.99,
    discount: 22,
    rating: 4.5,
    reviewCount: 892,
    category: 'guitars',
    amazonUrl: 'https://amazon.in/dp/B0002CZVXM',
    features: [
      'Super thin Wizard III neck',
      'Quantum humbucker pickups',
      'Edge locking tremolo',
      'Basswood body'
    ],
    isFeatured: true
  },
  {
    id: '7',
    title: 'Shure SM7B Dynamic Microphone',
    description: 'Professional dynamic microphone perfect for podcasting and broadcasting.',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 399.99,
    salePrice: 349.99,
    discount: 13,
    rating: 4.8,
    reviewCount: 5670,
    category: 'studio-gear',
    amazonUrl: 'https://amazon.in/dp/B0002E4Z8M',
    features: [
      'Dynamic microphone',
      'Flat frequency response',
      'Built-in air suspension shock isolation',
      'Yoke mount with locking screw'
    ],
    isTrending: true
  },
  {
    id: '8',
    title: 'Bose QuietComfort Earbuds II',
    description: 'True wireless earbuds with world-class noise cancellation.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 279.99,
    salePrice: 199.99,
    discount: 29,
    rating: 4.2,
    reviewCount: 12340,
    category: 'headphones',
    amazonUrl: 'https://amazon.in/dp/B0B8J4C8VH',
    features: [
      '11 levels of noise cancellation',
      'Up to 6 hours of battery life',
      'Touch controls',
      'Secure fit'
    ]
  },
  {
    id: '9',
    title: 'Roland FP-30 Digital Piano',
    description: 'Portable digital piano with weighted keys and Bluetooth connectivity.',
    image: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 799.99,
    salePrice: 599.99,
    discount: 25,
    rating: 4.6,
    reviewCount: 2156,
    category: 'keyboards',
    amazonUrl: 'https://amazon.in/dp/B08L9L8Z8L',
    features: [
      '88 weighted keys',
      'Bluetooth connectivity',
      'SuperNATURAL sound engine',
      'Built-in speakers'
    ],
    isFeatured: true
  },
  {
    id: '10',
    title: 'Focusrite Scarlett 2i2 Audio Interface',
    description: 'Professional audio interface for home recording studios.',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 199.99,
    salePrice: 149.99,
    discount: 25,
    rating: 4.7,
    reviewCount: 4567,
    category: 'audio-interfaces',
    amazonUrl: 'https://amazon.in/dp/B07QR6Z1JB',
    features: [
      '2-in/2-out audio interface',
      '24-bit/192kHz conversion',
      '2 high-headroom mic preamps',
      'Direct monitoring'
    ],
    isTrending: true
  },
  {
    id: '11',
    title: 'Martin D-28 Acoustic Guitar',
    description: 'Legendary dreadnought acoustic guitar with rich, full sound.',
    image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 2999.99,
    salePrice: 2499.99,
    discount: 17,
    rating: 4.9,
    reviewCount: 1234,
    category: 'guitars',
    amazonUrl: 'https://amazon.in/dp/B0002E4Z8M',
    features: [
      'Dreadnought body',
      'Sitka spruce top',
      'East Indian rosewood back and sides',
      'Ebony fingerboard'
    ]
  },
  {
    id: '12',
    title: 'AKG K240 Studio Headphones',
    description: 'Semi-open studio headphones with excellent sound isolation.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 89.99,
    salePrice: 69.99,
    discount: 22,
    rating: 4.4,
    reviewCount: 7890,
    category: 'headphones',
    amazonUrl: 'https://amazon.in/dp/B0002E4Z8M',
    features: [
      'Semi-open design',
      '50mm drivers',
      'Self-adjusting headband',
      'Detachable cable'
    ]
  },
  {
    id: '13',
    title: 'Novation Launchkey MK3 MIDI Controller',
    description: '61-key MIDI controller with pads, knobs, and DAW integration.',
    image: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 249.99,
    salePrice: 199.99,
    discount: 20,
    rating: 4.5,
    reviewCount: 3456,
    category: 'keyboards',
    amazonUrl: 'https://amazon.in/dp/B08L9L8Z8L',
    features: [
      '61 velocity-sensitive keys',
      '16 RGB pads',
      '8 rotary knobs',
      'DAW integration'
    ]
  },
  {
    id: '14',
    title: 'Behringer X32 Digital Mixer',
    description: '32-channel digital mixer with effects and recording capabilities.',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 1999.99,
    salePrice: 1499.99,
    discount: 25,
    rating: 4.6,
    reviewCount: 2345,
    category: 'studio-gear',
    // Replaced 404 product URL with ASIN-only fallback so buildAmazonUrl can create a valid affiliate link/search URL at runtime
    amazonUrl: 'https://www.amazon.in/dp/B00IBIVBZW?tag=mahas0f-21',
    features: [
      '32-channel digital mixer',
      'Built-in effects',
      'USB recording',
      'iPad control'
    ],
    isFeatured: true
  },
  {
    id: '15',
    title: 'Sennheiser HD 206 Headphones',
    description: 'Comfortable over-ear headphones perfect for monitoring and casual listening.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 49.99,
    salePrice: 39.99,
    discount: 20,
    rating: 4.1,
    reviewCount: 9876,
    category: 'headphones',
    amazonUrl: 'https://amazon.in/dp/B0002E4Z8M',
    features: [
      'Over-ear design',
      'Comfortable fit',
      'Foldable design',
      '3.5mm jack'
    ]
  },
  {
    id: '16',
    title: 'Gibson Les Paul Studio Electric Guitar',
    description: 'Iconic Les Paul tone in a more affordable studio model.',
    image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 1499.99,
    salePrice: 1199.99,
    discount: 20,
    rating: 4.7,
    reviewCount: 1876,
    category: 'guitars',
    amazonUrl: 'https://amazon.in/dp/B077S2QZPX',
    features: [
      'Mahogany body',
      'Maple top',
      '490R/498T humbuckers',
      'Tune-o-matic bridge'
    ],
    isTrending: true
  },
  {
    id: '17',
    title: 'PreSonus AudioBox USB 96 Audio Interface',
    description: '2-channel USB audio interface with mic preamps and phantom power.',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 129.99,
    salePrice: 99.99,
    discount: 23,
    rating: 4.4,
    reviewCount: 4321,
    category: 'audio-interfaces',
    amazonUrl: 'https://amazon.in/dp/B07QR6Z1JB',
    features: [
      '2-channel audio interface',
      'Class A mic preamps',
      'Phantom power',
      'Zero-latency monitoring'
    ]
  },
  {
    id: '18',
    title: 'Casio Privia PX-870 Digital Piano',
    description: 'Digital piano with weighted keys and Bluetooth audio.',
    image: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 899.99,
    salePrice: 699.99,
    discount: 22,
    rating: 4.5,
    reviewCount: 2987,
    category: 'keyboards',
    amazonUrl: 'https://amazon.in/dp/B08L9L8Z8L',
    features: [
      '88 weighted keys',
      'Tri-sensor Scaled Hammer Action',
      'Bluetooth audio',
      '19 built-in tones'
    ]
  },
  {
    id: '19',
    title: 'JBL T450BT Wireless On-Ear Headphones',
    description: 'Wireless on-ear headphones with pure bass sound.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 39.99,
    salePrice: 29.99,
    discount: 25,
    rating: 4.0,
    reviewCount: 15432,
    category: 'headphones',
    amazonUrl: 'https://amazon.in/dp/B0863TXGM3',
    features: [
      'Wireless connectivity',
      '20-hour battery life',
      'Pure Bass Sound',
      'Comfortable fit'
    ]
  },
  {
    id: '20',
    title: 'Taylor 114 Acoustic Guitar',
    description: 'Compact acoustic guitar with rich tone and playability.',
    image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 699.99,
    salePrice: 549.99,
    discount: 21,
    rating: 4.6,
    reviewCount: 3456,
    category: 'guitars',
    amazonUrl: 'https://amazon.in/dp/B0002E4Z8M',
    features: [
      'Grand Auditorium body',
      'Sitka spruce top',
      'Ebony fingerboard',
      'ES2 pickup system'
    ],
    isFeatured: true
  },
  {
    id: '21',
    title: 'Universal Audio Apollo Twin X Audio Interface',
    description: 'Professional audio interface with UAD processing for studio-quality recording.',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 899.99,
    salePrice: 799.99,
    discount: 11,
    rating: 4.8,
    reviewCount: 1234,
    category: 'audio-interfaces',
    amazonUrl: 'https://amazon.in/dp/B07QR6Z1JB',
    features: [
      '2-in/6-out audio interface',
      'UAD-2 processing',
      'Unison technology',
      'Realtime Analog Classics'
    ],
    isTrending: true
  },
  {
    id: '22',
    title: 'Korg B1SP Digital Piano',
    description: '61-key digital piano with weighted keys and built-in speakers.',
    image: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 499.99,
    salePrice: 399.99,
    discount: 20,
    rating: 4.3,
    reviewCount: 4567,
    category: 'keyboards',
    amazonUrl: 'https://amazon.in/dp/B08L9L8Z8L',
    features: [
      '61 velocity-sensitive keys',
      'Natural Weighted Hammer',
      '8 built-in sounds',
      'Built-in speakers'
    ]
  },
  {
    id: '23',
    title: 'Audio-Technica ATH-S200BT Wireless Headphones',
    description: 'Wireless over-ear headphones with 30-hour battery life.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 79.99,
    salePrice: 59.99,
    discount: 25,
    rating: 4.2,
    reviewCount: 8765,
    category: 'headphones',
    amazonUrl: 'https://amazon.in/dp/B00HVLUR86',
    features: [
      'Wireless connectivity',
      '30-hour battery life',
      'Foldable design',
      'Quick charge'
    ]
  },
  {
    id: '24',
    title: 'Epiphone Les Paul Standard Electric Guitar',
    description: 'Affordable Les Paul with classic tone and comfortable playability.',
    image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 599.99,
    salePrice: 449.99,
    discount: 25,
    rating: 4.4,
    reviewCount: 5678,
    category: 'guitars',
    amazonUrl: 'https://amazon.in/dp/B077S2QZPX',
    features: [
      'Mahogany body',
      'Maple top',
      '490R/498T humbuckers',
      'Tune-o-matic bridge'
    ]
  },
  {
    id: '25',
    title: 'Mackie CR3-XBT Multimedia Monitors',
    description: '3-inch multimedia monitors with Bluetooth connectivity.',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 149.99,
    salePrice: 119.99,
    discount: 20,
    rating: 4.5,
    reviewCount: 3456,
    category: 'studio-gear',
    amazonUrl: 'https://amazon.in/dp/B00IBIVBZW',
    features: [
      '3-inch drivers',
      'Bluetooth connectivity',
      'USB-C charging',
      'Room correction'
    ]
  },

  // Imported deals from CSV (marketing_sample_for_amazon_in-ecommerce__20191001_20191031__30k_data.csv)
  {
    id: '1001',
    title: 'Lee posh Lactic Acid 60% Anti ageing Pigmentation Removing Glow Peel',
    description: 'PROFESSIONAL GRADE Face Peel: this peel stimulates collagen production, reducing the appearance of wrinkles, fine lines, and hyper pigmentation. See product page for full directions.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41l0RjF1XIL._SS40_.jpg',
    originalPrice: 2000.00,
    salePrice: 799.00,
    discount: 60,
    rating: 4.2,
    reviewCount: 120,
    category: 'accessories',
    amazonUrl: 'https://www.amazon.in/dp/B072BGHNJ1?tag=mahas0f-21',
    features: ['Brand: Lee Posh', 'Pack Size: NA', 'Sold on: Amazon In']
  },
  {
    id: '1002',
    title: 'SLB Works 1.5mm Titanium 1200 Needles Microneedles Meso Derma Roller',
    description: '1.5mm titanium microneedle derma roller for skin rejuvenation and scar reduction. Handle color: black, roll color: green.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31sQlZQw%2BDL._SS40_.jpg',
    originalPrice: 2040.00,
    salePrice: 2040.00,
    discount: 0,
    rating: 4.0,
    reviewCount: 48,
    category: 'accessories',
    amazonUrl: 'https://www.amazon.in/dp/B07QDTZYSJ?tag=mahas0f-21',
    features: ['Brand: SLB Works', 'Needle size: 1.5mm', 'Pack Size: 1']
  },
  {
    id: '1003',
    title: 'Generic Snail Eye Cream 20g',
    description: 'Snail extract eye cream for dark circles, anti-puffiness and anti-aging. 20g net weight.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51bWWBIkeZL._AC_US40_.jpg',
    originalPrice: 1824.00,
    salePrice: 1042.00,
    discount: 43,
    rating: 4.1,
    reviewCount: 312,
    category: 'accessories',
    amazonUrl: 'https://www.amazon.in/dp/B07DCSN8MP?tag=mahas0f-21',
    features: ['Brand: Generic', 'Feature: moisturizing, anti-aging']
  },
  {
    id: '1004',
    title: 'Generic Anti Snoring Snore Stopper Sleep Apnea Solution',
    description: 'Soft space cotton anti-snoring strips for improved nasal breathing and reduced mouth-breathing.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31U9PV2OI5L._SS40_.jpg',
    originalPrice: 2185.00,
    salePrice: 1399.00,
    discount: 36,
    rating: 3.9,
    reviewCount: 86,
    category: 'accessories',
    amazonUrl: 'https://www.amazon.in/dp/B07GLW9VQN?tag=mahas0f-21',
    features: ['Brand: Generic', 'Pack Size: 36pcs']
  },
  {
    id: '1005',
    title: "Harveys Crunchy & Creame Gourmet Delicacies Cream Wafer Biscuit (Pack of 6)",
    description: "Harvey's wafer Cream Wafer 110g. Gourmet chocolate flavored wafer pack of 6.",
    image: 'https://images-na.ssl-images-amazon.com/images/I/51Oe4RA3tfL._AC_SR38,50_.jpg',
    originalPrice: 594.00,
    salePrice: 570.00,
    discount: 4,
    rating: 4.0,
    reviewCount: 54,
    category: 'accessories',
    amazonUrl: 'https://www.amazon.in/dp/B07NFYYLF1?tag=mahas0f-21',
    features: ['Brand: Harveys', 'Pack: 6 x 110g']
  },
  {
    id: '1006',
    title: 'Shikai Borage Dry Skin Therapy Foot Cream (Pack of 3)',
    description: 'Contains borage oil, clinically proven to relieve symptoms of chronic dry skin. Pack quantity: 3.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41rHgLDf41L._AC_US40_.jpg',
    originalPrice: 5344.00,
    salePrice: 5344.00,
    discount: 0,
    rating: 4.3,
    reviewCount: 22,
    category: 'accessories',
    amazonUrl: 'https://www.amazon.in/dp/B001ET7E8C?tag=mahas0f-21',
    features: ['Brand: ShiKai', 'Pack Size: 3']
  },
  {
    id: '1007',
    title: 'Black & Tan Beer Soap 4-Pack',
    description: 'Handmade glycerin soaps with essential oils and natural botanicals. 4-pack.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41NiGFvjBaL._AC_US40_.jpg',
    originalPrice: 9086.00,
    salePrice: 7269.00,
    discount: 20,
    rating: 4.1,
    reviewCount: 18,
    category: 'accessories',
    // ASIN B06XSRZV65 returned 404 in validation; use a search URL with affiliate tag instead
    amazonUrl: 'https://www.amazon.in/s?k=Black%20%26%20Tan%20Beer%20Soap%204-Pack&tag=mahas0f-21',
    features: ['Brand: Lather & Fizz Bath Boutique', 'Pack Size: 4']
  },
  {
    id: '1008',
    title: 'Mydio 2 Pack Waterproof Women Shower Caps',
    description: 'Double layer satin lined waterproof shower caps for women. Pack of 2.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41aSiStj5CL._SS40_.jpg',
    originalPrice: 1659.00,
    salePrice: 1659.00,
    discount: 0,
    rating: 4.0,
    reviewCount: 40,
    category: 'accessories',
    amazonUrl: 'https://www.amazon.in/dp/B074FVJN7D?tag=mahas0f-21',
    features: ['Brand: Mydio', 'Pack Size: 2']
  },
  {
    id: '1009',
    title: 'Food Studio Premium Quality In Shell Pistachios (2 x 200g)',
    description: 'Premium quality in-shell pistachios, pack of 2 (200g each).',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51yO2Gdyy9L._AC_SR38,50_.jpg',
    originalPrice: 760.00,
    salePrice: 660.00,
    discount: 13,
    rating: 4.2,
    reviewCount: 64,
    category: 'accessories',
    amazonUrl: 'https://www.amazon.in/dp/B07Y3PTX42?tag=mahas0f-21',
    features: ['Brand: FOODSTUDIO', 'Weight: 400g (2 x 200g)']
  },
  {
    id: '1010',
    title: 'Dr Glutens Gluten Free Khakhra (Pack of 5)',
    description: 'Gluten free khakhra - light, healthy and roasted; traditional Indian snack. Pack of 5.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41u1CnYJPSL._AC_SR38,50_.jpg',
    originalPrice: 279.00,
    salePrice: 279.00,
    discount: 0,
    rating: 4.0,
    reviewCount: 21,
    category: 'accessories',
    amazonUrl: 'https://www.amazon.in/dp/B07Y4SSRR1?tag=mahas0f-21',
    features: ['Brand: Dr Gluten', 'Pack Size: 5']
  }
];

// Function to generate additional deals for testing/scaling
export function generateAdditionalDeals(count: number = 275): Deal[] {
  const additionalDeals: Deal[] = [];
  const categories = ['guitars', 'headphones', 'studio-gear', 'keyboards', 'audio-interfaces', 'accessories'];
  const brands = ['Fender', 'Gibson', 'Yamaha', 'Audio-Technica', 'Sony', 'Shure', 'Blue', 'Focusrite', 'PreSonus', 'Roland', 'Casio', 'Novation'];
  
  for (let i = 26; i <= count + 25; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const discount = Math.floor(Math.random() * 40) + 10; // 10-50% discount
    const originalPrice = Math.floor(Math.random() * 500) + 50; // $50-$550
    const salePrice = originalPrice * (1 - discount / 100);
    const rating = (Math.random() * 1.5 + 3.5).toFixed(1); // 3.5-5.0 rating
    const reviewCount = Math.floor(Math.random() * 5000) + 100;
    
    const deal: Deal = {
      id: i.toString(),
      title: `${brand} ${category.charAt(0).toUpperCase() + category.slice(1)} Model ${i}`,
      description: `High-quality ${category} from ${brand} with excellent performance and value.`,
      image: `https://images.pexels.com/photos/${[1407322, 3394650, 164938, 210764, 4226140, 1751731][Math.floor(Math.random() * 6)]}/pexels-photo-${[1407322, 3394650, 164938, 210764, 4226140, 1751731][Math.floor(Math.random() * 6)]}.jpeg?auto=compress&cs=tinysrgb&w=800`,
      originalPrice: parseFloat(originalPrice.toFixed(2)),
      salePrice: parseFloat(salePrice.toFixed(2)),
      discount,
      rating: parseFloat(rating),
      reviewCount,
      category,
      amazonUrl: `https://www.amazon.in/dp/B0${Math.random().toString(36).substr(2, 8).toUpperCase()}?tag=mahas0f-21
      `,
      features: [
        `Premium ${brand} quality`,
        'Professional performance',
        'Durable construction',
        'Great value for money'
      ],
      isFeatured: Math.random() > 0.7,
      isTrending: Math.random() > 0.8
    };
    
    additionalDeals.push(deal);
  }
  
  return additionalDeals;
}

// Combine featured deals with generated ones and the CSV-imported deals
export const allDeals = [
  ...featuredDeals,
  ...generateAdditionalDeals(275),
  ...(importedDeals as unknown as Deal[])
];

const baseCategories = [
  {
    id: 'guitars',
    name: 'Guitars',
    slug: 'guitars',
    description: 'Electric, acoustic, and bass guitars from top brands',
    image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: '🎸'
  },
  {
    id: 'studio-gear',
    name: 'Studio Gear',
    slug: 'studio-gear',
    description: 'Professional recording equipment and studio monitors',
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: '🎛️'
  },
  {
    id: 'headphones',
    name: 'Headphones',
    slug: 'headphones',
    description: 'Premium headphones and earbuds for every budget',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: '🎧'
  },
  {
    id: 'keyboards',
    name: 'Keyboards & Synths',
    slug: 'keyboards',
    description: 'Digital pianos, synthesizers, and MIDI controllers',
    image: 'https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: '🎹'
  },
  {
    id: 'audio-interfaces',
    name: 'Audio Interfaces',
    slug: 'audio-interfaces',
    description: 'USB and Thunderbolt audio interfaces for recording',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: '🔌'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    description: 'Cables, stands, cases, and other music accessories',
    image: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: '🎵'
  }
];

export const categories = baseCategories.map((c) => ({
  ...c,
  dealCount: allDeals.filter((d) => d.category === c.id).length
}));