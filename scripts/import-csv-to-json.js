const fs = require('fs');
const path = require('path');
let parse;
try {
  parse = require('csv-parse/lib/sync');
} catch (e) {
  // csv-parse v5 exposes sync in a different path
  parse = require('csv-parse/sync').parse;
}

const CSV_PATH = path.join(__dirname, 'marketing_sample_for_amazon_in-ecommerce__20191001_20191031__30k_data.csv');
const OUT_PATH = path.join(__dirname, '..', 'lib', 'data', 'imported-deals-800.json');
const MAX = 800;

if (!fs.existsSync(CSV_PATH)) {
  console.error('CSV not found at', CSV_PATH);
  process.exit(1);
}

const csv = fs.readFileSync(CSV_PATH, 'utf8');
const records = parse(csv, { columns: true, skip_empty_lines: true });

const out = [];
for (let i = 0; i < Math.min(MAX, records.length); i++) {
  const r = records[i];
  const asin = (r.asin || r.ASIN || r.ASIN1 || r.asin1 || (r.product_url && (r.product_url.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})/) || [])[1]) || '').toString().trim();
  const title = (r.title || r.product_title || r.name || r.Title || r['product_title'] || '').toString().trim();
  const image = (r.image || r.image_url || r.img || r['image-url'] || '').toString().trim();
  const listPriceRaw = (r.list_price || r.mrp || r['list_price'] || r.price_old || '').toString();
  const priceRaw = (r.price || r.sale_price || r['sale_price'] || r.current_price || r.price_new || '').toString();
  const parseNumber = (s) => {
    if (!s) return 0;
    const num = parseFloat(s.replace(/[^0-9\.]/g, ''));
    return Number.isFinite(num) ? num : 0;
  };
  const listPrice = parseNumber(listPriceRaw);
  const price = parseNumber(priceRaw) || listPrice || 0;
  const discount = listPrice > 0 ? Math.round((1 - (price / listPrice)) * 100) : 0;
  const rating = parseFloat((r.rating || r.stars || r.review_score || '0').toString()) || 0;
  const reviewCount = parseInt((r.review_count || r.reviews || r.num_reviews || '0').toString()) || 0;
  const category = (r.category || r.cat || '').toString().trim() || 'accessories';
  const description = (r.description || r.product_description || '').toString().trim();

  const deal = {
    id: (1010 + i + 1).toString(),
    title: title || `Imported Product ${i + 1}`,
    description: description || '',
    image: image || '',
    originalPrice: listPrice || price || 0,
    salePrice: price || listPrice || 0,
    discount,
    rating: rating || 0,
    reviewCount: reviewCount || 0,
    category,
    amazonUrl: asin || '',
    features: []
  };

  out.push(deal);
}

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2), 'utf8');
console.log('Wrote', out.length, 'deals to', OUT_PATH);
