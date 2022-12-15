import Image from "next/image";
import HeroImage from "../public/hero-clothes.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="col-span-full h-screen w-full grid-flow-col grid-cols-2 bg-common-light 2xl:grid">
      <div className="hidden flex-col items-center justify-center gap-6 2xl:flex">
        <h1 className="text-7xl text-gray-600">...Call to Action</h1>
        <Link href="../components/pages/ProductList">
          <button
            className="rounded-xl bg-main/90 px-6 py-4 text-common-light drop-shadow-md"
            type="button"
          >
            Shop Collection
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={HeroImage}
          alt="clothes on a rack"
          className="max-h-screen w-full object-cover brightness-50 2xl:w-2/3 2xl:rounded-xl 2xl:drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
