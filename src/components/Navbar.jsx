import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-center items-center gap-x-3 mb-4 mx-6'>
        <NavLink className={(e)=>{return e.isActive? "activeLink": "nonActiveLink"}} to={"/"}>home</NavLink>
        <NavLink className={(e)=>{return e.isActive? "activeLink": "nonActiveLink"}} to={"/issues"}>issues</NavLink>
        <NavLink className={(e)=>{return e.isActive? "activeLink": "nonActiveLink"}} to={"/masthead"}>masthead</NavLink>
        <NavLink className={(e)=>{return e.isActive? "activeLink": "nonActiveLink"}} to={"/contact"}>contact</NavLink>
      </nav>
    </>
  )
}

export default Navbar
