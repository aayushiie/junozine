import {
  motion,
  useMotionValue,
  useSpring
} from "framer-motion"

import {
  useEffect,
  useState
} from "react"

export default function InteractiveGradient() {

  const [isDark, setIsDark] = useState(false)

  // MOUSE
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // SMOOTH MOTION
  const smoothX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
  })

  // DETECT THEME
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


  // MOUSE TRACKING
  useEffect(() => {

    const handleMouseMove = (e) => {

      const {
        innerWidth,
        innerHeight
      } = window

      const x =
        e.clientX - innerWidth / 2

      const y =
        e.clientY - innerHeight / 2

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove
    )

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      )
    }

  }, [])


  return (

    <div
      className="
        fixed
        inset-0
        overflow-hidden
        pointer-events-none
        z-0
      "
    >

      {/* BASE GRADIENT */}
      <div
        className="
          absolute
          inset-0
          transition-all
          duration-700
        "
        style={{
          background: isDark
            ? `
              radial-gradient(
                circle at top left,
                #161218 0%,
                #0d0b10 45%,
                #050507 100%
              )
            `
            : `
              linear-gradient(
                135deg,
                #f5ecff,
                #efe3ff,
                #f8f6f3
              )
            `
        }}
      />


      {/* BLOB 1 */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          background: isDark
            ? "rgba(220,210,255,0.12)"
            : "#3e1e68"
        }}
        className="
          absolute
          top-[10%]
          left-[15%]
          w-[40vw]
          h-[40vw]
          rounded-full
          opacity-25
          blur-[120px]
        "
      />


      {/* BLOB 2 */}
      <motion.div
        style={{
          x: smoothX.get() * -0.3,
          y: smoothY.get() * -0.3,
          background: isDark
            ? "rgba(190,220,255,0.08)"
            : "#c084fc"
        }}
        className="
          absolute
          bottom-[10%]
          right-[10%]
          w-[35vw]
          h-[35vw]
          rounded-full
          opacity-25
          blur-[120px]
        "
      />


      {/* BLOB 3 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[35%]
          left-[40%]
          w-[30vw]
          h-[30vw]
          rounded-full
          opacity-20
          blur-[100px]
        "
        style={{
          background: isDark
            ? "rgba(235,225,255,0.08)"
            : "#3e1e68"
        }}
      />


      {/* GRAIN */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

    </div>
  )
}