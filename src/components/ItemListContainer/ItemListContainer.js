import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import Data from '../Data/mockData';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]);
    useEffect (() => {
        getProducts.then((response) => {
            setProductList(response);
        })
    },)

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Data);
        }, 2000);
    });

    return (
        <>
            <h2 className="texto">{greeting}</h2>
            <ItemList lista = {productList}/>
            <ItemCount />
        </>
    )
};

export default ItemListContainer;