/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Prepare for static export (used for GitHub Pages)
  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig;
