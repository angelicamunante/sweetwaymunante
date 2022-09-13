import logo from '../../img/Logo.png';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <Router>
    <div className="menu">
        <NavLink to={"./App.js"}>
            <img src={logo} className="logo" alt="logo" />
        </NavLink>

        <ul>
            <li className="lista"><NavLink to={"./App.js"}>Inicio</NavLink></li>
            <li className="lista"><NavLink to={"/productos"}>Productos</NavLink></li>   
            <li className="lista"><NavLink to={"/category/tortas"}>Tortas</NavLink></li> 
            <li className="lista"><NavLink to={"/category/bocaditos"}>Bocaditos</NavLink></li>        
        </ul>
        <button className="botonSesion">Inicia sesion</button>
        <CartWidget/>
    </div>
    </Router>
    )
}

export default NavBar;