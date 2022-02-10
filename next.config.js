/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,

  },
}
