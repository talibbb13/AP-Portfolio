import { useState } from "react";

function CreateButton({
  children,
  px = "px-[.5rem]",
  py = "py-[.2rem]",
  bgColor = "bg-transparent",
  textColor = "text-white",
  fontSize = "text-xs sm:text-sm",
  icon,
  className = "",
  ...props
}) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={`${px} ${py} ${bgColor} ${textColor} ${fontSize} flex justify-center items-center gap-2 whitespace-nowrap rounded-full border relative overflow-hidden ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      <span
        className={`absolute inset-0 bg-black duration-300 ease-in-out ${
          hover ? "translate-y-0 scale-x-100" : "translate-y-full scale-y-0"
        }`}
        style={{
          clipPath: "ellipse(150% 100% at 50% 100%)",
        }}
      ></span>
      <span className="relative z-10">{children}</span>
      {icon && (
        <div
          className={`iconBg bg-white h-[.5rem] w-[.5rem] sm:h-[.7rem] sm:w-[.7rem] rounded-full z-10 flex justify-center items-center ${
            hover && "scale-[2]"
          }`}
          style={{ transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <div
            style={{
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className={`iconCover ${
              hover ? "block" : "hidden"
            } text-[6px] sm:text-[8px]`}
          >
            {icon}
          </div>
        </div>
      )}
    </button>
  );
}

export default CreateButton;
