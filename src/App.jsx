import { useEffect, useState } from "react";
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
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [navBarState, setNavBarState] = useState(true);

  useEffect(() => {
    window.addEventListener("wheel", (dets) => {
      if (dets.deltaY > 0) {
        setNavBarState(false);
      } else {
        setNavBarState(true);
      }
    });
  });

  return (
    <>
      <div className="w-full bg-[#0F0F0F] text-white relative">
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
