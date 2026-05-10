import React, { useState, useEffect } from "react"
import faqlight from "../assets/svg/faq-light.svg"
import faqdark from "../assets/svg/faq-dark.svg"

import {
  AnimatePresence,
  motion,
} from "framer-motion"

import {
  Plus,
  Minus,
} from "lucide-react"

const faqs = [
  {
    question:
      "Who can contribute?",

    answer:
      "Students, artists, researchers, writers, designers, developers, anyone who identifies as a woman or gender-expansive person is welcome to contribute.",
  },

  {
    question:
      "What kind of work do you publish?",

    answer:
      "We publish essays, poetry, short fiction, visual art, photography, research-inspired pieces, personal reflections, interviews, and experimental work that blends disciplines and aligns with the theme of our issue.",
  },

  {
    question:
      "Is Juno only for people in STEM?",

    answer:
      "For now, yes. Juno was created to build a creative space specifically for people in STEM. We started it to highlight the artistic work of people whose creativity often exists alongside technical disciplines.",
  },

  {
    question:
      "Can I submit more than one piece?",

    answer:
      "Yes, you may submit multiple works. Please send each submission in a separate email so we can review every piece individually.",
  },

  {
    question:
      "Previously published work?",

    answer:
      "At the moment, we prefer unpublished work unless stated otherwise.",
  },

  {
    question:
      "What rights do contributors retain?",

    answer:
      "Creators retain ownership of their work. By submitting, you grant Juno permission to publish your piece in our issue and promote it with proper credit.",
  },
]

export default function QnA() {
  const [active, setActive] =
    useState(null)

  const toggleFAQ = (index) => {
    setActive(
      active === index ? null : index
    )
  }

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
    <>
      {/* HEADING */}
      <div className="
        px-6
        md:px-12
        pb-4
        my-10
        md:my-14
        text-center
        relative">

        <img
            src={`${isDark ? faqdark : faqlight}`}
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
          FAQ
        </h1>
      </div>
    
    <section
      className="
        min-h-screen
        mx-10
        px-6
        md:px-12
        py-24
        rounded-3xl
        bg-[var(--bg)]
      "
    >
      

      {/* FAQ LIST */}
      <div
        className="
          max-w-5xl
          mx-auto
        "
      >
        {faqs.map((faq, index) => {
          const isOpen =
            active === index

          return (
            <div
              key={index}
              className="
                border-b
                border-[#d9d1f1]
              "
            >
              {/* QUESTION */}
              <button
                onClick={() =>
                  toggleFAQ(index)
                }
                className="
                  w-full

                  flex
                  items-center
                  justify-between

                  gap-8

                  py-8

                  text-left

                  group
                "
              >
                <h2
                  className={`
                    montserrat-heading

                    text-[1.6rem]
                    md:text-[2.6rem]

                    leading-[1]

                    tracking-[-0.05em]

                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? "text-[var(--text)]"
                        : "text-[#8f88b8]"
                    }
                  `}
                >
                  {faq.question}
                </h2>

                <div
                  className="
                    shrink-0

                    text-[#8f88b8]

                    transition-transform
                    duration-300

                    group-hover:rotate-90
                  "
                >
                  {isOpen ? (
                    <Minus
                      size={24}
                      strokeWidth={1.5}
                    />
                  ) : (
                    <Plus
                      size={24}
                      strokeWidth={1.5}
                    />
                  )}
                </div>
              </button>

              {/* ANSWER */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}

                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}

                    exit={{
                      height: 0,
                      opacity: 0,
                    }}

                    transition={{
                      duration: 0.45,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}

                    className="
                      overflow-hidden
                    "
                  >
                    <motion.div
                      initial={{
                        y: 20,
                      }}

                      animate={{
                        y: 0,
                      }}

                      exit={{
                        y: -10,
                      }}

                      transition={{
                        duration: 0.4,
                      }}

                      className="
                        pb-8
                        pr-12
                        md:pr-24
                      "
                    >
                      <p
                        className="
                          roboto-italic

                          text-[var(--text)]

                          text-base
                          md:text-lg

                          leading-relaxed

                          max-w-3xl
                        "
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
    </>
  )
}