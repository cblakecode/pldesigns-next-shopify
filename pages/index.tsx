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
      <div className="grid grid-flow-row grid-cols-8">
        <main className="relative col-span-full grid w-full grid-flow-row grid-cols-8">
          <Navbar />
          <Hero />
        </main>
      </div>
    </div>
  );
}
