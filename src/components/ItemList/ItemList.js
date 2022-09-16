import Item from "../Item/Item"
import { NavLink } from "react-router-dom";
import './ItemList.css'

const ItemList = ({lista}) => {
  return (
    <div>
    {
        lista.map((product) =>(
            <NavLink to={"/detalles/" + product.id } key={ product.id }>
                <Item 
                    title = {product.title} 
                    price = {product.price} 
                    img = {product.img} 
                />
            </NavLink>
        ))
    }
    </div>
    )
}

export default ItemList