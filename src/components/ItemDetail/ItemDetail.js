import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const ItemDetail = ({ lista}) => {

    const [irAlCart, setIrAlCart] = useState(false)

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} unidades`)
        console.log(`Compraste ${cantidad} ${lista.title}`)
        setIrAlCart(true)
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
                irAlCart
                ? <Link className="terminarCompra" to="/Cart">Terminar Compra</Link>
                : <ItemCount initial={ 1 } stock={ lista.stock } onAdd={ onAdd } />
            }
            </div>
        </div>
    )
}

export default ItemDetail