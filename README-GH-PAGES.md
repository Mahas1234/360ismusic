Deploying to GitHub Pages

This repository includes a GitHub Actions workflow that builds and exports the Next.js site to a static `out/` folder and publishes it to the `gh-pages` branch.

Setup steps:

1. Set repository secrets
   - NEXT_PUBLIC_AMAZON_AFFILIATE_ID: your affiliate tag (example: mahas0f-21)
   - (Optional) CUSTOM_DOMAIN: your domain (e.g. www.example.com)

2. Ensure the default branch is `main` (or change the workflow to your branch).

3. Push to `main` (or trigger the workflow manually). The action will:
   - npm ci
   - npm run build
   - npm run export
   - write `out/CNAME` if CUSTOM_DOMAIN is set
   - publish `out/` to `gh-pages` branch

Using a custom domain (CNAME)
- The workflow will create `out/CNAME` when you set the `CUSTOM_DOMAIN` repository secret. GitHub Pages will then serve the site from that domain. You still need to configure DNS (A/ALIAS and/or CNAME records) pointing your domain to GitHub Pages per GitHub docs.

Notes
- Because the site is statically exported, serverless features (API routes) are not available. Links now go directly to Amazon with the affiliate tag appended.
- If you want server-side redirects or dynamic functions, host on Vercel/Netlify/Cloudflare Pages instead and modify the workflow accordingly.
