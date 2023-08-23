import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removeProductFavourites } from "../../../redux/fav/favSlice";

import { getDiscountPrice } from "../../../utils/help";

import "./FavProduct.scss";

const FavProduct = ({ data }) => {
  const p = data;
  const slug = p.slug;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  console.log(data);

  return (
    <div className="fav-cart">
      <div className="cart-image" onClick={() => navigate(`/product/${slug}`)}>
        <img
          src={
            p.imageUrl
            //     process.env.REACT_APP_API_URL +
            //     p?.image_front?.data[0]?.attributes?.url
          }
          alt={p.title}
        />
      </div>
      <div
        className="fav-cart__title"
        onClick={() => navigate(`/product/${slug}`)}
      >
        {p.title}
      </div>
      <div className="cart-bottom">
        <div className="cart-price">
          <div className="cart-price__main">
            {p.price.newPrice.toLocaleString("ru-RU") + " "}
            &#8381;
          </div>
          <div className="cart-price__old">
            {p.price.oldPrice &&
              p.price.oldPrice.toLocaleString("ru-RU") + " ₽"}
          </div>
        </div>
        <button className="cart-btn" onClick={() => ""}>
          В корзину
        </button>
      </div>
      <div className="fav-cart__discount">
        {p.price.oldPrice &&
          getDiscountPrice(p.price.newPrice, p.price.oldPrice) + " %"}
      </div>
      <div
        className="fav-cart__fav"
        onClick={() => dispatch(removeProductFavourites(data.id))}
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div className="fav-title">Убрать из избранного</div>
      </div>
    </div>
  );
};

export default FavProduct;
