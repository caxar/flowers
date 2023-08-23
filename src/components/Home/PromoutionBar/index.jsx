import React from "react";

import ff from "../../../assets/6.png";
import "./PromoutionBar.scss";

const PromoutionBar = () => {
  return (
    <div className="promoution">
      <div className="container">
        <div className="promoution-title">
          Доставка цветов в Севастополе по любому поводу
        </div>
        <div className="promoution-wrapper">
          <div className="promoution-item">
            <div className="promoution-item__image">
              <img src={ff} alt="" />
            </div>
            <div className="promoution-item__title">День рождение</div>
          </div>
          <div className="promoution-item">
            <div className="promoution-item__image">
              <img src={ff} alt="" />
            </div>
            <div className="promoution-item__title">День рождение</div>
          </div>
          <div className="promoution-item">
            <div className="promoution-item__image">
              <img src={ff} alt="" />
            </div>
            <div className="promoution-item__title">День рождение</div>
          </div>
          <div className="promoution-item">
            <div className="promoution-item__image">
              <img src={ff} alt="" />
            </div>
            <div className="promoution-item__title">День рождение</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoutionBar;
