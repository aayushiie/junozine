import React from 'react'
import AnimatedUnderline from './AnimatedUnderline'

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        
        <h2 className="montserrat-heading md:text-[8vw] lg:text-[8vw] text-4xl leading-[1] uppercase">
          GET IN TOUCH
        </h2>

        <p className="text-sm sm:text-base max-w-md sm:max-w-xl mt-4 mb-6">
          Contact us and we'll get back to you as soon as possible.
        </p>

        <div className="flex flex-wrap flex-col sm:flex-row gap-4 sm:gap-6 mt-4 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=junozine.magazine@gmail.com"
            target="_blank"
            className="montserrat-heading px-3 py-2 sm:px-4 sm:py-2 uppercase transition hover:text-green-800"
          >
                    <AnimatedUnderline text="email" />
          </a>
          <a
            href="https://www.instagram.com/juno.zine_?igsh=MTRlbzdnY3RvOWVzdg=="
            target="_blank"
            className="montserrat-heading px-3 py-2 sm:px-4 sm:py-2 uppercase transition hover:text-green-800"
          >
                    <AnimatedUnderline text="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/junozine"
            target="_blank"
            className="montserrat-heading px-3 py-2 sm:px-4 sm:py-2 uppercase transition hover:text-green-800"
          >
                    <AnimatedUnderline text="linkedin" />
          </a>
          <a
            href="https://www.threads.com/@juno.zine_"
            target="_blank"
            className="montserrat-heading px-3 py-2 sm:px-4 sm:py-2 uppercase transition hover:text-green-800"
          >
                    <AnimatedUnderline text="threads" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
