import React from 'react';
import {useCartContext} from '../../Context/Cartcontext'
import './ItemCart.css'

const ItemCart = ({item}) => {

    const {removeItem} = useCartContext();

    return (
        <div className="cartContenedor">
            <div className="cartItem">

                <div className="listaCart">
                    <img src={ item.img } alt={ item.title} style={{width: '100%'}} />
                </div>
                <div className="listaDescripcion">
                    <p>Producto:</p>
                    <p>Cantidad:</p>
                    <p>Precio:</p>
                    <p>Subtotal:</p>
                </div>
                <div className="listaItem">
                    <p>{item.title}</p>
                    <p>{item.quantity}</p>
                    <p>S/. {item.price}</p>
                    <p>S/. {item.quantity * item.price}</p>
                </div>
                <div className="delete"> 
                    <img onClick={() => removeItem(item.id)}src={ require (`../../assets/delete.png`) } alt="delete" />
                </div>
            </div>
        </div>
    )
}

export default ItemCart;