import { useEffect, useState } from "react";

function CreatePlayGround({ bgElement, video, otherElements }) {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    });
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.5"
      className="relative h-full w-full overflow-hidden"
    >
      <div className="bgElement">{bgElement}</div>
      <div className="video">{video}</div>

      <div className="Eyes z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center gap-8">
        <div className="Sclera h-[13vw] w-[13vw] bg-zinc-200 rounded-full flex justify-center items-center">
          <div className="Iris relative h-1/2 w-1/2 rounded-full bg-black hover:bg-zinc-900">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
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
              <div className="Pupil absolute right-2 h-3 w-3 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="Sclera h-[13vw] w-[13vw] bg-zinc-200 rounded-full flex justify-center items-center">
          <div className="Iris relative h-1/2 w-1/2 rounded-full bg-black hover:bg-zinc-900">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
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
              <div className="Pupil absolute right-2 h-3 w-3 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlayGround;
