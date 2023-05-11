const HeroImage = ({ imgId }: { imgId: number }) => {
  // const imgWidth: number = window.innerWidth;

  return (
    <img
      className={`h-screen w-screen transition-opacity duration-[4s] ease-in-out`}
      src={`https://images.pexels.com/photos/${imgId}/pexels-photo-${imgId}.jpeg?auto=compress&cs=tinysrgb&w=${1240}`}
      alt="HERO IMAGES"
    />
  );
};

export default HeroImage;
