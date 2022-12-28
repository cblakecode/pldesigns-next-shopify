import Image from "next/image";
import { useRouter } from "next/router";
import { QueryType } from "../lib/types";

const ProductCard = ({
  node,
}: {
  node: QueryType["data"]["collections"]["edges"][0]["node"]["products"]["edges"][0]["node"];
}) => {
  const router = useRouter();

  console.log(node.images.nodes);

  return (
    <div className="group relative inline-block w-64 flex-shrink-0 snap-center overflow-hidden rounded-lg text-common-light">
      <div className="relative h-full w-full rounded-lg object-cover">
        {node.images.nodes.map((node, index: number) => {
          return <Image src={node.url} alt={node.altText} key={index} fill />;
        })}
      </div>
      <div
        className="absolute inset-0 z-50 hidden flex-col items-center justify-center gap-y-2 bg-black/70 text-lg group-hover:flex group-hover:cursor-pointer"
        onClick={() => router.push(`/products/${encodeURIComponent(node.id!)}`)}
      >
        <h3>{node.title}</h3>
        <p>{node.description}</p>
        <p className="pb-4">{node.variants?.nodes[0].price.amount}</p>
      </div>
    </div>
  );
};

export default ProductCard;
