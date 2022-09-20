import { Link } from 'react-router-dom';
import imgCarrito from '../../img/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return <Link to={'/cart'}><img src={imgCarrito} alt="carrito" className='carritoImg'></img></Link>
};

export default CartWidget;