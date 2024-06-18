import {
  Intro,
  Landing,
  Marquee,
  NavBar,
  PlayGround,
  Projects,
  HoverImg,
  Cards,
  Footer,
} from "./components";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { RxArrowTopRight } from "react-icons/rx";
import { useSelector } from "react-redux";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [navBarState, setNavBarState] = useState(true);
  const bigCursorRef = useRef();
  const cursorState = useSelector((state)=> state.cursor.status)

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

    window.addEventListener("mousemove", (dets) => {
      var xDiff = dets.x - xPrev;
      var yDiff = dets.y - yPrev;
      xScale = gsap.utils.clamp(0.9, 1.1, xDiff * .3 );
      yScale = gsap.utils.clamp(0.9, 1.1, yDiff * .3 );
      xPrev = dets.x;
      yPrev = dets.y;

      bigCursorRef.current.style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xScale}, ${yScale})`;

      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        bigCursorRef.current.style.transform = `translate(${dets.x}px, ${dets.y}px) scale(1, 1)`;
      }, 100);
    });
  });

  const showCursor = () => {
    console.log();
  }

  const hideCursor = () => {
    console.log();
  }

  return (
    <>
      <div className="w-full bg-[#0F0F0F] text-white relative">
        <div
          className={`bigCursor fixed -top-[6%] -left-[2%] h-20 w-20 bg-zinc-200 rounded-full z-[999999999] pointer-events-none flex justify-center items-center text-black ${
            cursorState ? "block" : "hidden"
          } mix-blend-difference`}
          ref={bigCursorRef}
          style={{
            transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        >
          Visit <RxArrowTopRight />
        </div>
        <NavBar navBarState={navBarState} />
        <Landing />
        <Marquee />
        <Intro />
        <PlayGround />
        <Projects />
        <HoverImg />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
