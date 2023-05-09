import { useState } from "react";

const Hero = () => {
  const imgWidth: number = window.innerWidth;
  const images: string[] = ["2862070/pexels-photo-2862070.jpeg","631317/pexels-photo-631317.jpeg","2340312/pexels-photo-2340312.jpeg"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  setTimeout(() => {
    if (currentIndex === 2) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  }, 6000);

  // const getCurrentImage =

  return (
    <section className="h-screen w-screen relative -z-10">
      <img
        className={`w-full h-full absolute top-0 left-0 object-cover transition-opacity duration-[5s] ease-in-out ${currentIndex === 0 ? "opacity-0" : null }`}
        src={`https://images.pexels.com/photos/${images[0]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      <img
        className={`w-full h-full absolute top-0 left-0 object-cover transition-opacity duration-[5s] ease-in-out ${currentIndex === 1 ? "opacity-0" : null }`}
        src={`https://images.pexels.com/photos/${images[1]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      <img
        className={`w-full h-full absolute top-0 left-0 object-cover transition-opacity duration-[5s] ease-in-out ${currentIndex === 2 ? "opacity-0" : null }`}
        src={`https://images.pexels.com/photos/${images[2]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      <section className="w-full h-full flex items-center justify-center relative z-10">
        <h1 className="text-5xl text-center">
          Discover the
          best
          <br />
          <span className="pl-2 text-secondary">Safari</span>
          <br />
          Experiences
        </h1>
      </section>
      <div className="absolute top-0 left-0 h-full w-full bg-[#ccc5]"></div>
    </section>
  );
};

export default Hero;
