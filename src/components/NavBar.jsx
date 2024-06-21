import { NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo"

function NavBar({navBarState}) {
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
      name: "About us",
      rout: "/about",
    },
    {
      name: "Insights",
      rout: "/insights",
    },
    {
      name: "Contact",
      rout: "/contact",
    },
  ];

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
      <div className="right">
        <ul className="flex gap-10 text-lg">
          {navItems.map((item, ind) => (
            <NavLink to={item.rout}
              className={`${ind === navItems.length - 2 && "pr-32"}`}
              key={item.name}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
