

function CreateButton({
  children,
  px = "px-[.7rem]",
  py = "py-[.1rem]",
  bgColor = "black",
  textColor = "text-white",
  fontSize = "text-sm",
  icon,
  className = "",
  ...props
}) {
  return (
    <button
      className={`${px} ${py} ${bgColor} ${textColor} ${fontSize} flex justify-center items-center gap-3 whitespace-nowrap rounded-full uppercase border ${className}`}
    >
      {children}
      {icon && (
        <div className="iconBg bg-white h-[.7rem] w-[.7rem] rounded-full">
          <div className="iconCover scale-0">{icon}</div>
        </div>
      )}
    </button>
  );
}

export default CreateButton
