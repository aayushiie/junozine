import React from 'react'
import { NavLink } from 'react-router-dom'
import AnimatedUnderline from './AnimatedUnderline'
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  return (
    <>
      <nav
        className="
            flex
            justify-between
            items-center
            gap-x-4
            md:gap-x-8
            mb-4
            px-4
            md:px-6
            mt-[1.2rem]
            md:mt-[2rem]
          ">
        <div
          className="
            flex
            items-center
            gap-x-4
            md:gap-x-8
            min-w-0
          ">

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
            to={"/events"}
          >
            <AnimatedUnderline text="events" />
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
        <div className="shrink-0">
          <ThemeChanger />
        </div>
      </nav>
    </>
  )
}

export default Navbar