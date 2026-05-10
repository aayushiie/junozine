import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import QnA from './QnA';
import contactdark from "../assets/svg/contact-dark.svg"
import contactlight from "../assets/svg/contact-light.svg"
import AnimatedUnderline from './AnimatedUnderline'

const Footer = () => {
    const date = new Date();
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
            <QnA />
            <div className='flex flex-col justify-center items-center gap-y-8'>

                {/* HEADING */}
                <div className="
                    px-6
                    md:px-12
                    pb-4
                    mt-24
                    md:mt-28
                    text-center
                    relative">

                    <img
                        src={`${isDark ? contactdark : contactlight}`}
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
                        Contact
                    </h1>
                </div>

                <div className='flex justify-center items-center gap-x-6'>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=junozine.magazine@gmail.com" className='montserrat-heading hover:text-green-800' target='_blank' rel="noreferrer">
                        <AnimatedUnderline text="email" />
                    </a>
                    <a href="https://www.instagram.com/juno.zine_?igsh=MTRlbzdnY3RvOWVzdg==" className='montserrat-heading hover:text-green-800' target='_blank' rel="noreferrer">
                        <AnimatedUnderline text="instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/junozine" className='montserrat-heading hover:text-green-800' target='_blank' rel="noreferrer">
                        <AnimatedUnderline text="linkedin" />
                    </a>
                    <a href="https://www.threads.com/@juno.zine_" className='montserrat-heading hover:text-green-800' target='_blank' rel="noreferrer">
                        <AnimatedUnderline text="threads" />
                    </a>
                </div>

                <div className='roboto-mono-text text-center mb-6'>
                    JUNO MAGAZINE &copy; {date.getFullYear()}
                </div>
            </div>
        </>
    )
}

export default Footer
