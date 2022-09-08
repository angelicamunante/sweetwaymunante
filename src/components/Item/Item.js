const Item = ({data}) => {
  return (

    <div className="postres">
      <img height="400px" width="400px" src={data.img} alt="foto"/>
      <h2>{data.nombre}</h2>
      <h3>S/. {data.price}</h3>
      <p>Stock {data.stock}</p>
      <button className="botonAgregar">Agregar al carrito</button>
    </div>
  )
}

export default Item