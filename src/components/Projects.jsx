import { motion, useAnimation } from "framer-motion";
import { showCursor, hideCursor } from "../store/dataSlice"
import { useDispatch } from "react-redux";

function Projects() {
  const dispatch = useDispatch()

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
    dispatch(showCursor())
  };

  const handleHoverEnd = (ind) => {
    proCards[ind].start({
      y: "100%",
    });
    dispatch(hideCursor());
  };
  return (
    <div className="min-h-screen rounded-tl-lg rounded-tr-lg bg-[#0F0F0F] relative">
      <h1 className="text-4xl py-8 px-14">Featured Projects</h1>
      <hr />
      <div className="projects flex justify-center gap-10 flex-wrap px-14 py-10 whitespace-nowrap">
        {/* first project */}
        <div className="project">
          <div className="holder flex items-center gap-1 text-[1rem] py-1">
            <div className="point h-1 w-1 bg-white rounded-full"></div>
            <p>FYDE</p>
          </div>

          <motion.div
            onHoverStart={() => handleHoverStart(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardHolder h-[80vh] w-[40vw] relative cursor-pointer"
          >
            <h1 className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 z-50 text-9xl text-[#CDEA68] font-semibold overflow-hidden">
              {"FYDE".split("").map((letter, ind) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={proCards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: ind * 0.05 }}
                  className="inline-block"
                  key={ind}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div
              className="w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')] rounded-lg bg-center bg-cover hover:scale-[.9]"
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
            <p>VISE</p>
          </div>

          <motion.div
            onHoverStart={() => handleHoverStart(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardHolder h-[80vh] w-[40vw] relative cursor-pointer"
          >
            <h1 className="absolute top-1/2 right-full translate-x-1/2 -translate-y-1/2 z-50 text-9xl text-[#CDEA68] font-semibold overflow-hidden">
              {"VISA".split("").map((letter, ind) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={proCards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: ind * 0.05 }}
                  className="inline-block"
                  key={ind}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div
              className="w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')] rounded-lg bg-center bg-cover hover:scale-[.9] transition ease-in"
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
            <p>TRAWA</p>
          </div>

          <motion.div
            onHoverStart={() => handleHoverStart(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardHolder h-[80vh] w-[40vw] relative cursor-pointer"
          >
            <h1 className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 z-50 text-9xl text-[#CDEA68] font-semibold overflow-hidden">
              {"TRAWA".split("").map((letter, ind) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={proCards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: ind * 0.05 }}
                  className="inline-block"
                  key={ind}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div
              className="w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg')] rounded-lg bg-center bg-cover  hover:scale-[.9] transition ease-in"
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
            <p>PREMIUM BLEND</p>
          </div>

          <div className="cardHolder h-[80vh] w-[40vw] relative cursor-pointer">
            <h1 className="absolute top-1/2 right-full translate-x-1/2 -translate-y-1/2 z-50 text-9xl text-[#CDEA68] font-semibold overflow-hidden">
              {"PREMIUM".split("").map((letter, ind) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={proCards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: ind * 0.05 }}
                  className="inline-block"
                  key={ind}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <div
              className="w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png')] rounded-lg bg-center bg-cover  hover:scale-[.9] transition ease-in"
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

export default Projects;
