import { motion, useAnimation } from "framer-motion";
import { showCursor, hideCursor } from "../store/dataSlice";
import { useDispatch } from "react-redux";

function ProjectsCard() {
  const dispatch = useDispatch();

  const proCards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHoverStart = (ind) => {
    proCards[ind].start({
      y: "0%",
    });
    dispatch(showCursor());
  };

  const handleHoverEnd = (ind) => {
    proCards[ind].start({
      y: "100%",
    });
    dispatch(hideCursor());
  };
  return (
    <div className="min-h-screen rounded-tl-lg rounded-tr-lg pt-10 relative">
      <h1 className="text-4xl py-8 px-14">Featured Projects</h1>
      <hr />
      <div className="projects flex justify-center gap-10 flex-wrap px-14 py-10 whitespace-nowrap">
        {/* first project */}
        <div className="project">
          <div className="holder flex items-center gap-1 text-[1rem] py-1">
            <div className="point h-1 w-1 bg-white rounded-full"></div>
            <p>React Router</p>
          </div>

          <motion.div
            onHoverStart={() => handleHoverStart(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardHolder h-[50vh] w-[90vw] sm:h-[60vh] sm:w-[70vw] md:h-[80vh] md:w-[40vw] relative cursor-pointer"
          >
            <h1 className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 z-50 text-9xl text-[#CDEA68] font-semibold overflow-hidden hidden md:block">
              {"Routs".split("").map((letter, ind) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={proCards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: ind * 0.05 }}
                  className="inline-block uppercase"
                  key={ind}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div
              className="w-full h-full bg-[url('https://i.imgur.com/OheyG18.png')] rounded-lg bg-center bg-cover hover:scale-[.9]"
              style={{
                transition: "transform 0.6s cubic-bezier(0, 0.55, 0.45, 1)",
              }}
            ></div>
          </motion.div>
        </div>
        {/* second project */}
        <div className="project">
          <div className="holder flex items-center gap-1 text-[1rem] py-1">
            <div className="point h-1 w-1 bg-white rounded-full"></div>
            <p>Anonymous Blog</p>
          </div>

          <motion.div
            onHoverStart={() => handleHoverStart(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardHolder h-[50vh] w-[90vw] sm:h-[60vh] sm:w-[70vw] md:h-[80vh] md:w-[40vw] relative cursor-pointer"
          >
            <h1 className="absolute top-1/2 right-full translate-x-1/2 -translate-y-1/2 z-50 text-9xl text-[#CDEA68] font-semibold overflow-hidden hidden md:block">
              {"blog".split("").map((letter, ind) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={proCards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: ind * 0.05 }}
                  className="inline-block uppercase"
                  key={ind}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div
              className="w-full h-full bg-[url('https://i.imgur.com/Yt9JgIN.png')] rounded-lg bg-center bg-cover hover:scale-[.9] transition ease-in"
              style={{
                transition: "transform 0.6s cubic-bezier(0, 0.55, 0.45, 1)",
              }}
            ></div>
          </motion.div>
        </div>
        {/* Third project */}
        <div className="project">
          <div className="holder flex items-center gap-1 text-[1rem] py-1">
            <div className="point h-1 w-1 bg-white rounded-full"></div>
            <p>Sticky Notes</p>
          </div>

          <motion.div
            onHoverStart={() => handleHoverStart(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardHolder h-[50vh] w-[90vw] sm:h-[60vh] sm:w-[70vw] md:h-[80vh] md:w-[40vw] relative cursor-pointer"
          >
            <h1 className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 z-50 text-9xl text-[#CDEA68] font-semibold overflow-hidden hidden md:block">
              {"Notes".split("").map((letter, ind) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={proCards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: ind * 0.05 }}
                  className="inline-block uppercase"
                  key={ind}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div
              className="w-full h-full bg-[url('https://i.imgur.com/Kg2Nxwj.png')] rounded-lg bg-center bg-cover  hover:scale-[.9] transition ease-in"
              style={{
                transition: "transform 0.6s cubic-bezier(0, 0.55, 0.45, 1)",
              }}
            ></div>
          </motion.div>
        </div>
        {/* Fourth project */}
        <motion.div
          onHoverStart={() => handleHoverStart(3)}
          onHoverEnd={() => handleHoverEnd(3)}
          className="project"
        >
          <div className="holder flex items-center gap-1 text-[1rem] py-1">
            <div className="point h-1 w-1 bg-white rounded-full"></div>
            <p>Music Player</p>
          </div>

          <div className="cardHolder h-[50vh] w-[90vw] sm:h-[60vh] sm:w-[70vw] md:h-[80vh] md:w-[40vw] relative cursor-pointer">
            <h1 className="absolute top-1/2 right-full translate-x-1/2 -translate-y-1/2 z-50 text-9xl text-[#CDEA68] font-semibold overflow-hidden hidden md:block">
              {"Music".split("").map((letter, ind) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={proCards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: ind * 0.05 }}
                  className="inline-block uppercase"
                  key={ind}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div
              className="w-full h-full bg-[url('https://i.imgur.com/BGmPhmH.png')] rounded-lg bg-center bg-cover  hover:scale-[.9] transition ease-in"
              style={{
                transition: "transform 0.6s cubic-bezier(0, 0.55, 0.45, 1)",
              }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectsCard;
