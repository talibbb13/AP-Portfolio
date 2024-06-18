import gsap, { Power4 } from "gsap";

function HoverImg() {
  var rot = 0;
  var rotDiff = 0;

  const elemItems = [
    {
      title: "Workiz Easy",
      year: "2022",
      imgSrc: "https://cynthiaugwu.com/images/hovers/plug.png",
    },
    {
      title: "Premium Blender",
      year: "2014",
      imgSrc: "https://cynthiaugwu.com/images/hovers/ixperience.png",
    },
    {
      title: "Hypercare Systems",
      year: "2019",
      imgSrc: "https://cynthiaugwu.com/images/hovers/hudu.png",
    },
    {
      title: "Orderlion",
      year: "2019",
      imgSrc: "https://cynthiaugwu.com/images/cynthia.png",
    },
  ];

  const handleImgHover = (e) => {
    var yLoc = e.clientY - e.currentTarget.getBoundingClientRect().top;
    rotDiff = e.clientX - rot;
    rot = e.clientX;

    // console.log(e.targetquerySelector("img"));
    gsap.to(e.currentTarget.querySelector("img"), {
      opacity: 1,
      ease: Power4,
      left: e.clientX,
      top: yLoc,
      rotate: gsap.utils.clamp(-20, 20, rotDiff * 0.3),
    });
  };

  const handleImgHide = (elem) => {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power4,
      duration: 0.5,
    });
  };

  return (
    <div className="py-10 px-14 uppercase">
      <div>
        {elemItems.map((item, ind) => (
          <div
            onMouseMove={(e) => handleImgHover(e)}
            onMouseLeave={(e) => handleImgHide(e.target)}
            key={ind}
            className={`elem group w-full border-t-2 py-[4vw] pl-[3vw] flex justify-between relative ${
              ind === elemItems.length - 1 && "border-b-2"
            }`}
            style={{ transition: "all cubic-bezier(0.19, 1, 0.22, 1) .5s" }}
          >
            <img
              className="absolute z-[9] h-[120%] opacity-0 rounded-sm pointer-events-none -translate-x-1/2 -translate-y-1/2"
              src={item.imgSrc}
              alt={item.title}
            />
            <h1
              className="text-[3vw] font-semibold opacity-[.7] group-hover:scale-[.9]"
              style={{ transition: "cubic-bezier(0.19, 1, 0.22, 1) .5s" }}
            >
              {item.title}
            </h1>
            <h5
              className="group-hover:scale-[.9]"
              style={{ transition: "cubic-bezier(0.19, 1, 0.22, 1) .5s" }}
            >
              {item.year}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HoverImg;
