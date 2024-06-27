import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const locales = ['en', 'pl']

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      },
      ...locales.map(locale => ({
        source: `/${locale}`,
        destination: `${locale}/home`,
        permanent: true
      }))
    ];
  },
  output: 'standalone'
};

export default withNextIntl(nextConfig);
