import React from 'react'
import { NavLink } from 'react-router-dom'
import AnimatedUnderline from './AnimatedUnderline'
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between items-center gap-x-8 mb-4 mx-6 mt-[2rem]'>
      <div className='flex justify-center items-center gap-x-8 mb-4 mx-6'>

        <NavLink
          className={(e) =>
            e.isActive ? "activeLink" : "nonActiveLink"
          }
          to={"/"}
        >
          <AnimatedUnderline text="home" />
        </NavLink>

        <NavLink
          className={(e) =>
            e.isActive ? "activeLink" : "nonActiveLink"
          }
          to={"/issues"}
        >
          <AnimatedUnderline text="issues" />
        </NavLink>

        <NavLink
          className={(e) =>
            e.isActive ? "activeLink" : "nonActiveLink"
          }
          to={"/masthead"}
        >
          <AnimatedUnderline text="masthead" />
        </NavLink>

        <NavLink
          className={(e) =>
            e.isActive ? "activeLink" : "nonActiveLink"
          }
          to={"/contact"}
        >
          <AnimatedUnderline text="contact" />
        </NavLink>
        

      </div>
        <ThemeChanger />
      </nav>
    </>
  )
}

export default Navbar