import "./ItemListContainer.css";
// import Data from "../../components/Data/mockData";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  const [productList, setProductList] = useState([]);

    const getProducts = () => {
      const db = getFirestore();
      const querySnapshot = collection(db, "items");
      if(categoryName){
          const queryFiltered = query(querySnapshot, where("categoryName", "==",categoryName))
          getDocs(queryFiltered).then((response) => {
              console.log(response.docs);
              const data = response.docs.map((products) => {
                  return {id: products.id, ...products.data()}
              })
              setProductList(data);
          })
      }else{
          getDocs(querySnapshot).then((response) => {
              console.log(response.docs);
              const data = response.docs.map((products) => {
                  return {id: products.id, ...products.data()}
              })
              setProductList(data);
          })
        }
    }

    useEffect(() => {
      getProducts();
    },[categoryName]);    

  return (
    <div className="ItemListContainer">
      <h1 className="titulo">{greeting}</h1>
      <br />
      <ItemList lista={productList} />
    </div>
  );
};

export default ItemListContainer;
