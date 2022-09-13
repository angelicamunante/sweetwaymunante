import ItemDetail from './ItemDetail/ItemDetail'
import Data from '../Data/mockData';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';


const ItemDetailContainer = () => {
const { id } = useParams();
  const stock = 15;
  const handleOnAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} productos al carrito`);
  };
    const [producDetail, setProductDetail] = useState({});
    useEffect (() => {
        getItem.then((response) => {
            const product = response.find((product) => product.id === 1);
            setProductDetail(product);
        })
    },)

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            resolve(Data);
        }, 2000);
    });

    
    return (
        <div className="contenedorDetalle">
            <ItemDetail lista = {producDetail} />
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />   
        </div>
    )

}

export default ItemDetailContainer

// const ItemDetailContainer = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true)

//   const getProduct = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(Data.find((prod) => prod.id === 1))
//     }, 2000)
// })

//     useEffect(() => {
//       getProduct
//         .then((resp) => setData(resp))
//         .catch(error => console.log(error))
//         .finally(() => setLoading(false))
// });


//   return (
//     <>

//     {
//         loading ? <span>Cargando...</span> :
//             <ItemDetail item={data}></ItemDetail>
//     }

// </>
// )
// }

// export default ItemDetailContainer;
