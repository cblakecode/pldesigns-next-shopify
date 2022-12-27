import { client } from "./shopify";

type ProductIdType = {
  data: {
    products: {
      nodes: {
        id: string;
      }[];
    };
  };
};

export const getAllProductIds = async () => {
  try {
    const response = await client.query<ProductIdType>({
      data: `{
            products(first: 5) {
                nodes {
                    id
                }
            }
        }`,
    });
    const { data } = response.body;

    return data;
  } catch (error: any) {
    return error.response;
  }
};

type ProductById = {
  data: {
    product: {
      id: string;
      title: string;
      description: string;
      images: {
        nodes: {
          url: string;
          altText: string;
        }[];
      };
      variants: {
        nodes: {
          selectedOptions: {
            name: string;
            value: string;
          }[];
          price: {
            amount: string;
          };
        }[];
      };
    };
  };
};

export const getProductsByID = async (id: string) => {
  try {
    const response = await client.query<ProductById>({
      data: `{
            product(id: ${JSON.stringify(id)}) {
              id
              title
              description
              images (first: 3) {
                nodes {
                  url
                  altText
                }
              }
              variants (first: 3) {
                nodes {
                  selectedOptions {
                    name
                    value
                  }
                  price {
                    amount
                  }
                }
              }
            }
          }`,
    });

    const { data } = response.body;
    return data.product;
  } catch (error: any) {
    return error.response;
  }
};
