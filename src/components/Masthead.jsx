import React, { useRef } from "react";
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
            alt={typeof name === "string" ? name : ""}
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
        <Link to={`/masthead/${slug}`} className="text-[#FF4C65] text-xl sm:text-2xl font-bold font-['Roboto_Mono']">
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
        className="fixed left-0 right-0 h-1 bg-[#FF4C65] bottom-4 origin-left"
      />
    </div>
  );
}
