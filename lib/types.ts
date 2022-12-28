export interface QueryType {
  data: {
    [key: string]: {
      title: string;
      id: string;
      handle: string;
      edges: {
        node: {
          handle?: string;
          title: string;
          products: {
            edges: {
              node: {
                id?: string;
                title: string;
                description: string;
                handle?: string;
                variants?: {
                  nodes: { price: { amount: string } }[];
                };
                images: {
                  nodes: { url: string; altText: string }[];
                };
              };
            }[];
          };
        };
      }[];
    };
  };
}

// export interface Products {
//   handle?: string;
//   title?: string;
//   products: {
//     edges: {
//       node: {
//         id?: string;
//         title?: string;
//         description?: string;
//         handle?: string;
//         variants?: {
//           edges: {
//             node: {
//               price: {
//                 amount: number;
//               };
//             };
//           }[];
//         };
//         images: {
//           edges: {
//             node: {
//               url: string;
//               altText: string;
//             };
//           }[];
//         };
//       };
//     }[];
//   };
// }
