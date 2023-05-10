import { Carousel} from "react-responsive-carousel";


const Hero = () => {
  const imgWidth: number = window.innerWidth;
  const images: string[] = [
    "2862070/pexels-photo-2862070.jpeg",
    "4577559/pexels-photo-4577559.jpeg",
    "2340312/pexels-photo-2340312.jpeg",
  ];


  return (
    <section className="h-screen w-screen relative">
      <Carousel autoPlay = {true} emulateTouch={true} showIndicators={false} infiniteLoop={true}
       showThumbs = {false} showArrows={false}
       className="absolute top-0 left-0 w-screen h-screen">
      <img
        className={`h-screen transition-opacity duration-[4s] ease-in-out`}
        src={`https://images.pexels.com/photos/${images[0]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      <img
        className={`h-screen transition-opacity duration-[4s] ease-in-out`}
        src={`https://images.pexels.com/photos/${images[1]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      <img
        className={`h-screen transition-opacity duration-[4s] ease-in-out`}
        src={`https://images.pexels.com/photos/${images[2]}?auto=compress&cs=tinysrgb&w=${imgWidth}`}
        alt="HERO IMAGES"
      />
      </Carousel>
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
      bg-gradient-to-t from-secondary to-[#fff5]
      "></div>
    </section>
    
  );
};

export default Hero;
