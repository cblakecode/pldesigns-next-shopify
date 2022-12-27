import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import { getCollections } from "../lib/shopify";
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
      <div className="grid w-screen gap-6 overflow-hidden">
        <main className="relative col-span-full">
          <Navbar />
          <Hero />
          <section className="grid h-screen min-h-screen w-full auto-rows-max">
            {collections.map(({ node }, index) => {
              return <ProductSection node={node} key={index} />;
            })}
          </section>
        </main>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getCollections;

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
