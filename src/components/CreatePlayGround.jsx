import gsap from "gsap";
import { useEffect, useState } from "react";
import { hideCursor, showCursor } from "../store/dataSlice";
import { useDispatch } from "react-redux";

function CreatePlayGround({ bgElement, video, otherElements }) {
  const [rotate, setRotate] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [showImg, setShowImg] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);

      let transX = gsap.utils.mapRange(
        0,
        window.innerWidth,
        -32,
        32,
        e.clientX
      );
      let transY = gsap.utils.mapRange(
        0,
        window.innerHeight,
        -32,
        32,
        e.clientY
      );
      setTranslateX(transX);
      setTranslateY(transY);
    });
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      onClick={() => setShowImg(!showImg)}
      onMouseEnter={() => dispatch(showCursor())}
      onMouseLeave={() => dispatch(hideCursor())}
      className="relative h-full w-full overflow-hidden"
    >
      <div className={`bgElement ${showImg ? "block:" : "hidden"}`}>
        {bgElement}
      </div>
      <div className={`video`}>{video}</div>

      <div
        className={`Eyes ${
          showImg ? "block:" : "hidden"
        } z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center gap-8`}
      >
        <div
          onMouseEnter={() => dispatch(hideCursor())}
          onMouseLeave={() => dispatch(showCursor())}
          className="Sclera h-[13vw] w-[13vw] bg-zinc-200 rounded-full flex justify-center items-center"
        >
          <div
            className="Iris relative h-3/5 w-3/5 rounded-full bg-black hover:bg-zinc-900"
            style={{
              transform: `translate(${translateX}px, ${translateY}px)`,
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md">
              Play
            </div>
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                transitionDuration: ".3s",
                transition: "ease",
              }}
              className="PupilHolder w-full h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="Pupil absolute right-2 h-[.8rem] w-[.8rem] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => dispatch(hideCursor())}
          onMouseLeave={() => dispatch(showCursor())}
          className="Sclera h-[13vw] w-[13vw] bg-zinc-200 rounded-full flex justify-center items-center"
        >
          <div
            className="Iris relative h-3/5 w-3/5 rounded-full bg-black hover:bg-zinc-900"
            style={{
              transform: `translate(${translateX}px, ${translateY}px)`,
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md">
              Play
            </div>
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                transitionDuration: ".3s",
                transition: "ease",
              }}
              className="PupilHolder w-full h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="Pupil absolute right-2 h-[.8rem] w-[.8rem] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlayGround;
