import "@shopify/shopify-api/adapters/node";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";
import { QueryType } from "./types";

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

export const getCollections = async (): Promise<
  QueryType["data"] | undefined
> => {
  try {
    const response = await client.query<QueryType>({
      data: `{
        collections(first: 3) {
          edges {
            node {
              id
              title
              handle
              products(first: 5) {
                edges {
                  node {
                    id
                    title
                    description
                    handle
                    images(first: 3) {
                      nodes {
                        url
                        altText
                      }
                    }
                    variants(first: 3) {
                      nodes {
                        price {
                          amount
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
    });

    return response.body.data;
  } catch (error: any) {
    console.error(error.response);
    return error.response;
  }
};
