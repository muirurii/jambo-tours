import { useEffect, useRef, useState } from "react";


const Hero = () => {
  const imgWidth: number = window.innerWidth;
  const images: string[] = [
    "2862070/pexels-photo-2862070.jpeg",
    "4577559/pexels-photo-4577559.jpeg",
    "2340312/pexels-photo-2340312.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const intervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    clearInterval(intervalRef.current);
  },[]);
  
  // intervalRef.current = setInterval(()=>{
  //   clearInterval(intervalRef.current);

  //     if(currentIndex === 2){
  //       setCurrentIndex(0)
  //     }else{
  //       setCurrentIndex(current => current + 1);
  //     }
  // },8000)
    


  return (
    <section className="h-screen w-screen relative">
      <img
        className={`w-full h-full absolute top-0 left-0 object-cover transition-opacity duration-[4s] ease-in-out ${
          currentIndex === 0 ? null : "opacity-0"
        }`}
        src={`https://images.pexels.com/photos/${images[0]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      <img
        className={`w-full h-full absolute top-0 left-0 object-cover transition-opacity duration-[4s] ease-in-out ${
          currentIndex === 1 ? null : "opacity-0"
        }`}
        src={`https://images.pexels.com/photos/${images[1]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      <img
        className={`w-full h-full absolute top-0 left-0 object-cover transition-opacity duration-[4s] ease-in-out ${
          currentIndex === 2 ? null : "opacity-0"
        }`}
        src={`https://images.pexels.com/photos/${images[2]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      <section className="w-full h-full flex items-center justify-center relative z-10">
        <article className="text-c">
         <h1 className="text-6xl">
          Discover Kenya's <span className="pl-2 text-accent">Magic</span>
          <br />
          with Jambo Tours
        </h1>
          <p className="italic text-accent">Your Gateway to Adventure and Exploration</p>
        </article>

      </section>
      <div className="absolute top-0 left-0 h-full w-full
      bg-gradient-to-t from-secondary via-[#00000053] to-[#0000]
      "></div>
    </section>
  );
};

export default Hero;
