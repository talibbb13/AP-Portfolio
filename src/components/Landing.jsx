import CreateButton from "./CreateButton";
import { motion } from "framer-motion";
import CreateStringBand from "./CreateStringBand";

function Landing() {
  const headingTexts = ["Creating", "Eye Opening", "Websites"];
  const bottomItems = [
    "For Individuals and Startups",
    "From Concept to Deployment",
    "Let's Build Together",
  ];

  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full min-h-screen flex flex-col px-4 md:px-14"
    >
      <div className="mainHeadings text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black mt-4 md:mt-0 pt-20">
        {headingTexts.map((headingText, ind) => (
          <div
            key={ind}
            className={`${ind === 1 && "flex items-center"} uppercase`}
          >
            {ind === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: "10rem",
                  sm: "7rem",
                  md: "10rem",
                  lg: "13rem",
                }}
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 1,
                  delay: 0.5,
                }}
                style={{ height: "7rem", sm: "5rem", md: "6rem", lg: "7rem" }}
              >
                <img
                  className="w-full h-full rounded-lg mt-1 md:mt-[.5vw] lg:mt-[.7vw]"
                  src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            )}
            <h1 className="Founder leading-tight md:leading-[.75] -tracking-[.01em]">
              {headingText}
            </h1>
          </div>
        ))}
      </div>
      <CreateStringBand />
      <br />
      <div className="absolute bottom-7 right-0 h-auto w-full border-zinc-800 px-4 md:px-14 py-5 sm:pt-0 md:pt-0">
        <ul className="w-full flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          {bottomItems.map((bottomItem, ind) =>
            ind === bottomItems.length - 1 ? (
              <CreateButton children={bottomItem} key={ind}></CreateButton>
            ) : (
              <li className="text-md" key={ind}>
                {bottomItem}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Landing;
