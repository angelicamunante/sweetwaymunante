import React from "react"
import './Item.css'

const Item = ({ title, price, img, stock, category }) => {
  return (

  <div className="postres">
      <h2>Categororia: {category}</h2>
      <img src={img} alt={title} className="imagenesPostres" />
      <h2>{title}</h2>
      <h3>S/. {price}</h3>
      <p>Stock {stock}</p>
      <button className="botonAgregar">Agregar al carrito</button>
    </div>
  )
}


export default Item