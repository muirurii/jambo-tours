import React from "react";

const Banner = () => {
  return (
    <section
      className="min-h-[30vh] px-4 py-8 w-full my-8 relative
    banner after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-10 after:pointer-events-none
    after:bg-gradient-to-t after:from-[#0000] after:to-secondary after:via-[#29530520]
    flex flex-col gap-5 items-center justify-center
    "
    >
      <p className="text-3xl text-center font-medium font-secondary text-accent">
        Start your adventure and exploration journey with us!
      </p>
      <button className="bg-secondary tet-white py-2 px-4 rounded-full">
        Get Started
      </button>
      <img className="absolute top-0 left-0 w-full h-full object-cover -z-30" alt="Happy people" 
      src="https://images.pexels.com/photos/13033066/pexels-photo-13033066.jpeg?auto=compress&cs=tinysrgb&w=1240"
      />
    </section>
  );
};

export default Banner;
