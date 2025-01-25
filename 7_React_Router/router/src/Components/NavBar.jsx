import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
        <NavLink to={"/"} className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to={"/contact"} className={({isActive}) => (isActive ? "active" : "")}>Contato</NavLink>
       
    </div>
  )
}

export default NavBar