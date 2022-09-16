import "./ItemListContainer.css";
import Data from "../../components/Data/mockData";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });

    const filterData = (response) => {
      return response.filter(
        (data) => data.category.toLowerCase() === categoryName
      );
    };

    getProducts
      .then((response) => {
        const finalData = categoryName ? filterData(response) : response;
        setProductList(finalData);
      })
      .finally(() => setLoading(false));
  }, [categoryName]);

  return loading ? (
    <div className="cargando">
      <h1>Cargando...</h1>
    </div>
  ) : (
    <div className="ItemListContainer">
      <h1 className="titulo">{greeting}</h1>
      <br />
      <ItemList lista={productList} />
    </div>
  );
};

export default ItemListContainer;
