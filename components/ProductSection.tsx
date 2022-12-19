import ProductCard from "./ProductCard";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Products } from "../lib/types";

const ProductSection = ({ products, title }: Products) => {
  return (
    <section className="col-span-full flex h-1/2 w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-5xl">{title}</h3>
        <Link href="/" className="text-lg font-semibold text-main">
          shop the collection
          <ArrowSmallRightIcon className="aspect-w-1 aspect-h-1 inline-block w-6 p-0" />
        </Link>
      </div>
      <section className="grid h-full w-full grid-flow-col place-items-center gap-4 overflow-x-scroll py-4 scrollbar scrollbar-track-main">
        {products.edges.map(({ node }, index: number) => {
          let count = -1;
          count++;
          return (
            <ProductCard
              key={index}
              title={node?.title}
              img={node.images.edges[count].node}
              price={node.variants?.edges[count].node.price.amount!}
              description={node.description!}
            />
          );
        })}
      </section>
    </section>
  );
};

export default ProductSection;
