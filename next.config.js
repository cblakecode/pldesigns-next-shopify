/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    SHOPIFY_SECRET_KEY: process.env.SHOPIFY_SECRET_KEY,
    NGROK_HOST: process.env.NGROK_HOST,
  },
  images: {
    domains: ["cdn.shopify.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
