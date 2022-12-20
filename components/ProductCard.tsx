import Image from "next/image";
import { FunctionComponent } from "react";

export interface ProductCardProps {
  title: string | undefined;
  img: { url: string; altText: string };
  price: number;
  description: string;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  title,
  img,
  price,
  description,
}) => {
  return (
    <div className="group relative inline-block w-64 flex-shrink-0 snap-center overflow-hidden rounded-lg text-common-light before:content-[''] after:content-['']">
      <div className="relative h-full w-full rounded-lg object-cover">
        <Image src={img?.url} alt={img?.altText} fill />
      </div>
      <div className="absolute inset-0 z-50 hidden flex-col items-center justify-center gap-y-2 bg-black/70 text-lg group-hover:flex group-hover:cursor-pointer">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="pb-4">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
