import logo from '../../img/Logo.png';
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="inicio">
            <NavLink to={"/"}>
                <img src={logo} className="logo" alt="logo" />
            </NavLink>

            <ul>
                <li className="lista"><NavLink to={"/"}>Inicio</NavLink></li>
                <li className="lista"><NavLink to={"/productos"}>Productos</NavLink></li>   
                <li className="lista"><NavLink to={"/category/tortas"}>Tortas</NavLink></li> 
                <li className="lista"><NavLink to={"/category/bocaditos"}>Bocaditos</NavLink></li>        
            </ul>
            <button className="botonSesion">Inicia sesion</button>
            <CartWidget/>
        </div>
    )
}

export default NavBar;