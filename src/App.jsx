import { NavBar, Footer } from "./components";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { RxArrowTopRight } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [navBarState, setNavBarState] = useState(true);
  const bigCursorRef = useRef();
  const cursorState = useSelector((state) => state.cursor.status);

  useEffect(() => {
    let timeOut;
    var xScale = 1;
    var yScale = 1;
    var xPrev = 0;
    var yPrev = 0;

    window.addEventListener("wheel", (dets) => {
      if (dets.deltaY > 0) {
        setNavBarState(false);
      } else {
        setNavBarState(true);
      }
    });

    cursorState ?
      window.addEventListener("mousemove", (dets) => {
        var xDiff = dets.x - xPrev;
        var yDiff = dets.y - yPrev;
        xScale = gsap.utils.clamp(0.9, 1.1, xDiff * 0.3);
        yScale = gsap.utils.clamp(0.9, 1.1, yDiff * 0.3);
        xPrev = dets.x;
        yPrev = dets.y;

        bigCursorRef.current.style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xScale}, ${yScale})`;

        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
          bigCursorRef.current.style.transform = `translate(${dets.x}px, ${dets.y}px) scale(1, 1)`;
        }, 100);
      }): window.removeEventListener("mousemove", ()=> console.log("hell"))
  });

  return (
    <>
      <div className="w-full bg-[#0F0F0F] text-white relative ---bg-[url('https://wallpapercave.com/wp/wp6418877.jpg')]">
        {cursorState && (
          <div
            className="bigCursor fixed -top-[6%] -left-[2%] h-14 w-14 bg-zinc-100 rounded-full z-[999999999] pointer-events-none text-black text-xs hidden md:block mix-blend-difference whitespace-nowrap font-bold"
            ref={bigCursorRef}
            style={{
              transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
            }}
          >
            <div className="bundler absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Click it <RxArrowTopRight className="inline-block"/>
            </div>
          </div>
        )}
        <NavBar navBarState={navBarState} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
