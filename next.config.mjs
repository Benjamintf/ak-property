import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts' // ፋይሉ ያለበትን ትክክለኛ ቦታ እዚህ ጋር እንነግረዋለን
);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);