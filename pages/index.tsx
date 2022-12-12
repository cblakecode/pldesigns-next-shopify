import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PLDesigns and More</title>
        <meta></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <main className="relative grid w-full grid-flow-row">
          <Navbar />
          <Hero />
        </main>
      </div>
    </div>
  );
}
