import "@shopify/shopify-api/adapters/node";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";

export const Shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_SECRET_KEY!,
  scopes: [
    "read_products",
    "read_customers",
    "write_customers",
    "read_checkouts",
    "write_checkouts",
  ],
  hostName: process.env.NGROK_HOST!,
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: true,
});
