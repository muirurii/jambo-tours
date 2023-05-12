import { BsStarHalf, BsStar, BsStarFill } from "react-icons/bs";

const rates = [1, 2, 3, 4, 5];

const RateCard = ({ rating }: { rating: number }) => {
  return (
      <div className="flex gap-2 items-center justify-center mt-1">
        {rates.map((rate) => {
            return rate <= rating + 0.5 ? rate === rating + 0.5 ? (
              <BsStarHalf className="fill-accent" />
            ) : (
              <BsStarFill className="fill-accent" />
            ) : <BsStar />;
        })}
      </div>
  );
};

export default RateCard;
