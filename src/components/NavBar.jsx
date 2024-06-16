import BrandLogo from "./BrandLogo"

function NavBar({navBarState}) {
  const navItems = [
    {
      name: "Home",
      rout: "/",
    },
    {
      name: "Services",
      rout: "/services",
    },
    {
      name: "Our work",
      rout: "/work",
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
            <li
              className={`${ind === navItems.length - 2 && "pr-32"}`}
              key={item.name}
            >
              <a href={item.rout}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
