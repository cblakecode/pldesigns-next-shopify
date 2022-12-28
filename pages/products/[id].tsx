import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { getAllProductIds, getProductsByID } from "../../lib/products";
import { PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await getAllProductIds();

  const paths = products.nodes.map(({ id }: { id: string }) => {
    return {
      params: {
        id,
      },
    };
  });
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { id } = context.params;

  const product = await getProductsByID(id);

  if (!product) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};

type Variant = {
  selectedOptions: {
    name: string;
    value?: string;
  }[];
  price: {
    amount: string;
  };
};

const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex h-screen items-center justify-center gap-8 p-8">
      {product.images?.nodes.map(
        (image: { url: string; altText: string }, index: number) => {
          return (
            <div
              key={index}
              className="relative h-full w-1/2 overflow-hidden rounded-lg"
            >
              <Image src={image.url} alt={image.altText} fill />
            </div>
          );
        }
      )}
      <div className="flex h-full w-1/2 flex-col items-center justify-around gap-4">
        <h3 className="text-8xl ">{product.title}</h3>
        <p className="">{product.description}</p>
        {product.variants?.nodes.map((variant: Variant, index: number) => {
          <div key={index}>
            <label htmlFor={variant.selectedOptions[0].name}></label>
            <input type="checkbox" name={variant.selectedOptions[0].name} />
          </div>;
        })}
        <div className="flex w-full flex-row items-center justify-around">
          <p className="text-3xl">${product.variants?.nodes[0].price.amount}</p>
          <button className="flex min-w-max items-center justify-center rounded-lg bg-main px-8 py-4 text-common-light shadow-sm">
            Add To Cart
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
