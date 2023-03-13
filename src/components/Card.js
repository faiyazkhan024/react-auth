import { twMerge } from "tailwind-merge";

const Card = ({ children }) => {
  return (
    <div
      className={twMerge(
        "mx-auto lg:mx-0 p-4 lg:p-11 w-full max-w-lg rounded-2xl overflow-hidden shadow space-y-6"
      )}
    >
      {children}
    </div>
  );
};

export default Card;
