import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addProductCart } from "../../redux/cart/cartSlice";

import axios from "axios";
import { nanoid } from "nanoid";

import RelatedProducts from "./RelatedProducts/";
import ProductCarousel from "../Carousel/Carousel";

import { fetchDataFromApi } from "../../utils/api";
import { getDiscountPrice } from "../../utils/help";
import SkeletonCategory from "./SkeletonCategory";

import "./SingleProduct.scss";

const SingleProduct = () => {
  const [items, setItems] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  // const [quantity, setQuantity] = React.useState(1);
  const [addCartInfo, setAddCartInfo] = React.useState(false);
  const dispatch = useDispatch();

  // Получаем из параметров запроса id элемента
  // которые передается при клике по карточке товара
  const { id } = useParams();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  React.useEffect(() => {
    fetchSingleProduct();
  }, []);

  const fetchSingleProduct = async () => {
    try {
      fetchDataFromApi(
        `/api/products?populate=*&[filters][slug][$eq]=${id}`
      ).then((res) => setItems(res), setIsLoading(false));
    } catch (error) {
      console.log("Single Product: ", error);
    }
  };

  // что бы не было ошибки 0 элементов проверяем есть ли что-то в items если нет возвращаем пустое значание
  if (!items) return <></>;
  const p = items?.data[0]?.attributes;

  const addToCard = () => {
    const item = {
      id: id,
      title: p.title,
      imageUrl:
        process.env.REACT_APP_API_URL +
        p?.image_front?.data?.[0]?.attributes?.url,
      price: {
        oldPrice: p.old_price,
        newPrice: p.price,
      },
    };
    dispatch(addProductCart(item));
    showItemAdd(); // Запуск функции всплывающие окно что продукт добавлен
  };

  // Функция запускается при добавлении пиццы
  const showItemAdd = () => {
    setAddCartInfo(true);
    setTimeout(() => setAddCartInfo(false), 3000);
  };

  return (
    <div className={`product`}>
      <div className="container">
        <div className="product-wrapper">
          {isLoading ? (
            <SkeletonCategory key={nanoid()} />
          ) : (
            <>
              <div className="product-wrapper_item">
                <div className="product-image">
                  <ProductCarousel image={{ ...p }} />
                  <div className="product-image__discout">
                    {p?.old_price &&
                      getDiscountPrice(p?.price, p?.old_price) + " %"}
                  </div>
                </div>
                <div className="product-text">
                  <div className="product-text__title">{p?.title}</div>
                  <div className="product-text__price">
                    <div className="new">
                      {p?.price.toLocaleString("ru-RU") + " "}
                      &#8381;
                    </div>
                    <div className="old">
                      {p?.old_price &&
                        p?.old_price.toLocaleString("ru-RU") + " ₽"}
                    </div>
                  </div>
                  <div className="product-btn__contorls">
                    <button
                      className="controls-btn"
                      onClick={() => addToCard()}
                    >
                      В корзину
                    </button>
                  </div>
                  <div className="product-text__description">
                    <span>Описание:</span>
                    {p?.description}
                  </div>
                </div>
              </div>
              <RelatedProducts />
            </>
          )}
          {addCartInfo && (
            <div className={`fixed-cart__add ${addCartInfo ? "show" : ""}`}>
              <p>Добавлено:</p>
              <span>{p.title}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
