import "@shopify/shopify-api/adapters/node";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";

const domain = process.env.SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN!;
// const URL = `https://${domain}.myshopify.com/api/2022-10/graphql.json`

const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_SECRET_KEY!,
  scopes: ["read_products"],
  hostName: process.env.NGROK_HOST!,
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: false,
  privateAppStorefrontAccessToken: storefrontAccessToken,
});

export const client = new shopify.clients.Storefront({
  domain,
  storefrontAccessToken,
});
