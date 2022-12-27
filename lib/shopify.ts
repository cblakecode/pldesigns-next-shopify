import "@shopify/shopify-api/adapters/node";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";
import { Collections } from "./types";

const domain = process.env.SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN!;

const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_SECRET_KEY!,
  scopes: ["read_products"],
  hostName: process.env.NGROK_HOST!,
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: false,
});

export const client = new shopify.clients.Storefront({
  domain,
  storefrontAccessToken,
});

export const getCollections = client
  .query<Collections>({
    data: `{
      collections(first: 1) {
        edges {
          node {
            handle
            title
            products(first: 4) {
              edges {
                node {
                  id
                  title
                  description
                  handle
                  variants(first: 1) {
                    edges {
                      node {
                        quantityAvailable
                        price {
                          amount
                        }
                      }
                    }
                  }
                  images(first: 1) {
                    edges {
                      node {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
  })
  .then(
    (response) => {
      const { data } = response.body;

      return data;
    },
    (reason) => console.error(reason.response)
  );
