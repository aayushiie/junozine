import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import magazinelight from "../assets/svg/magazine-light.svg";
import magazinedark from "../assets/svg/magazine-dark.svg";

const items = [
    {
        title: "Theme",
        image: img1,
    },

    {
        title: "Guidelines",
        image: img2,
    },

    {
        title: "Moodboard",
        image: img3,
    },

    {
        title: "Deadline",
        image: img4,
    },
];

export default function HoverGallery() {
    const [active, setActive] = useState(0);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            const theme = document.documentElement.getAttribute("data-theme");

            setIsDark(theme === "dark");
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="
                min-h-screen
                px-6
                md:px-12
                py-24
            "
        >
            {/* HEADING */}
            <div
                className="px-6
                md:px-12
                pb-4
                text-center
                relative
                mb-20"
            >
                <img
                    src={`${isDark ? magazinedark : magazinelight}`}
                    alt=""
                    className="
            absolute
            left-1/2
            top-20
            md:-top-24
            w-14
            md:w-24
            opacity-70
            rotate-[-10deg]
            pointer-events-none
            select-none
        "
                />

                <h1
                    className="
            editorial-heading
          text-[4.5rem]
          sm:text-[6rem]
          md:text-[8rem]
          leading-[0.9]
          tracking-[-0.08em]
          "
                >
                    Issue 01
                </h1>
            </div>

            {/* TWO COLUMN LAYOUT */}
            <div
                className="
          grid
          grid-cols-1
          lg:grid-cols-2

          gap-16
          lg:gap-24

          items-start
        "
            >
                {/* LEFT SIDE */}
                <div
                    className="
            flex
            flex-col
          "
                >
                    {items.map((item, index) => (
                        <button
                            key={index}
                            onMouseEnter={() => setActive(index)}
                            onClick={() => setActive(index)}
                            className="
                group

                text-left

                border-b
                border-[#d9d1f1]

                py-8

                transition-all
                duration-500
              "
                        >
                            <div
                                className="
                  flex
                  items-center
                  justify-between
                "
                            >
                                {/* TITLE */}
                                <h2
                                    className={`
                    editorial-heading

                    text-[2.8rem]
                    md:text-[5rem]

                    leading-none

                    tracking-[-0.07em]

                    transition-all
                    duration-500

                    ${active === index
                                            ? "text-[#2c327d] italic"
                                            : "text-[#9f96c0]"
                                        }
                  `}
                                >
                                    {item.title}
                                </h2>

                                {/* INDEX */}
                                <span
                                    className="
                    roboto-mono-text

                    text-xs
                    md:text-sm

                    tracking-[0.3em]

                    text-[#9f96c0]
                  "
                                >
                                    0{index + 1}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div
                    className="
                relative
                lg:sticky
                top-0
                lg:top-24
                flex
                justify-center
                items-start
                mt-10
                lg:mt-0
            ">
                    <div
                        className="
                    relative
                    w-full
                    max-w-[520px]
                    aspect-[4/5]
                    overflow-hidden
                    border
                    border-[#d9d1f1]
                    bg-[#f3edff]
                    "
                    >
                        {/* IMAGE */}
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={items[active].image}
                                src={items[active].image}
                                alt={items[active].title}
                                initial={{
                                    y: 80,
                                    opacity: 0,
                                    scale: 1.05,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    scale: 1.02,
                                }}
                                exit={{
                                    y: -40,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    absolute
                                    inset-0
                                    w-full
                                    h-full
                                    pointer-events-none
                                    select-none
                                    object-cover
                                "
                            />
                        </AnimatePresence>

                        {/* SOFT OVERLAY */}
                        <div
                            className="
                absolute
                inset-0

                bg-gradient-to-tr
                from-white/20
                to-transparent

                pointer-events-none
              "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
