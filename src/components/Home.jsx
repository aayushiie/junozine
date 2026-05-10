import React, { useEffect, useRef, useState } from 'react'
import Vision from './Vision'
import Footer from './Footer'
import About from './About'
import logolight from "../assets/images/logolight.png"
import logodark from "../assets/images/logodark.png"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

const Home = () => {

  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const comp = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out"
        }
      })

      // Title Animation
      tl.from(titleRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.2
      })

      // Logo Animation
      tl.from(imageRef.current, {
        scale: 0.6,
        rotate: -12,
        opacity: 0,
        duration: 1
      }, "-=0.9")

      // Description Animation
      tl.from(textRef.current, {
        x: 60,
        opacity: 0,
        duration: 1.1
      }, "-=0.8")

    }, comp)

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
    <>
      <div ref={comp}>
        <section className="
          min-h-screen
          flex
          flex-col
          justify-center
          mx-6">

          <header
            className="
            w-full
            flex
            justify-center
            items-center
            overflow-hidden
            mt-6
          "
          >

            <h1
              ref={titleRef}
              className="
              montserrat-heading
              text-[14vw]
              sm:text-[16vw]
              md:text-[18vw]
              leading-[1]
              tracking-[-0.08em]
              uppercase
              text-[color:var(--text)]
            "
            >
              JU
            </h1>


            <img
              ref={imageRef}
              src={`${isDark ? logodark : logolight}`}
              alt="Juno Logo"
              className="
              w-[16vw]
              min-w-[120px]
              max-w-[240px]
              rotate-[-8deg]
              rounded-[24px]
              object-cover
              mx-[-1vw]
              z-20
            "
            />


            <h1
              className="
              montserrat-heading
              text-[14vw]
              sm:text-[16vw]
              md:text-[18vw]
              leading-[1]
              tracking-[-0.08em]
              uppercase
              text-[color:var(--text)]
            "
            >
              NO
            </h1>

          </header>


          <main
            className="
            flex-1
            flex
            justify-start
            items-center
            mx-4
            md:mx-8
    ">

            <div
              ref={textRef}
              className="
              w-full
              md:w-1/3
              roboto-italic
              md:text-left
              text-[color:var(--text)]
            "
            >

              <p className="text-base md:text-lg leading-relaxed m-0">
                A digital magazine by girls and gender-expansive
                people in STEM, celebrating the intersection
                of art and technology.
              </p>

            </div>
          </main>

        </section>
      </div>
      <About />
      <Vision />
      <Footer />
    </>
  )
}

export default Home