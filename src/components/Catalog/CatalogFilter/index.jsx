import React from "react";
import { useParams, useLocation } from "react-router-dom";

import { fetchDataFromApi } from "../../../utils/api";
import Product from "../../Products/Product/index";
import SkeletonCatalogProduct from "../CatalogProduct/SkeletonCatalogProduct";
import { nanoid } from "nanoid";

import "./CatalogFilter.scss";

const CatalogFilter = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const { filterId } = useParams();
  const { state } = useLocation();
  const { from, to } = state;

  React.useEffect(() => {
    fetchFilterProduct();
  }, []);

  const fetchFilterProduct = async () => {
    try {
      fetchDataFromApi(
        `/api/products?populate=*&filters[price][$between]=${from}&filters[price][$between]=${to}&sort[price]=asc`
      ).then((res) => setItems(res), setIsLoading(false));
    } catch (error) {
      console.log("Single Product: ", error);
    }
  };

  console.log(items);

  return (
    <div className="filter">
      <div className="container">
        <div className="filter-title">
          Цветы от {from} до {to} рублей
        </div>
        <div className="filter-wrapper">
          {isLoading
            ? [...new Array(4)].map(() => (
                <SkeletonCatalogProduct key={nanoid()} />
              ))
            : items?.data?.map((item) => <Product key={item.id} data={item} />)}
        </div>
        {/* &filters[price][$gt]=3000&&filters[price][$lte]=9000 */}
      </div>
    </div>
  );
};

export default CatalogFilter;
