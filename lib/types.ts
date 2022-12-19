export interface QueryTypes {
  data?: { [key: string]: unknown | string };
  query?: { [key: string]: string | number };
}

export interface Collections {
  data: {
    collections: {
      edges: {
        node: {
          handle?: string;
          title?: string;
          products: {
            edges: {
              node: {
                id?: string;
                title?: string;
                description?: string;
                handle?: string;
                variants?: {
                  edges: [
                    { cursor: string; node: { price: { amount: number } } }
                  ];
                };
                images: { edges: [{ node: { url: string; altText: string } }] };
              };
            }[];
          };
        };
      }[];
    };
  };
}

export interface Products {
  handle?: string;
  title?: string;
  products: {
    edges: {
      node: {
        id?: string;
        title?: string;
        description?: string;
        handle?: string;
        variants?: {
          edges: {
            node: {
              quantityAvailable?: number;
              price: {
                amount: number;
              };
            };
          }[];
        };
        images: {
          edges: {
            node: {
              url: string;
              altText: string;
            };
          }[];
        };
      };
    }[];
  };
}
