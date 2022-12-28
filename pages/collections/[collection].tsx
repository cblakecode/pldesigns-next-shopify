import { getCollections } from "../../lib/shopify";
import { getCollectionbyHandle } from "../../lib/collections";
import { InferGetStaticPropsType } from "next";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Image from "next/image";

export const getStaticPaths = async () => {
  const data = await getCollections();

  const paths = data?.collections.edges.map(({ node }) => {
    return {
      params: {
        collection: node.handle,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { collection: string };
}) => {
  const { collection } = params;

  const response = await getCollectionbyHandle(collection);

  if (!response) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: {
      collection: response,
    },
  };
};

const Collection = ({
  collection,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <div className="h-[200vh] w-screen bg-common-light">
      <h1 className="my-8 text-center text-7xl text-neutral-800">
        {collection?.title}
      </h1>
      <div className="grid h-full grid-flow-row-dense grid-cols-4 grid-rows-3 gap-4">
        {collection?.products.edges.map(({ node }, index) => {
          return (
            <div
              key={index}
              className="group h-full w-full overflow-hidden rounded-lg bg-common-light drop-shadow hover:cursor-pointer"
              onClick={() =>
                router.push(`/products/${encodeURIComponent(node.id!)}`)
              }
            >
              <section className="relative h-1/2 w-full group-hover:brightness-50">
                {node.images.nodes.map((node, index) => {
                  return (
                    <Image src={node.url} key={index} fill alt={node.altText} />
                  );
                })}
              </section>
              <section className="flex h-1/2 flex-col justify-between p-4 text-neutral-800 group-hover:bg-neutral-600 group-hover:text-common-light">
                <h3 className="text-center text-xl">{node.title}</h3>
                {/* <p>{node.description}</p> */}
                <div className="flex items-center justify-between">
                  <p className="text-lg">
                    ${node.variants?.nodes[0].price.amount}
                  </p>
                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-main transition-all hover:scale-110">
                    <PlusIcon className=" w-8 text-common-light" />
                  </button>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
