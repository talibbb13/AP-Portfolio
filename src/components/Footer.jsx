import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";
import { FaDribbble, FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import CreateStringBand from "./CreateStringBand"

function Footer() {
  const [time, setTime] = useState("00:00:00");
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

  useEffect(() => {
    setInterval(() => {
      var now = new Date();
      var hours = now.getHours() % 12 || 12;
      var min = now.getMinutes();
      var sec = now.getSeconds();
      setTime(`${hours} : ${min}: ${sec}`);
    }, 1000);
  }, []);

  return (
    <div className="relative bg-[#0F0F0F] rounded-tl-xl rounded-tr-xl">
      {" "}
      <CreateStringBand />
      <div className="w-full px-2 md:px-14 flex flex-col md:flex-row justify-between">
        <div className="md:min-h-screen w-full lg:w-1/2 uppercase text-6xl lg:text-9xl font-semibold flex flex-col justify-between">
          <div className="bundler">
            <h1 className="Founder -mb-2 md:-mb-5">eye-</h1>
            <h1 className="Founder">Opening</h1>
          </div>
          <BrandLogo className="hidden md:block" />
        </div>
        <div className="h-auto lg:h-screen w-full lg:w-1/2 flex flex-col gap-10">
          <h1 className="Founder text-6xl lg:text-9xl font-semibold uppercase">
            presentations
          </h1>

          <div className="Links w-full flex flex-col lg:flex-row justify-between">
            <div className="socialMediaLinks mb-6 lg:mb-0">
              <h1 className="text-xl pb-2">SM:</h1>
              <div className="bundler flex gap-3 underline">
                {socialMedia.map((sm, ind) => (
                  <a
                    key={ind}
                    href={sm.link}
                    className="cover text-black bg-white rounded-full flex justify-center items-center h-10 w-10 hover:opacity-70"
                  >
                    <div className="text-2xl">{sm.icon}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="PagesLink">
              <h1 className="text-lg">PG:</h1>
              <div className="bundler flex flex-col underline">
                {navItems.map((item, ind) => (
                  <NavLink
                    key={ind}
                    className={({ isActive }) =>
                      `${isActive && "text-[#CDEA68] font-bold"}`
                    }
                    to={item.rout}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="modern flex flex-col sm:flex-row justify-between">
            <div className="bundler mb-6 lg:mb-0">
              <h3>
                E: <br /> hello@ochi.design
              </h3>
              <br />
              <p>
                A: <br /> Ochi Design, 78 Market Street, <br /> Suite 456, San
                Francisco, CA 94103.
              </p>
            </div>

            <div className="time text-xl font-bold whitespace-nowrap pb-5 text-green-500">
              {time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
