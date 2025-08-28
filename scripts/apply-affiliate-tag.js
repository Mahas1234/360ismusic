const fs = require('fs');
const path = require('path');
const TAG = 'mahas0f-21';

const importedPath = path.join(__dirname, '..', 'lib', 'data', 'imported-deals-800.json');
const dealsPath = path.join(__dirname, '..', 'lib', 'data', 'deals.ts');

function updateImported() {
  if (!fs.existsSync(importedPath)) {
    console.error('Imported JSON not found at', importedPath);
    return;
  }
  const raw = fs.readFileSync(importedPath, 'utf8');
  const arr = JSON.parse(raw);
  let updated = 0;
  arr.forEach((d) => {
    if (d.amazonUrl && /^[A-Z0-9]{10}$/.test(d.amazonUrl)) {
      d.amazonUrl = `https://www.amazon.in/dp/${d.amazonUrl}?tag=${TAG}`;
      updated++;
    }
  });
  fs.writeFileSync(importedPath, JSON.stringify(arr, null, 2), 'utf8');
  console.log(`Updated ${updated} ASIN-only entries in imported-deals-800.json`);
}

function updateDealsTs() {
  if (!fs.existsSync(dealsPath)) {
    console.error('deals.ts not found at', dealsPath);
    return;
  }
  let src = fs.readFileSync(dealsPath, 'utf8');

  // Replace amazonUrl: 'ASIN' (bare ASIN in quotes) with canonical dp URL including tag
  const asinRegex = /amazonUrl:\s*['"]([A-Z0-9]{10})['"]/g;
  let m;
  let count = 0;
  src = src.replace(asinRegex, (match, asin) => {
    count++;
    return `amazonUrl: 'https://www.amazon.in/dp/${asin}?tag=${TAG}'`;
  });

  // Ensure generated amazonUrl in generateAdditionalDeals includes ?tag=...
  // Replace pattern ending with 
  // amazonUrl: `https://amazon.in/dp/B0${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
  const genRegex = /amazonUrl:\s*`https:\/\/amazon\.in\/dp\/B0\$\{Math\.random\(\)\.toString\(36\)\.substr\(2, 8\)\.toUpperCase\(\)\}`/g;
  if (genRegex.test(src)) {
    src = src.replace(genRegex, `amazonUrl: \`https://www.amazon.in/dp/B0\${Math.random().toString(36).substr(2, 8).toUpperCase()}?tag=${TAG}
      \``);
    console.log('Updated generated amazonUrl template to include affiliate tag');
  }

  fs.writeFileSync(dealsPath, src, 'utf8');
  console.log(`Replaced ${count} ASIN-only occurrences in deals.ts`);
}

updateImported();
updateDealsTs();
