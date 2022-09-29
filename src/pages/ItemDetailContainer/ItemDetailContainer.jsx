import ItemDetail from '../../components/ItemDetail/ItemDetail'
// import Data from '../../components/Data/mockData';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [producDetail, setProductDetail] = useState({});
    const { id } = useParams();

    const getItems = () =>{
        const db = getFirestore();
        const queryDoc = doc(db,'items', id);
        getDoc(queryDoc).then((res) =>{
        setProductDetail({id: res.id, ...res.data()});
        }).catch((err) => console.log(err));
    }

    useEffect(() => {
        getItems();
    })

    return (
        <>
          <ItemDetail product = {producDetail} />
        </>
    )
}

export default ItemDetailContainer