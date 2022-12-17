import ProductCard from "./ProductCard";
import { FC } from "react";

const ProductSection: FC<any> = ({ data }) => {
  return (
    <div>
      {data?.products.edges.map(({ node }: any, index: number) => {
        let count = -1;
        count++;
        return (
          <ProductCard
            key={index}
            title={node?.title}
            img={node.images?.edges[count].node}
            price={node.variants?.edges[count].node.price.amount!}
          />
        );
      })}
    </div>
  );
};

export default ProductSection;
