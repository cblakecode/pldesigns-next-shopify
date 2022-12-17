import Image from "next/image";
import { FunctionComponent } from "react";

export interface ProductCardProps {
  title: string | undefined;
  img: { url: string; altText: string };
  price: number;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  title,
  img,
  price,
}) => {
  return (
    <div className="h-full w-full bg-common-light text-gray-600">
      <h3>{title}</h3>
      <Image
        src={img?.url}
        alt={img?.altText}
        width="500"
        height="500"
        className="aspect-w-1 aspect-h-1"
      />
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
