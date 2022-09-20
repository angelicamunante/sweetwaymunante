import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import  { useCartContext } from '../../Context/Cartcontext';


const ItemDetail = ({ lista}) => {
    const [ goToCart, setGoToCart ] = useState( false );
    const {addItem} = useCartContext();

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} ${lista.title}`)
        setGoToCart( true );
        addItem( { lista }, cantidad );
    }
    

    return (

        <div className="descripcion">
            <img src={lista.img} alt={lista.title} className="imagenesPostres" />
            <h4 className="titulo">{lista.title}</h4>
            <h2 className="detalle">Categoria: {lista.category}</h2>
            <p>{lista.description}</p>
            <p>Precio: S/. {lista.price}</p>
            <div className="contadorDetail">
            {
                goToCart
                ? <Link className="terminarCompra" to="/Cart">Terminar Compra</Link>
                : <ItemCount initial={ 1 } stock={ lista.stock } onAdd={ onAdd } />
            }
            </div>
        </div>
    )
}

export default ItemDetail