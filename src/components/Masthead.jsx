import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import people from "../data/people";
import slugify from "slugify";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ image, name, role, personName }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150); // reduced for smaller devices

  const slug = slugify(personName, { lower: true, strict: true });


  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center relative px-4 sm:px-6">
      <Link to={`/masthead/${slug}`}>
        <motion.div
          ref={ref}
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-60 h-80 sm:w-72 sm:h-[420px] md:w-80 md:h-[480px] bg-[#f5f5f5] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
        >
          <img
            src={image}
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </Link>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ y }}
        className="mt-4 text-center max-w-xs"
      >
        <Link to={`/masthead/${slug}`} className="text-[#3e1e68] text-xl sm:text-2xl font-bold font-['Roboto_Mono']">
          {name}
        </Link>
        <div className="text-sm sm:text-base text-white mt-1">{role}</div>
      </motion.div>
    </section>
  );
}

export default function Masthead() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isDark, setIsDark] = useState(false)

  useEffect(() => {

    const checkTheme = () => {

      const theme =
        document.documentElement.getAttribute(
          "data-theme"
        )

      setIsDark(theme === "dark")
    }

    checkTheme()

    const observer = new MutationObserver(
      checkTheme
    )

    observer.observe(
      document.documentElement,
      {
        attributes: true,
        attributeFilter: ["data-theme"],
      }
    )

    return () => observer.disconnect()

  }, [])

  return (
    <div className="snap-y snap-mandatory">
      {people.map((person) => (
        <Image
          key={person.id}
          image={person.image}
          name={person.name}
          role={person.role}
          personName={person.name}
        />
      ))}
      <motion.div
        style={{ scaleX }}
        className={`
        fixed
        left-0
        right-0
        h-1
        bottom-4
        origin-left
        ${isDark ? "bg-white" : "bg-[#3e1e68]"}
      `}
      />
    </div>
  );
}
