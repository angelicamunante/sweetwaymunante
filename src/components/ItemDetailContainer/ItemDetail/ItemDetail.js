import "./ItemDetail.css"

const ItemDetail = ({ lista }) => {
    return (
        <div className="descripcion">
            <p><b>{lista.title}</b></p>
            <p>{lista.description}</p>
            <img src={lista.img} alt={lista.title} className="imagenesPostres" />
            <p>S/. {lista.price}</p>
        </div>
    )
}

export default ItemDetail