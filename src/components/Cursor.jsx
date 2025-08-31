import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const trailCount = 8;
  const dotsRef = useRef([]);
  const positions = useRef(
    Array.from({ length: trailCount }).map(() => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      positions.current[0] = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      for (let i = 1; i < trailCount; i++) {
        const prev = positions.current[i - 1];
        const curr = positions.current[i];

        curr.x += (prev.x - curr.x) * 0.25;
        curr.y += (prev.y - curr.y) * 0.25;
      }

      dotsRef.current.forEach((dot, i) => {
        if (dot) {
          dot.style.transform = `translate(${positions.current[i].x}px, ${positions.current[i].y}px)`;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: trailCount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="cursor-dot"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: `${8 - i}px`,
            height: `${8 - i}px`,
            borderRadius: "50%",
            background: "#FF4C65",
            pointerEvents: "none",
            transform: "translate(0, 0)",
            zIndex: 9999,
          }}
        />
      ))}
    </>
  );
}
