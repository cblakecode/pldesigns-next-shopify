import ProductCard from "../components/ProductCard";
import { getAllProducts } from "./api/getProducts";
import { Products } from "../lib/types";
import { GetStaticProps, NextPage } from "next";

type ProductsArray = { productList: Products[] };

const ProductList: NextPage<ProductsArray> = ({ productList }) => {
  let imgCount = -1;
  let varCount = -1;
  return (
    <div>
      {productList.map(({ node }, index) => {
        if (imgCount + 1 < node.images?.edges.length!) {
          imgCount++;
        }
        if (varCount + 1 < node.variants?.edges.length!) {
          varCount++;
        }
        return (
          <ProductCard
            key={index}
            title={node?.title}
            img={node.images?.edges[imgCount].node!}
            price={node.variants?.edges[varCount].node.price.amount!}
          />
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const productList = await getAllProducts();

  return {
    props: {
      productList,
    },
  };
};

export default ProductList;
