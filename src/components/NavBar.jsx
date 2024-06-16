import BrandLogo from "./BrandLogo"

function NavBar() {
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
    <nav className="fixed bg-zinc-900 w-full flex justify-between items-center py-7 px-14 z-[999999999]">
      <div className="left">
        <BrandLogo/>
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
