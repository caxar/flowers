import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addProductCart } from "../../../redux/cart/cartSlice";
import {
  addProductFavourites,
  removeProductFavourites,
} from "../../../redux/fav/favSlice";

import { getDiscountPrice } from "../../../utils/help";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Product.scss";

const Product = ({ data }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const p = data?.attributes;
  const slug = p?.slug;
  const dispatch = useDispatch();

  // Используем useNavigate что бы вывести при клике на определенный объект
  // вывести id в url
  const navigate = useNavigate();

  const addToCard = () => {
    const item = {
      id: data?.id,
      title: p?.title,
      imageUrl:
        process.env.REACT_APP_API_URL +
        p?.image_front?.data[0]?.attributes?.url,
      price: {
        oldPrice: p?.old_price,
        newPrice: p?.price,
      },
    };
    dispatch(addProductCart(item));
  };

  const addToFavourites = () => {
    const item = {
      id: data?.id,
      title: p?.title,
      imageUrl:
        process.env.REACT_APP_API_URL +
        p?.image_front?.data[0]?.attributes?.url,
      price: {
        oldPrice: p?.old_price,
        newPrice: p?.price,
      },
      slug: slug,
    };
    dispatch(addProductFavourites(item));
    setIsChecked(true);
  };

  const removeFromFavourites = () => {
    dispatch(removeProductFavourites(data.id));
    setIsChecked(false);
  };

  return (
    <div className="product-cart">
      <div className="cart-image" onClick={() => navigate(`/product/${slug}`)}>
        <img
          src={
            process.env.REACT_APP_API_URL +
            p?.image_front?.data[0]?.attributes?.url
          }
          alt={p.title}
        />
      </div>
      <div
        className="product-cart__title"
        onClick={() => navigate(`/product/${slug}`)}
      >
        {p?.title}
      </div>
      <div className="cart-bottom">
        <div className="cart-price">
          <div className="cart-price__main">
            {p.price.toLocaleString("ru-RU") + " "}
            &#8381;
          </div>
          <div className="cart-price__old">
            {p?.old_price && p?.old_price.toLocaleString("ru-RU") + " ₽"}
          </div>
        </div>
        <button className="cart-btn" onClick={() => addToCard()}>
          В корзину
        </button>
      </div>
      <div className="product-cart__discount">
        {p.old_price && getDiscountPrice(p.price, p.old_price) + " %"}
      </div>
      <div
        className={`product-cart__fav ${isChecked ? "checked" : ""}`}
        onClick={
          !isChecked ? () => addToFavourites() : () => removeFromFavourites()
        }
      >
        {/* <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg> */}
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.051 45.6071L17.851 54.7401C17.2728 55.1729 16.5856 55.4363 15.8662 55.5008C15.1468 55.5652 14.4237 55.4282 13.7778 55.1049C13.1319 54.7817 12.5887 54.2851 12.209 53.6707C11.8293 53.0563 11.6281 52.3483 11.628 51.626V15.306C11.628 13.2423 12.4477 11.2631 13.9069 9.8037C15.3661 8.34432 17.3452 7.52431 19.409 7.52405H45.35C47.4137 7.52431 49.3929 8.34432 50.8521 9.8037C52.3112 11.2631 53.131 13.2423 53.131 15.306V51.625C53.1309 52.3473 52.9297 53.0553 52.55 53.6697C52.1703 54.2841 51.6271 54.7807 50.9812 55.1039C50.3353 55.4272 49.6122 55.5642 48.8928 55.4998C48.1734 55.4353 47.4862 55.1719 46.908 54.739L34.715 45.6071C34.0419 45.1031 33.2238 44.8308 32.383 44.8308C31.5422 44.8308 30.724 45.1031 30.051 45.6071V45.6071Z"
            stroke="#426AB2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="fav-title">
          {isChecked ? "Убрать из избранного" : "Добавить в избранное"}
        </div>
      </div>
    </div>
  );
};

export default Product;
