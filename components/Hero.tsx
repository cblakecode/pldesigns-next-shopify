import Image from "next/image";
import HeroImage from "../public/hero-clothes.jpg";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-black">
      <Image
        src={HeroImage}
        alt="clothes on a rack"
        className="aspect-w-1 aspect-h-1 object-cover brightness-50"
      />
    </div>
  );
};

export default Hero;
