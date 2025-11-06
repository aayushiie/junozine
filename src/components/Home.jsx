import React from 'react'
import Vision from './Vision'
import Footer from './Footer'
import mapImg from '../assets/images/map.png'

const Home = () => {
  return (
    <>
      <div className="mx-6">
        <header className="w-full flex justify-center items-end p-0 m-0 overflow-hidden 
                           h-[32vw] sm:h-[28vw] md:h-[26vw] mt-6 sm:mt-8 md:mt-0">
          <h1 className="montserrat-heading text-[24vw] sm:text-[26vw] md:text-[29vw] 
                         leading-[1] tracking-[2vw] text-center w-full uppercase inline-block align-bottom">
            JUNO
          </h1>
        </header>

        <main className="flex flex-col md:flex-row justify-between items-start 
                 mx-4 md:mx-8 mt-10 gap-10 md:gap-8 min-h-[calc(100vh-32vw)]">

          <div className="w-full md:w-1/2 flex items-start justify-start order-2 md:order-1">
            <img
              src={mapImg}
              alt="map"
              className="max-w-full h-auto object-contain align-top"
            />
          </div>

          <div className="w-full md:w-1/3 roboto-italic md:text-right order-1 md:order-2">
            <p className="text-base md:text-lg leading-relaxed m-0">
              A digital magazine by girls and gender-expansive people in STEM, celebrating the intersection of art and technology.
            </p>
          </div>
        </main>

      </div>

      <Vision />
      <Footer />
    </>
  )
}

export default Home
