import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {
    const [items, setItems] = useState(initial);

    const sumar = () => { 
       setItems(items + 1);
    }
    const restar = () => {
        setItems(items - 1);
    }

    return (
        <>
            <div className="contadorContenedor">
            <div className="stockDisponible">
                    <p>{ stock > 1 ? `${ stock } unidades disponibles` : `${ stock } unidades disponibles` }</p>
            </div>
            <div className="contador"></div>
                <button className="sumar" disabled={ items >= stock } onClick={ sumar }>+</button>
                <h3 className="stock">{ items }</h3>
                <button className="resta" disabled={ items <= 1 } onClick={ restar }>-</button>
            </div>
            <div className="boton">                     
                <button className="agregarAlCarrito" disabled={ stock <1 } onClick={() => onAdd(items) }>Agregar Producto</button>
            </div>
            
        </>
    )
}

export default ItemCount;
