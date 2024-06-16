
import CreateButton from "./CreateButton";
import { motion } from "framer-motion";

function Landing() {
  const headingTexts = ["We Create", "Eye Opening", "Presentations"];

  const bottomItems = [
    "For public and private companies",
    "From the first pitch to IPO",
    "start the project",
  ];

  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full min-h-screen flex items-center px-14">
   <div className="mainHeadings text-[10rem] font-black -mt-16">
      {headingTexts.map((headingText, ind) => (
        <div
          key={ind}
          className={`
            ${ind === 1 && "flex items-center"} uppercase`}
        >
          {ind === 1 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "13rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: .5 }}
              style={{ height: "7rem" }}
            >
              <img
                className="w-full h-full rounded-lg mt-[.7vw]"
                src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          )}
          <h1 className="Founder leading-[.75] -tracking-[.01em]">
            {headingText}
          </h1>
        </div>
      ))}
    </div>

      <div className="absolute bottom-7 right-0 h-[10vh] w-full border-t-2 border-zinc-800 px-14 py-5">
        <ul className="w-full flex justify-between">
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
