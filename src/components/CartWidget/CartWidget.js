import { Link } from 'react-router-dom';
import imgCarrito from '../../img/carrito.png'
import {useCartContext} from "../../Context/Cartcontext"
import './CartWidget.css'

// const CartWidget = () => {
//     return <Link to={'/cart'}><img src={imgCarrito} alt="carrito" className='carritoImg'></img></Link>
// };

function CartWidget() {
    const { totalListas } = useCartContext();
    return (
     <>
      <Link to={'/cart'}><img src={imgCarrito} alt="carrito" className='carritoImg'></img></Link>
      <span className="totalItem"> { totalListas() || ''}</span>
     </>
    );
  }

export default CartWidget;