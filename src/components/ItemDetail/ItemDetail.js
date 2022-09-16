import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ lista}) => {

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} unidades`)
    }

    return (

        <div className="descripcion">
            <img src={lista.img} alt={lista.title} className="imagenesPostres" />
            <h4 className="titulo">{lista.title}</h4>
            <h2 className="detalle">Categoria: {lista.category}</h2>
            <p>{lista.description}</p>
            <p>Precio: S/. {lista.price}</p>
            <div className="contadorDetail">
                <ItemCount initial={ 1 } stock={ lista.stock } onAdd={ onAdd } />
            </div>
        </div>
    )
}

export default ItemDetail