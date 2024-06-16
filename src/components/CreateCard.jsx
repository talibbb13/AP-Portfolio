function CreateCard({
  height = "h-[55vh]",
  width = "w-[20vw]",
  bgImg,
  bgColor,
  centerImg,
  sideBtn,
  className
}) {
  return (
    <div className={`${height} ${width} ${className}`}>
      <div
        className={`${bgColor} h-full w-full relative rounded-lg bg-center bg-cover hover:scale-[.9]`}
        style={{ backgroundImage: `url(${bgImg})`, transition: "transform 0.6s cubic-bezier(0, 0.55, 0.45, 1)" }}
      >
        {centerImg && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className={`h-full w-full`}>{centerImg}</div>
          </div>
        )}
        {sideBtn && <div className="absolute bottom-7 left-7">{sideBtn}</div>}
      </div>
    </div>
  );
}

export default CreateCard;