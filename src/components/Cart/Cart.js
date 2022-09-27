import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/Cartcontext';
import ItemCart from '../ItemCart/ItemCart';

function Cart(){
    const { cart, clearCart } = useCartContext();
    return (

        <>  
            { cart.length === 0 ? ( 
            
            <div className="cartVacio">
                <div className="mensajeCartVacio">
                    <p className="mensajeCarritoVacio">No hay ningun pedido en el carrito</p>
                    <Link to={'/productos'}><p className="cartaCart">Ir a Productos</p></Link>
                </div>
            </div>
            ) : (
            <div className="cartContenedor"> 
                <h1 className="carrritoCart">Orden</h1> 
                <div className="carrito">            
                    {
                        cart.map((item, index) => <ItemCart key={index} item={item} />)
                    }
                </div>
               
                <div className="total">
                    <div className="finalDeCompra">
                        <button className="vaciarCarrito" onClick={ clearCart  }>Vaciar carrito</button>
                        <button className="seguirComprando">
                            <Link className="seguirComprandoLink" to="/productos">Seguir comprando</Link>
                        </button>
                     </div>
                </div>
            </div>    
            )
            }
        </>
)
}
export default Cart;
