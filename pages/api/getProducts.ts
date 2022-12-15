import { client } from "../../lib/shopify";
import { Products } from "../../lib/types";

export const getAllProducts = async (): Promise<Products | undefined> => {
  try {
    const products = await client.query({
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
    });

    const { data } = await JSON.parse(`${products.body}`);

    return data.products.edges;
  } catch (error: any) {
    return error.message;
    console.log("Products Didnt Load");
  }
};
