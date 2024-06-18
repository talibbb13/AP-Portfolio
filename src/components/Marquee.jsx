import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="overflow-hidden w-full bg-[#014D43] py-20 rounded-tl-lg rounded-tr-lg pb-40">
      <div className="flex text-[25vw] whitespace-nowrap uppercase font-bold border-t-2 border-b-2 border-zinc-400 overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="Founder leading-[.9] -mt-[40px] px-14"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="Founder leading-[.9] -mt-[40px] px-14"
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
