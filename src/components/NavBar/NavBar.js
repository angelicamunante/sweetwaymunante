import React from "react";
import logo from '../../img/Logo.png'
import './NavBar.css'

const NavBar = () => {
  return (

    <nav className="Contenedor-navbar">
      <a href="#">
        <img className="Logo" src={logo} alt="logo"></img>
      </a>
      <ul className="Enlaces-menu">
        <li><a href="#"></a>HOME</li>
        <li><a href="#"></a>PRODUCTOS</li>
        <li><a href="#"></a>CONTACTO</li>
      </ul>
      <button className="Ham" type="button">
        <spna className="br-1"></spna>
        <spna className="br-2"></spna>
        <spna className="br-3"></spna>
      </button>
    </nav>

  )
}

export default NavBar;
