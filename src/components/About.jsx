import React, {
  useLayoutEffect,
  useRef,
  useEffect,
  useState
} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import starlight from "../assets/svg/star-light.svg"
import stardark from "../assets/svg/star-dark.svg"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  const cards = [
    {
      title: "What is Juno",
      text:
        "Juno is a digital magazine made by girls and gender-expansive people in STEM who were tired of choosing between being “engineers” and “artists.” We wanted a space where code could exist with poetry, where tech wasn't just logic but expression. So we made one. Juno is messy, loud, thoughtful, and full of heart.",
    },

    {
      title: "Origin",
      text:
        "We didn't choose the name Juno because of Jason Reitman's film or Sabrina Carpenter's song (though we admire both here). Our inspiration comes from the Roman goddess Juno, a symbol of protection, vision, and strength. In ancient etymology, the name Juno was once associated with love, which has now evolved and shifted toward youth and vitality. For us, Juno represents a balance of something enduring, perceptive, and deeply human, which reflects the spirit of our magazine.",
    },

    {
      title: "Mission",
      text:
        "We want to build a community for students, artists, researchers, developers, writers, and anyone who is drawn toward thoughtful conversations around technology, identity, creativity, and the future. With each issue, we want to bring the realities of working in STEM with the creativity that keeps us human. This corner of the internet exists to celebrate art and all the artists in STEM.",
    },
  ]

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current

      const totalScroll =
        track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

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
  <section>

    {/* HEADING */}
    <div
      className="
        px-6
        md:px-12
        pb-4
        text-center
        relative
      "
    >

    {/* DOODLE */}
  <img
    src={`${isDark ? stardark : starlight}`}
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
        About Us
      </h1>
    </div>

    {/* HORIZONTAL SCROLL */}
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        overflow-hidden
      "
    >
      <div
        ref={trackRef}
        className="
          flex
          items-center
          gap-10
          md:gap-16
          h-screen
          px-[12vw]
          w-max
          will-change-transform
        "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              relative
              w-[78vw]
              md:w-[64vw]
              h-[72vh]
              md:h-[68vh]
              shrink-0
            "
          >
            {/* OUTSIDE NUMBER */}
            <div
              className="
                absolute
                left-[-4rem]
                bottom-9
                -translate-y-1/2
                -rotate-90
                text-[#9f96c0]
                text-[11px]
                md:text-sm
                tracking-[0.35em]
                roboto-mono-text
                whitespace-nowrap
                z-20
              "
            >
              0{index + 1} / 03
            </div>

            {/* CARD */}
            <div
              className="
                relative
                w-full
                h-full
                overflow-hidden
                border
                border-[#d9d1f1]
              "
              style={{
                background: `
                  linear-gradient(
                    135deg,
                    #f8f4ff 0%,
                    #f3edff 30%,
                    #ede5ff 65%,
                    #e8ddff 100%
                  )
                `,
                willChange: "transform",
              }}
            >
              {/* SOFT LIGHT */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-40
                "
                style={{
                  background: `
                    radial-gradient(
                      circle at top left,
                      rgba(255,255,255,0.9),
                      transparent 40%
                    )
                  `,
                }}
              />

              {/* CONTENT */}
              <div
                className="
                  relative
                  z-10
                  h-full

                  grid
                  grid-cols-1
                  md:grid-cols-[0.8fr_1.2fr]

                  px-8
                  md:px-16

                  py-10
                  md:py-14

                  gap-10
                  md:gap-16
                "
              >
                {/* LEFT COLUMN */}
                <div
                  className="
                    flex
                    items-start
                  "
                >
                  <h2
                    className="
                      montserrat-heading
                      text-[2.5rem]
                      md:text-[4rem]
                      leading-[0.9]
                      uppercase
                      tracking-[-0.07em]
                      text-[#3e1e68]
                      max-w-[320px]
                    "
                  >
                    {card.title}
                  </h2>
                </div>

                {/* RIGHT COLUMN */}
                <div
                  className="
                    flex
                    items-end
                  "
                >
                  <p
                    className="
                      roboto-italic
                      text-[#4c3b73]/90
                      text-[0.95rem]
                      md:text-[1.05rem]
                      leading-relaxed
                      max-w-[520px]
                    "
                  >
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  </section>
)
}