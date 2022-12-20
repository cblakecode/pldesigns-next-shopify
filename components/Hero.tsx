import Image from "next/image";
import HeroImage from "../public/hero-clothes.jpg";

const Hero = () => {
  return (
    <div className="col-span-full h-screen w-full grid-flow-col grid-cols-2 overflow-hidden bg-common-light 2xl:grid">
      <div className="hidden flex-col items-center justify-center gap-6 2xl:flex">
        <h1 className="text-7xl text-gray-600">...Call to Action</h1>
        <button
          className="rounded-xl bg-main/90 px-6 py-4 text-common-light drop-shadow-md"
          type="button"
        >
          Shop Collection
        </button>
      </div>
      <div className="relative flex h-screen min-h-screen w-full items-center justify-center brightness-50">
        <Image src={HeroImage} alt="clothes on a rack" fill />
      </div>
    </div>
  );
};

export default Hero;
