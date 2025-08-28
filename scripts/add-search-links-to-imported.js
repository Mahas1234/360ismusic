const fs = require('fs');
const path = require('path');
const TAG = process.env.AMAZON_AFFILIATE_TAG || 'mahas0f-21';
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

function extractASIN(input) {
  if (!input) return null;
  const s = input.toString().trim();
  if (/^[A-Z0-9]{10}$/i.test(s)) return s.toUpperCase();
  const m1 = s.match(/(?:dp|gp\/product)\/(B[0-9A-Z]{9,12})/i);
  if (m1 && m1[1]) return m1[1].toUpperCase();
  const m2 = s.match(/\/([A-Z0-9]{10})(?:[/?]|$)/i);
  if (m2 && m2[1]) return m2[1].toUpperCase();
  return null;
}

let updated = 0;
let setSearch = 0;
let setAsin = 0;

arr.forEach((item) => {
  const cur = (item.amazonUrl || '').toString().trim();
  const asinFromCur = extractASIN(cur);
  if (asinFromCur) {
    const newUrl = `https://www.amazon.in/dp/${asinFromCur}?tag=${TAG}`;
    if (cur !== newUrl) {
      item.amazonUrl = newUrl;
      updated++;
    }
    setAsin++;
    return;
  }

  // If no amazonUrl, but title exists, create a search URL
  if ((!cur || cur === '') && item.title && item.title.trim() !== '') {
    const q = encodeURIComponent(item.title.replace(/\s+/g, '+'));
    const searchUrl = `https://www.amazon.in/s?k=${q}&tag=${TAG}`;
    item.amazonUrl = searchUrl;
    updated++;
    setSearch++;
    return;
  }

  // If amazonUrl exists and is an amazon URL without tag, ensure tag present
  if (cur && /amazon\./i.test(cur)) {
    try {
      const u = new URL(cur);
      if (u.searchParams.get('tag') !== TAG) {
        u.searchParams.set('tag', TAG);
        item.amazonUrl = u.toString();
        updated++;
      }
    } catch (e) {
      // invalid url, skip
    }
  }
});

fs.writeFileSync(importedPath, JSON.stringify(arr, null, 2), 'utf8');
console.log(`Processed ${arr.length} entries. setAsin: ${setAsin}, setSearch: ${setSearch}, updated: ${updated}`);
