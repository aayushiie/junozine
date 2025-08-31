import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,      
      easing: (t) => 0.5 * (1 - Math.cos(Math.PI * t)), 
      smooth: true,
      direction: "vertical",
      lerp: 0.1,                 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;
