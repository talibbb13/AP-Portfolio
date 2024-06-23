import { useEffect, useRef } from "react";
import gsap from "gsap";

const CreateStringBand = ({color="white"}) => {
    const strSvgRef = useRef();
    const strPathRef = useRef();
  useEffect(() => {
    let path = `M 0 50 Q 350 50 700 50`;
    strSvgRef.current.addEventListener("mousemove", (dets) => {
      let adjustedY = dets.y - strSvgRef.current.getBoundingClientRect().top;
      path = `M 0 50 Q ${dets.x} ${adjustedY} 700 50`;
      gsap.to(strPathRef.current, {
        attr: { d: path },
        duration: 0.1,
        ease: "power3.out",
      });
    });

    strSvgRef.current.addEventListener("mouseleave", () => {
      gsap.to(strPathRef.current, {
        attr: { d: `M 0 50 Q 350 50 700 50` },
        duration: 1,
        ease: "elastic.out(1, .2)",
      });
    });
  }, []);
  return (
    <div className="StringBand">
      <svg
        ref={strSvgRef}
        viewBox="0 0 700 100"
        preserveAspectRatio="none"
        className="w-full h-32 rounded-lg overflow-visible"
      >
        <path
          ref={strPathRef}
          d="M 0 50 Q 350 50 700 50"
                  stroke={`${color}`}
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default CreateStringBand;
