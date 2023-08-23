import React from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";

import { fetchDataFromApi } from "../../../utils/api";
import Product from "../../Products/Product";
import SkeletonCatalogProduct from "./SkeletonCatalogProduct";

import img from "../../../assets/logo1.png";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./CatalogProduct.scss";

const maxResult = 6;

const CatalogProduct = () => {
  const [catalogProduct, setCatalogProduct] = React.useState([]);
  const [slugCatalog, setSlugCatalog] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // Получаем из get параметра id активного slug
  const { id } = useParams();

  React.useEffect(() => {
    getCatalogSlug();
    getCatalogProducts();
  }, [id]);

  // Получаем slug каталога категории /Гортензии или Розы
  const getCatalogSlug = async () => {
    await fetchDataFromApi(
      `/api/catalogs?populate=*&filters[slug][$eq]=${id}`
    ).then((res) => setSlugCatalog(res));
  };

  // Получаем все поодукты которые находяться в определенной категории каталога
  const getCatalogProducts = async () => {
    await fetchDataFromApi(
      `/api/products?populate=*&filters[catalogs][slug][$eq]=${id}`
    ).then((res) => (setCatalogProduct(res), setIsLoading(false)));
  };

  // что бы не было ошибки 0 элементов проверяем есть ли что-то в items если нет возвращаем пустое значание
  if (!slugCatalog) return <></>;
  if (!catalogProduct) return <></>;

  const slugNameCatalog = slugCatalog?.data?.[0]?.attributes?.title;

  return (
    <div className="catalog-product">
      <div className="container">
        <div className="catalog-product__title">{slugNameCatalog}</div>
        <div className="catalog-product__wrapper">
          <div className="catalog-product__block">
            {isLoading
              ? [...new Array(4)].map(() => (
                  <SkeletonCatalogProduct key={nanoid()} />
                ))
              : catalogProduct?.data?.map((item) => (
                  <Product key={item?.id} data={item} />
                ))}
          </div>
        </div>
        <div className="catalog-description">
          <div className="description-title">
            {isLoading ? (
              <Skeleton />
            ) : (
              `Купить букет ${slugNameCatalog} в Севастополе`
            )}
          </div>
          <div className="description-text">
            {isLoading ? (
              <Skeleton count={5} />
            ) : (
              slugCatalog?.data?.[0]?.attributes?.description_catalog
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogProduct;
