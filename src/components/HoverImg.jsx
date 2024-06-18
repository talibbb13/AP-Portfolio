import React from "react";

function HoverImg() {
  const elemItems = [
    { imgSrc: "./Images/plug.webp", title: "Workiz Easy", year: "2022" },
    {
      imgSrc: "./Images/ixperience.png",
      title: "Premium Blender",
      year: "2014",
    },
    { imgSrc: "./Images/hudu.png", title: "Hypercare Systems", year: "2019" },
    { imgSrc: "./Images/hudu.png", title: "Orderlion", year: "2019" },
  ];

  const handleImgHover = (dets) => {
    // console.log("imgHoverArea");
  }

  const handleImgHide = () => {
    // console.log("imgHoverArea");
  }

  return (
    <div className="py-10 px-14 uppercase">
      <div>
        {elemItems.map((item, ind) => (
          <div
            onMouseMove={handleImgHover}
            onMouseLeave={handleImgHide}
            key={ind}
            className={`elem group w-full border-t-2 py-[4vw] pl-[3vw] flex justify-between relative ${
              ind === elemItems.length - 1 && "border-b-2"
            }`}
            style={{ transition: "all cubic-bezier(0.19, 1, 0.22, 1) .5s" }}
          >
            <img
              className="absolute z-[9] h-[120%] opacity-0 rounded-sm pointer-events-none -translate-x-1/2 -translate-y-1/2"
              src={item.Src}
              alt=""
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
