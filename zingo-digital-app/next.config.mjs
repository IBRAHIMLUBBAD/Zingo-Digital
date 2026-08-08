import createNextIntlPlugin from 'next-intl/plugin';

// Locale messages resolved from src/i18n/request.ts (see that file for the
// locale/direction logic referenced in ARCHITECTURE.md §10).
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Cloudflare R2 public read (deliverable previews only — never source files)
      // { protocol: 'https', hostname: '<your-r2-public-domain>' },
    ],
  },
};

export default withNextIntl(nextConfig);
