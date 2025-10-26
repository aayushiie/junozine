import React from 'react'
import { Link } from 'react-router-dom';
import QnA from './QnA';

const Footer = () => {
    const date = new Date();

    return (
        <>
            <div className='flex flex-col md:flex-row justify-center md:gap-x-24 gap-y-12 mx-4 md:mx-8 my-12 items-start'>
                <QnA />
                
                <div className='flex flex-col w-full md:w-1/3 gap-y-4 justify-center my-4 md:my-8'>
                    <h3 className='montserrat-heading text-2xl md:text-3xl uppercase text-center md:text-left'>
                        Contact
                    </h3>
                    <div className='flex flex-col items-center md:items-start gap-y-2'>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=junozine.magazine@gmail.com" className='roboto-mono-text text-[#FF4C65]' target='_blank' rel="noreferrer">email</a>
                        <a href="https://www.linkedin.com/in/junozine/" className='roboto-mono-text text-[#FF4C65]' target='_blank' rel="noreferrer">linkedin</a>
                        <a href="https://www.instagram.com/juno.zine_?igsh=MTRlbzdnY3RvOWVzdg==" className='roboto-mono-text text-[#FF4C65]' target='_blank' rel="noreferrer">instagram</a>
                        <a href="https://www.threads.com/@juno.zine_" className='roboto-mono-text text-[#FF4C65]' target='_blank' rel="noreferrer">threads</a>
                    </div>
                </div>
            </div>

            <div className='roboto-mono-text text-center mb-6'>
                JUNO &copy; {date.getFullYear()}
            </div>
        </>
    )
}

export default Footer
