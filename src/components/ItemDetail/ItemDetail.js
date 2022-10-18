import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import  { useCartContext } from '../../Context/Cartcontext';


const ItemDetail = ({product}) => {
    const [ goToCart, setGoToCart ] = useState( false );
    const {addItem} = useCartContext();

    const onAdd = (quantity => {
        console.log(`Agregaste ${quantity} ${product.title}`)
        setGoToCart( true );
        addItem( product, quantity );
    })

    return (

        <div className="descripcion">
            <img src={product.img} alt={product.title} className="imagenesPostres" />
            <h4 className="titulo">{product.title}</h4>
            <h2 className="detalle">Categoria: {product.categoryName}</h2>
            <p>{product.description}</p>
            <p>Precio: S/. {product.price}</p>
            <div className="contadorDetail">
            {
                goToCart
                ? <div className="bottons">
                    <Link className="terminarCompra" to="/Cart">Terminar Compra</Link>
                    <Link className="SeguirComprando" to="/productos">Seguir Comprando</Link>
                </div>
                : 
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            }
            </div>
        </div>
    )
}

export default ItemDetail