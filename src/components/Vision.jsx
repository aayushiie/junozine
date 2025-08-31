import React from 'react'
import { Link } from 'react-router-dom'

const Vision = () => {
    return (
        <>
            {/* ABOUT US SECTION */}
            <div className='flex flex-col my-12 gap-y-8'>
                 <h1 className="montserrat-heading text-[12vw] leading-[1] text-center w-full uppercase inline-block align-bottom">
                    ABOUT US
                </h1>
                <div className='roboto-mono-text mx-4 mb-14'>
                    <p className='mx-8 md:mx-12 text-left md:text-center'>
                        Juno is a digital magazine made by girls and gender-expansive people in tech who were tired of choosing between being <i>“engineers”</i> or <i>“artists.”</i> We wanted a space where code could sit next to poetry, where debugging felt as creative as painting, where tech wasn't just logic but expression. So we made one. Juno is messy, loud, thoughtful, and full of heart—a patchwork of essays, poems, art, experiments, and stories stitched together on late-night desktops. With each issue, we bring the realities of working in tech with the creativity that keeps us human, creating space for people to share their stories and see themselves reflected. It's a community built on the belief that tech is human—and humans make art.
                    </p>
                   
                </div>
            </div>

            {/* ISSUE 01 SECTION */}
            <div className='flex flex-col bg-[#FF4C65] text-[#141414] my-12 justify-center items-center text-center md:text-left'>
                <h1 className="montserrat-heading text-[12vw] md:text-9xl uppercase pt-20 w-[90%] md:w-2/3">
                    ISSUE 01
                </h1>
                <h3 className='montserrat-heading text-[8vw] md:text-6xl uppercase w-[90%] md:w-2/3 pb-12'>
                    <span className='text-[9vw] md:text-7xl'>THEME: </span>FIRST LINES
                </h3>
                <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-14 pb-20 w-[90%] md:w-2/3 roboto-mono-text'>
                    <Link to={"/issues"}>Read about the theme</Link>
                    <Link to={"/submissionguidelines"}>Submission Guidelines</Link>
                </div>
            </div>
        </>
    )
}

export default Vision
