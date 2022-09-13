import Item from "../Item/Item"
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";

const ItemList = ({lista}) => {
  return (
    <Router>
    <div>
    {
        lista.map((product) =>(
            <Link 
            key={ product.id }
            to={"/detalles/" + product.id }
            >
                <Item 
                    nombre = {product.title} 
                    precio = {product.price} 
                    imagen = {product.img} 
                    categoria = {product.category}
                />
            </Link>
        ))
    }
</div>
</Router>

)
}

export default ItemList