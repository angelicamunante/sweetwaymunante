import './ItemListContainer.css'
import getFetch from '../Data/mockData';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch
        .then((resp)=>setData(resp))
        .catch((err)=>setData(err))
        .finally(()=>setLoading(false))
    },[])


    return (
        <>
            <h2 className="texto">{greeting}</h2>
            {
                loading ? <span>Cargando...</span> :
                    <ItemList productos={data}></ItemList>
            }

        </>
    )
};

export default ItemListContainer;