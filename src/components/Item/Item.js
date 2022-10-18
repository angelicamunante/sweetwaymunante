import React from "react"
import './Item.css'

const Item = ({ title, price, img }) => {
  return (
      <div className="postres">
        <img width="300" src={img} alt="foto" className="imagenesPostres" />
        <h2>{title}</h2>
        <h3>Precio: S/. {price}</h3>
      </div>
  )
}


export default Item