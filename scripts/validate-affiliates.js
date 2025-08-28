#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const AFFILIATE_TAG = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_ID || '';
const DATA_FILE = path.resolve(__dirname, '../lib/data/deals.ts');
const OUTPUT_JSON = path.resolve(__dirname, '../scripts/affiliate-validation-report.json');
const OUTPUT_CSV = path.resolve(__dirname, '../scripts/affiliate-validation-report.csv');

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function extractAmazonUrls(fileContent) {
  const regex = /amazonUrl:\s*'([^']+)'/g;
  const urls = [];
  let match;
  while ((match = regex.exec(fileContent)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

function extractAsin(url) {
  if (!url) return null;
  const m = url.match(/(?:dp|gp\/product|product)\/(B[0-9A-Z]{9,12})/i) || url.match(/\/([A-Z0-9]{10})(?:[/?]|$)/i);
  return m ? m[1] : null;
}

async function checkUrl(url) {
  try {
    const fetchFn = (typeof fetch !== 'undefined') ? fetch : (await import('node-fetch')).default;
    // Try HEAD first
    let res;
    try {
      res = await fetchFn(url, { method: 'HEAD', redirect: 'follow' });
      if (res.status === 405 || res.status === 501) throw new Error('HEAD not allowed');
    } catch (e) {
      res = await fetchFn(url, { method: 'GET', redirect: 'follow' });
    }
    return { ok: res.ok, status: res.status, url: res.url };
  } catch (error) {
    return { ok: false, status: 'ERR', error: String(error) };
  }
}

(async () => {
  if (!fs.existsSync(DATA_FILE)) {
    console.error('Data file not found:', DATA_FILE);
    process.exit(1);
  }

  const content = fs.readFileSync(DATA_FILE, 'utf8');
  const urls = extractAmazonUrls(content);
  console.log(`Found ${urls.length} amazonUrl entries.`);

  const results = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const asin = extractAsin(url);
    let checkTarget = url;
    if (asin) {
      checkTarget = `https://www.amazon.in/dp/${asin}`;
    } else if (/amazon\./i.test(url)) {
      checkTarget = url;
    } else {
      // fallback to search URL
      const q = encodeURIComponent(url.replace(/https?:\/\//, '').replace(/[^a-zA-Z0-9\s]/g, ' '));
      checkTarget = `https://www.amazon.in/s?k=${q}`;
    }

    console.log(`Checking ${i + 1}/${urls.length}: ${checkTarget}`);
    const res = await checkUrl(checkTarget);
    const suggested = asin ? `https://www.amazon.in/dp/${asin}${AFFILIATE_TAG ? `?tag=${AFFILIATE_TAG}` : ''}` : (AFFILIATE_TAG ? `https://www.amazon.in/s?k=${encodeURIComponent(url)}&tag=${AFFILIATE_TAG}` : null);

    results.push({ original: url, checkTarget, asin, status: res.status, ok: res.ok, finalUrl: res.url || null, suggested, error: res.error || null });

    // be kind to Amazon, small delay
    await sleep(300);
  }

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(results, null, 2));

  const csvLines = ["original,checkTarget,asin,status,ok,finalUrl,suggested,error"];
  for (const r of results) {
    csvLines.push(
      `"${r.original}","${r.checkTarget}","${r.asin || ''}","${r.status}","${r.ok}","${r.finalUrl || ''}","${r.suggested || ''}","${r.error || ''}"`
    );
  }
  fs.writeFileSync(OUTPUT_CSV, csvLines.join('\n'));

  console.log('Validation complete. Reports written to:');
  console.log(' -', OUTPUT_JSON);
  console.log(' -', OUTPUT_CSV);
})();
