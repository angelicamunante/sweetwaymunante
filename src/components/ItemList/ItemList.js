import Item from "../Item/Item"
const ItemList = ({productos}) => {
  return (
    <>
        {
            productos.map((producto) =><Item data={producto} /> )
        }
    </>
  )
}


export default ItemList