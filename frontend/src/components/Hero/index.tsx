import { Carousel } from "react-responsive-carousel";
import HeroImage from "../HeroImage";

const Hero = () => {
  const images: number[] = [2862070, 3992516, 13033072];

  return (
    <section className="h-screen w-screen relative">
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        showIndicators={false}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        className="absolute top-0 left-0 w-screen h-screen"
      >
        {images.map((image) => (
          <HeroImage key={image} imgId={image} />
        ))}
      </Carousel>
      <section className="w-full h-full flex items-center justify-center relative z-10">
        <article className="text-c">
          <h1 className="text-6xl">
            Discover Kenya's <span className="pl-2 text-accent">Magic</span>
            <br />
            with
            <span className="pl-2 text-accent">Jambo</span>
            Tours
          </h1>
          <p className="italic text-accent">
            Your Gateway to Adventure and Exploration
          </p>
        </article>
      </section>
      <div
        className="absolute top-0 left-0 h-full w-full
      bg-gradient-to-t from-secondary to-[#fff5]
      "
      ></div>
    </section>
  );
};

export default Hero;
