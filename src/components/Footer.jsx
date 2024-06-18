import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";

function Footer() {
  const [time, setTime] = useState("00:00:00");
  const socialMedia = [
    { name: "instagram", link: "#" },
    { name: "behance", link: "#" },
    { name: "facebook", link: "#" },
    { name: "Linkedin", link: "#" },
  ];
  const pages = [
    { name: "Home", link: "" },
    { name: "Services", link: "" },
    { name: "Our work", link: "" },
    { name: "About us", link: "" },
    { name: "Insights", link: "" },
    { name: "Contact us", link: "" },
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
    <div
      className="w-full px-14 flex justify-between"
    >
      <div className="h-screen w-1/2 uppercase text-9xl font-semibold flex flex-col justify-between py-10">
        <div className="bundler">
          <h1 className="Founder -mb-8">eye-</h1>
          <h1 className="Founder">Opening</h1>
        </div>
        <BrandLogo />
      </div>
      <div className="h-screen w-1/2 py-10 flex flex-col gap-10">
        <h1 className="Founder text-9xl font-semibold uppercase">
          presentations
        </h1>

        <div className="Links w-full flex justify-between px-40">
          <div className="socialMediaLinks">
            <h1 className="text-lg">SM:</h1>
            <div className="bundler flex flex-col underline">
              {socialMedia.map((sm, ind) => (
                <a key={ind} href={sm.link}>
                  {sm.name}
                </a>
              ))}
            </div>
          </div>

          <div className="PagesLink">
            <h1 className="text-lg">PG:</h1>
            <div className="bundler flex flex-col underline">
              {pages.map((page, ind) => (
                <a key={ind} href={page.link}>
                  {page.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="modern flex justify-between items-center px-40">
          <div className="bundler">
            <h3>
              E: <br /> hello@ochi.design@
            </h3>
            <p>
              A: <br /> Ochi Design, 78 Market Street, <br /> Suite 456, San
              Francisco, CA 94103.
            </p>
          </div>

          {/* pending */}
          <div className="time text-xl">{time}</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
