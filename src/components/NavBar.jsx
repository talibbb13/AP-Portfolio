import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the menu and close
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandGithubFilled } from "react-icons/tb";

function NavBar({ navBarState }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const socialMedia = [
    { icon: <TbBrandGithubFilled />, link: "https://github.com/talibbb13" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/talibbb35/" },
    { icon: <FaFacebookF />, link: "https://m.facebook.com/talib.raeen.184/" },
    { icon: <TiSocialLinkedin />, link: "https://www.linkedin.com/in/talibbb13" },
  ];
  const navItems = [
    {
      name: "Home",
      rout: "/",
    },
    {
      name: "Skills",
      rout: "/skills",
    },
    {
      name: "Projects",
      rout: "/projects",
    },
    {
      name: "About me",
      rout: "/about",
    },
    {
      name: "Contact",
      rout: "/contact",
    },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      style={{ transition: "transform .5s cubic-bezier(.3,.86,.36,.95)" }}
      className={`fixed bg-transparent backdrop-blur-sm w-full flex justify-between items-center py-7 px-14 z-[999] ${
        navBarState ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="left">
        <BrandLogo />
      </div>
      <div className="right hidden md:flex">
        <ul className="flex gap-10 text-lg">
          {navItems.map((item, ind) => (
            <NavLink
              to={item.rout}
              key={item.name}
              className={({ isActive }) =>
                `${isActive && "text-[#CDEA68] font-bold"} ${
                  ind === navItems.length - 2 && "pr-20"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="block md:hidden z-[9999]">
        {menuOpen ? (
          <FiX className="hover:opacity-70" onClick={toggleMenu} size={30} />
        ) : (
          <FiMenu className="hover:opacity-70" onClick={toggleMenu} size={30} />
        )}
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            className="fixed top-0 left-0 w-full min-h-screen bg-[#0F0F0F] flex items-center justify-around z-[998]"
          >
            <ul className="text-2xl text-white space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.rout}
                    className={({ isActive }) =>
                      `${isActive && "text-[#CDEA68] font-bold"}`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="bundler flex flex-col gap-3">
              <h1 className="font-semibold text-xl">SM</h1>
              {socialMedia.map((sm, ind) => (
                <a
                  target="_blank"
                  key={ind}
                  href={sm.link}
                  className="cover text-black bg-white rounded-full flex justify-center items-center h-10 w-10 hover:opacity-70"
                >
                  <div className="text-2xl">{sm.icon}</div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
