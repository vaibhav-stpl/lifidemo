/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@lifi/widget']);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig);
