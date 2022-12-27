import ProductCard from "./ProductCard";
import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

interface PropTypes {
  node: {
    products: {
      edges: {
        node: {
          title?: string;
          description?: string;
          handle?: string;
          id?: string;
          images?: { edges: { node: { url: string; altText: string } }[] };
          variants?: { edges: { node: { price: { amount: number } } }[] };
        };
      }[];
    };
    handle?: string;
    title?: string;
  };
}

const ProductSection = ({ node }: PropTypes) => {
  return (
    <section className="col-span-full mt-8 flex h-80 max-h-fit min-h-max w-full flex-col items-center justify-center gap-y-4">
      <div className="flex w-full items-center justify-center px-4 lg:justify-between">
        <h3 className="text-5xl">{node.title}</h3>
        <Link
          href="/"
          className="hidden text-lg font-semibold text-main lg:block"
        >
          shop the collection
          <ArrowSmallRightIcon className="aspect-w-1 aspect-h-1 inline-block w-6 p-0" />
        </Link>
      </div>
      <section className="flex h-full w-screen snap-x snap-mandatory flex-nowrap gap-2 overflow-x-scroll scrollbar-none before:content-none after:content-none md:gap-4 xl:gap-6">
        {node.products.edges.map(({ node }, index: number) => {
          return <ProductCard node={node} key={index} />;
        })}
      </section>
    </section>
  );
};

export default ProductSection;
