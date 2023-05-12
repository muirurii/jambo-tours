const Indicator = ({
  isSelected,
  clickHandler,
}: {
  clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void;
  isSelected: boolean;
}) => (
  <button
    className={`h-2 w-2 inline-block rounded-full mr-2
    ${isSelected ? "bg-secondary" : "bg-white border border-secondary"}
     transition-colors duration-300
     `}
    onClick={clickHandler}
  ></button>
);

export default Indicator;
