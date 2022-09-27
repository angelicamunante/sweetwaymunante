import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Data from '../../components/Data/mockData';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [producDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    
    useEffect(() => {
        setLoading(true);
        const getItems = new Promise((resolve) =>{
            setTimeout(() => {
                const myData = Data.find((product) => product.id === id);
                resolve(myData); 
            }, 2000);
        });

        getItems.then((res) => 
        setProductDetail(res));
        setLoading(false);
    }, [])


    return loading ? 
    <div>
        <h1>Cargando...</h1>            
    </div> :

    (
        <>
          <ItemDetail product = {producDetail} />
        </>
    );
};
export default ItemDetailContainer