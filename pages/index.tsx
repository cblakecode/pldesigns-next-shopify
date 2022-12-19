import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import { getProducts } from "../lib/shopify";
import { InferGetStaticPropsType } from "next";

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const collections = data.collections.edges;
  return (
    <div>
      <Head>
        <title>PLDesigns and More</title>
        <meta></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid gap-x-6 overflow-hidden">
        <main className="relative col-span-full px-8">
          <Navbar />
          <Hero />
          <section className="flex-column flex h-screen min-h-screen w-full items-center justify-between ">
            {collections.map((collection, index) => {
              return (
                <ProductSection
                  products={collection.node.products}
                  title={collection.node.title}
                  key={index}
                />
              );
            })}
          </section>
        </main>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getProducts;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

export default Home;
