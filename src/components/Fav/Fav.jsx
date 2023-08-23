import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FavProduct from "./FavProduct/FavProduct";

import cartEmpty from "../../assets/empty-cart.png";
import "./Fav.scss";

const Fav = () => {
  const { items } = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  return (
    <div className="favourites">
      <div className="container">
        <div className="favourites-wrapper">
          {items.length == 0 ? (
            <div className="favourites-empty">
              <div className="favourites-empty_title">
                На данный момент у вас нет избранных товаров.
              </div>
              {/* <div className="favourites-empty_img">
              <img src={cartEmpty} alt="empty-cart" />
            </div> */}
              <div className="favourites-empty_text">
                <p>
                  Перейдите на главную старницу и добавьте понравившейся товар в
                  избранное что бы не потерять.
                </p>
              </div>
              <button className="favourites-empty_btn">
                <Link to="/">На главную</Link>
              </button>
            </div>
          ) : (
            <>
              <div className="favourites-title">Избранные товары</div>
              <div className="favourites-products__block">
                {items.map((item) => (
                  <FavProduct key={item.id} data={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fav;
