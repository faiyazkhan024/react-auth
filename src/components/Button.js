import { twMerge } from "tailwind-merge";

const Button = ({ icon, children, variant, color, fullWidth = true }) => {
  return (
    <button
      className={twMerge(
        fullWidth && "w-full",
        "py-2.5 px-5 text-sm font-medium rounded-2xl  flex justify-center items-center gap-2",
        variant === "contained" && "bg-primary text-white",
        variant === "outline" &&
          twMerge(
            "border",
            color === "primary" && "border-primary text-primary",
            color === "secondary" && "border-secondary-light"
          )
      )}
    >
      {icon && (
        <img
          src={icon}
          alt={typeof children === "string" ? children : "logo"}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
