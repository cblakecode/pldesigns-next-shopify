import "@shopify/shopify-api/adapters/node";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";
import { QueryTypes } from "./types";

const domain = process.env.SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN!;
// const URL = `https://${domain}/api/2022-10/graphql.json`;

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

export const getProducts = client
  .query<QueryTypes>({
    data: `{
          products(first: 3) {
            edges {
              node {
                id
                title
                description
                handle
                variants(first: 1) {
                  edges {
                    cursor
                    node {
                      price {
                        amount
                      }
                    }
                  }
                }
                images (first: 1) {
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
        }`,
  })
  .then(
    (response) => {
      console.log(response.body.data?.products);

      const { data } = response.body;

      return data;
    },
    (reason) => console.error(reason.response)
  );
