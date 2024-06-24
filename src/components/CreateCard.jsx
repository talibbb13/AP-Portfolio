import { showCursor, hideCursor } from "../store/dataSlice";
import { useDispatch } from "react-redux";

function CreateCard({
  height = "h-[55vh]",
  width = "w-full sm:w-[45vw] md:w-[20vw]",
  bgImg,
  bgColor,
  centerImg,
  sideBtn,
  className,
}) {
  const dispatch = useDispatch();
  return (
    <div className={`${height} ${width} ${className} mb-4`}>
      <div
        className={`${bgColor} h-full w-full relative rounded-lg bg-center bg-cover hover:scale-[.9] cursor-pointer`}
        style={{
          backgroundImage: `url(${bgImg})`,
          transition: "transform 0.6s cubic-bezier(0, 0.55, 0.45, 1)",
        }}
        onMouseEnter={() => dispatch(showCursor())}
        onMouseLeave={() => dispatch(hideCursor())}
      >
        {centerImg && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-full w-full">{centerImg}</div>
          </div>
        )}
        {sideBtn && <div className="absolute bottom-3 left-3">{sideBtn}</div>}
      </div>
    </div>
  );
}

export default CreateCard;
