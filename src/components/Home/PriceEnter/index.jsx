import React from "react";
import { useNavigate } from "react-router-dom";

import "./PriceEnter.scss";

const PriceEnter = () => {
  const [min, setMin] = React.useState();
  const [max, setMax] = React.useState();

  const navigate = useNavigate();

  const test = () => {
    // navigate(`/catalog/filter/from=${min}&to=${max}`);
    navigate(`/catalog/filter/from=${min}&to=${max}`, {
      state: { from: min, to: max },
    });
  };

  const changeFrom = (value) => {
    setMin(value);
  };

  const changeTo = (value) => {
    setMax(value);
  };

  return (
    <div className="enter-price">
      <div className="container">
        <div className="enter-price__title">Букеты по выбранной цене</div>
        <div className="enter-price__wrapper">
          <div className="price-filter">
            <form action="">
              <div className="price-filter__title">Выбор по цене</div>
              <label htmlFor="from">
                <span>от</span>
                <input
                  type="text"
                  name="from"
                  onChange={(e) => changeFrom(e.target.value)}
                />
              </label>
              <label htmlFor="to">
                <span>до</span>
                <input
                  type="text"
                  name="to"
                  onChange={(e) => changeTo(e.target.value)}
                />
              </label>
              <button type="type" onClick={() => test()}>
                Применить
              </button>
            </form>
          </div>
          {/* <div className="price-link">
            <a href="">Каталог цветов</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PriceEnter;
