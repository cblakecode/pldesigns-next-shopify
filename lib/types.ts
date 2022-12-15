export interface QueryTypes {
  data?: { [key: string]: unknown | string };
  query?: { [key: string]: string | number };
}

export interface Products {
  node: {
    id?: string;
    title?: string;
    description?: string;
    handle?: string;
    variants?: {
      edges: [{ cursor: string; node: { price: { amount: number } } }];
    };
    images?: { edges: [{ node: { url: string; altText: string } }] };
  };
}
