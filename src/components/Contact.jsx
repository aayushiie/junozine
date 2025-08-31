import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        
        <h2 className="montserrat-heading md:text-[8vw] lg:text-[8vw] text-4xl leading-[1] uppercase">
          GET IN TOUCH
        </h2>

        <p className="text-sm sm:text-base text-white max-w-md sm:max-w-xl mt-4 mb-6">
          Contact us and we'll get back to you as soon as possible.
        </p>

        <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=junozine.magazine@gmail.com"
            target="_blank"
            className="roboto-mono-text text-[#FF4C65] border border-[#F8F8F8] px-3 py-2 sm:px-4 sm:py-2 uppercase hover:bg-[#FF4C65] hover:text-white transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/junozine/"
            target="_blank"
            className="roboto-mono-text text-[#FF4C65] border border-[#F8F8F8] px-3 py-2 sm:px-4 sm:py-2 uppercase hover:bg-[#FF4C65] hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/juno.zine_?igsh=MTRlbzdnY3RvOWVzdg=="
            target="_blank"
            className="roboto-mono-text text-[#FF4C65] border border-[#F8F8F8] px-3 py-2 sm:px-4 sm:py-2 uppercase hover:bg-[#FF4C65] hover:text-white transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
