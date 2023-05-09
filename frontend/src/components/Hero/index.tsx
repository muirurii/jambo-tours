import { useEffect, useState } from "react";

let interval: any;

const Hero = () => {
  const imgWidth: number = window.innerWidth;
  const images: string[] = [
    "2862070/pexels-photo-2862070.jpeg",
    "4577559/pexels-photo-4577559.jpeg",
    "2340312/pexels-photo-2340312.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    changePictures();
  },[]);


  const changePictures = ()=>{
    clearInterval(interval);
   interval = setInterval(() => {
        console.log("first", currentIndex)
      if (currentIndex === 2) {
        setCurrentIndex(0);
      }else {
          setCurrentIndex(2);
      }
    }, 8000);
  }

  return (
    <section className="h-screen w-screen relative -z-10">
      <img
        className={`w-full h-full absolute top-0 left-0 object-cover transition-opacity duration-[4s] ease-in-out ${
          currentIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
        src={`https://images.pexels.com/photos/${images[0]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      <img
        className={`w-full h-full absolute top-0 left-0 object-cover transition-opacity duration-[4s] ease-in-out ${
          currentIndex === 1 ? "opacity-100" : "opacity-0"
        }`}
        src={`https://images.pexels.com/photos/${images[1]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      <img
        className={`w-full h-full absolute top-0 left-0 object-cover transition-opacity duration-[4s] ease-in-out ${
          currentIndex === 2 ? "opacity-100" : "opacity-0"
        }`}
        src={`https://images.pexels.com/photos/${images[2]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      <section className="w-full h-full flex items-center justify-center relative z-10">
        <h1 className="text-5xl text-center">
          Discover the best
          <br />
          <span className="pl-2 text-secondary">Safari</span>
          <br />
          Experiences
        </h1>
      </section>
      <div className="absolute top-0 left-0 h-full w-full bg-[#499a2c55]"></div>
    </section>
  );
};

export default Hero;
