import { client } from "./shopify";

export type CollectionByHandle = {
  data: {
    [key: string]: {
      handle?: string;
      id?: string;
      title: string;
      products: {
        edges: {
          node: {
            title: string;
            id?: string;
            description: string;
            handle?: string;
            images: {
              nodes: {
                url: string;
                altText: string;
              }[];
            };
            variants?: {
              nodes: {
                price: {
                  amount: string;
                };
              }[];
            };
          };
        }[];
      };
    };
  };
};

export const getCollectionbyHandle = async (
  handle: string
): Promise<CollectionByHandle["data"]["collection"] | undefined> => {
  try {
    const response = await client.query<CollectionByHandle>({
      data: `{
        collection(handle: ${JSON.stringify(handle)}) {
          handle
          id
          title
          products(first: 10) {
            edges {
              node {
                title
                id
                description
                images(first: 1) {
                  nodes {
                    url
                    altText
                  }
                }
                variants(first: 1) {
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
      }`,
    });

    return response.body.data.collection;
  } catch (error: any) {
    console.error(error.response);
    return error.response;
  }
};
