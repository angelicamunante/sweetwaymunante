import { useState } from "react";
import './ItemCount.css';

const ItemCount = () => {
    const stock = 10;

    const [items, setItems] = useState(0);

    const sumar = () => items <= stock - 1 ? setItems(items + 1) : alert('Este es el limite de stock.')
    const restar = () => items > 0 ? setItems(items - 1) : alert('No se puede números negativos.')

    return (
        <>
            <div className="contenedor-items">
                <div className="texto">Tengo {items} items.</div>
                <button className="boton" onClick={sumar}>+</button>
                <button className="boton" onClick={restar}>-</button>
                <p className="texto">Stock {stock}</p>
            </div>

        </>
    )
}

export default ItemCount;
