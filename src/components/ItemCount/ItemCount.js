import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [items, setItems] = useState(initial);

    const sumar = () => items <= stock - 1 ? setItems(items + 1) : alert('Este es el limite de stock.')
    const restar = () => items > 0 ? setItems(items - 1) : alert('No se puede números negativos.')
    const handleOnAdd = () => {
        if (items <= stock) onAdd(items);
      };

    return (
        <>
            <div className="contenedor-items">
                <div className="texto">Tengo {items} items.</div>
                <button className="boton" onClick={sumar}>+</button>
                <button className="boton" onClick={restar}>-</button>
                <p className="texto">Stock {stock}</p>
            </div>
            <button onClick={handleOnAdd}>Agregar al carrito</button>

        </>
    )
}

export default ItemCount;
