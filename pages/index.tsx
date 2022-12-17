import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import { getProducts } from "../lib/shopify";
import { Products } from "../lib/types";

const Home = ({ data }: Products) => {
  return (
    <div>
      <Head>
        <title>PLDesigns and More</title>
        <meta></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-flow-row grid-cols-8">
        <main className="relative col-span-full grid w-full grid-flow-row grid-cols-8">
          <Navbar />
          <Hero />
          <ProductSection data={data} />
        </main>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await getProducts;

  console.log(data);

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
