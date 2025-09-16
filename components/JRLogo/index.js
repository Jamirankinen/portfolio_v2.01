import { useEffect, useRef, useState } from "react";
import J from "./jrSVGs/J";
import R from "./jrSVGs/R";
import Circle from "./jrSVGs/Circle";

const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div {...rest} className={`jr-parallax ${className}`}>
    <SVG />
  </div>
);

export default function JRLogo({ forceVisible = false }) {
  const ref = useRef();
  const [mount, handleMount] = useState(false);
  
 useEffect(() => {
    if (forceVisible) {
      handleMount(true); // skip scroll logic
      return;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceVisible]);

  const isInViewport = () => {
    const rect = ref?.current?.getBoundingClientRect();
    return rect?.top < window.innerHeight / 2;
  };

  const handleScroll = () => {
    handleMount(isInViewport());
  };

  return (
    <div ref={ref} className={`jr-logo ${mount ? "jr-logo-visible" : ""}`}>
      <SvgWrapper className="jr_svg_J" SVG={J} />
      <SvgWrapper className="jr_svg_R" SVG={R} />
      <SvgWrapper className="jr_svg_Circle" SVG={Circle} />
    </div>
  );
}

