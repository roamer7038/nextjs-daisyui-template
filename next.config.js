/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['react-daisyui'],
  reactStrictMode: true
};

module.exports = nextConfig;
