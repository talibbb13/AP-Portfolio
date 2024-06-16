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
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef } from 'react';

function App() {
const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div
        className="w-full bg-[#0F0F0F] text-white"
      >
        <NavBar />
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
