const fs = require('fs');
const path = require('path');
const TAG = 'mahas0f-21';
const importedPath = path.join(__dirname, '..', 'lib', 'data', 'imported-deals-800.json');

if (!fs.existsSync(importedPath)) {
  console.error('Imported JSON not found at', importedPath);
  process.exit(1);
}

const raw = fs.readFileSync(importedPath, 'utf8');
let arr;
try {
  arr = JSON.parse(raw);
} catch (e) {
  console.error('Invalid JSON', e);
  process.exit(1);
}

let updated = 0;
let tagged = 0;

function extractASIN(input) {
  if (!input) return null;
  const s = input.toString().trim();
  // direct ASIN
  if (/^[A-Z0-9]{10}$/i.test(s)) return s.toUpperCase();
  // dp or gp/product URLs
  const m1 = s.match(/(?:dp|gp\/product)\/(B[0-9A-Z]{9,12})/i);
  if (m1 && m1[1]) return m1[1].toUpperCase();
  // plain /ASIN/ patterns
  const m2 = s.match(/\/([A-Z0-9]{10})(?:[/?]|$)/i);
  if (m2 && m2[1]) return m2[1].toUpperCase();
  return null;
}

arr.forEach((item) => {
  const cur = item.amazonUrl || '';
  const asin = extractASIN(cur);
  if (asin) {
    const newUrl = `https://www.amazon.in/dp/${asin}?tag=${TAG}`;
    if (cur !== newUrl) {
      item.amazonUrl = newUrl;
      updated++;
    }
    tagged++;
  } else if (cur && /amazon\./i.test(cur)) {
    // If it's an Amazon URL but contains no asin, ensure tag is present
    try {
      const u = new URL(cur);
      if (u.hostname && /amazon\./i.test(u.hostname)) {
        if (u.searchParams.get('tag') !== TAG) {
          u.searchParams.set('tag', TAG);
          item.amazonUrl = u.toString();
          updated++;
        }
      }
    } catch (e) {
      // skip invalid URLs
    }
  }
});

fs.writeFileSync(importedPath, JSON.stringify(arr, null, 2), 'utf8');
console.log(`Processed ${arr.length} entries. ASIN-containing entries: ${tagged}. Updated entries: ${updated}.`);
