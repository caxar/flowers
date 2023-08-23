import React from "react";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

import { nanoid } from "nanoid";
import { fetchDataFromApi } from "../../../utils/api";

import logo from "../../../assets/logo.png";
import "./HeaderMenu.scss";

const Rozy_amount = [
  { id: nanoid(), name: "7 роз" },
  { id: nanoid(), name: "9 роз" },
  { id: nanoid(), name: "15 роз" },
  { id: nanoid(), name: "25 роз" },
  { id: nanoid(), name: "51 роза" },
  { id: nanoid(), name: "101 роза" },
];

const HeaderMenu = ({ openCart, setOpenCart }) => {
  const [scrollHeader, setScrollHeader] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const { items, totalCount } = useSelector((state) => state.cart);

  const handleScrollHeader = () => {
    const offsetTop = window.scrollY;
    if (offsetTop > 100) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScrollHeader);
  }, []);

  React.useEffect(() => {
    getProductsCategories();
  }, []);

  const getProductsCategories = async () => {
    await fetchDataFromApi("/api/categories?populate=*").then((res) =>
      setCategories(res)
    );
  };

  return (
    <div className={`header-fixed ${scrollHeader ? "scrolled-header" : ""}`}>
      <div className="container">
        <div className="fixed-content">
          <div className="content-left">
            <ul className="content-menu">
              <li className="content-menu__item dropdown">
                <a href="">
                  Розы
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu">
                  <ul className="dropdown-menu__list">
                    <div className="menu-list__block">
                      <div className="menu-list__item">
                        <p>По количеству</p>
                        {Rozy_amount.map((item) => (
                          <li key={item.id}>{item.name}</li>
                        ))}
                      </div>
                      <div className="menu-list__item">
                        <p>По цвету</p>
                        <li>
                          <a href="">Красные розы</a>
                        </li>
                        <li>
                          <a href="">БЕлые розы</a>
                        </li>
                        <li>
                          <a href="">Розовые розы</a>
                        </li>
                        <li>
                          <a href="">Желтые розы</a>
                        </li>
                        <li>
                          <a href="">Синие розы</a>
                        </li>
                      </div>
                      <div className="menu-list__item">
                        <p>По виду</p>
                        <li>
                          <a href="">Кустовые розы</a>
                        </li>
                        <li>
                          <a href="">Пиновидные розы</a>
                        </li>
                        <li>
                          <a href="">Розы крупный бутон</a>
                        </li>
                        <li>
                          <a href="">Стандартная розы</a>
                        </li>
                      </div>
                      <div className="menu-list__item">
                        <p>По форме букета</p>
                        <li>
                          <a href="">В корзине</a>
                        </li>
                        <li>
                          <a href="">В коробке</a>
                        </li>
                        <li>
                          <a href="">В букете</a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              <li className="content-menu__item">
                <a href="">
                  Цвет
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu">
                  <ul className="dropdown-menu__list">
                    {categories?.data?.map((item) => (
                      <li key={item.id}>
                        <Link to={`/category/${item.attributes.slug}`}>
                          {item.attributes.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="content-menu__item">
                <a href="">
                  Композиции{" "}
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu">
                  <ul className="dropdown-menu__list">
                    <li>
                      <a href="">Букеты роз</a>
                    </li>
                    <li>
                      <a href="">Пиновидные розы</a>
                    </li>
                    <li>
                      <a href="">Кустовые розы</a>
                    </li>
                    <li>
                      <a href="">Розы в корзине</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="content-menu__item">
                <a href="">
                  Повод{" "}
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu">
                  <ul className="dropdown-menu__list">
                    <div className="menu-list__block--shirt">
                      <div className="menu-list__item">
                        <li>
                          <a href="">День рождения</a>
                        </li>
                        <li>
                          <a href="">День учителя</a>
                        </li>
                        <li>
                          <a href="">День отца</a>
                        </li>
                        <li>
                          <a href="">Свадебный букет</a>
                        </li>
                        <li>
                          <a href="">День знаний</a>
                        </li>
                        <li>
                          <a href="">День матери</a>
                        </li>
                      </div>
                      <div className="menu-list__item">
                        <li>
                          <a href="">Новый год</a>
                        </li>
                        <li>
                          <a href="">14 февраля</a>
                        </li>
                        <li>
                          <a href="">23 февраля</a>
                        </li>
                        <li>
                          <a href="">8 марта</a>
                        </li>
                        <li>
                          <a href="">Пасха</a>
                        </li>
                        <li>
                          <a href="">9 мая</a>
                        </li>
                        <li>
                          <a href="">Последний звонок</a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              <li className="content-menu__item">
                <a href="">
                  Букеты{" "}
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu">
                  <ul className="dropdown-menu__list">
                    <li>
                      <a href="">Букеты роз</a>
                    </li>
                    <li>
                      <a href="">Пиновидные розы</a>
                    </li>
                    <li>
                      <a href="">Кустовые розы</a>
                    </li>
                    <li>
                      <a href="">Розы в корзине</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="content-menu__item">
                <a href="">
                  Монобукеты
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                      fill="#0F0F0F"
                    />
                  </svg>
                </a>
                <div className="dropdown-menu">
                  <ul className="dropdown-menu__list">
                    <div className="menu-list__block--shirt">
                      <div className="menu-list__item">
                        <li>
                          <a href="">Розы</a>
                        </li>
                        <li>
                          <a href="">Тюльпаны</a>
                        </li>
                        <li>
                          <a href="">Герберы</a>
                        </li>
                        <li>
                          <a href="">Ирисы</a>
                        </li>
                        <li>
                          <a href="">Пионы</a>
                        </li>
                        <li>
                          <a href="">Лилии</a>
                        </li>
                      </div>
                      <div className="menu-list__item">
                        <li>
                          <a href="">Орхидеи</a>
                        </li>
                        <li>
                          <a href="">Гвоздики</a>
                        </li>
                        <li>
                          <a href="">Лилии</a>
                        </li>
                        <li>
                          <a href="">Ромашки</a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>
              <li className="content-menu__item">
                <a href="">Акции</a>
              </li>
              <li className="content-menu__item">
                <a href="">Подарки</a>
              </li>
            </ul>
            {/* <ul className="content-menu">
              {data.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    {!!item.subMenu ? (
                      <li className="content-menu__item dropdown">
                        <a href=""> {item.name}</a>
                        <div className="dropdown-menu">
                          <ul className="dropdown-menu__list">
                            <div className="menu-list__block">
                              <div className="menu-list__item">
                                <p>Повод</p>
                                {subMenuData.map((item) => (
                                  <li key={item.id}>{item.name}</li>
                                ))}
                              </div>
                            </div>
                          </ul>
                        </div>
                      </li>
                    ) : (
                      <li className="content-menu__item dropdown">
                        <Link>{item.name}</Link>
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ul> */}
          </div>
          <div className="fixed-cart">
            <Link to="fav" title="Избранное">
              <div className="fixed-cart__like">
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
                  />
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
                {/* <div className="like-count">5</div> */}
              </div>
            </Link>
            <Link to="cart/">
              <button
                type="button"
                className={`fixed-cart__btn`}
                onClick={() => setOpenCart(!openCart)}
              >
                Корзина
                <div className="btn-line"></div>
                <div className="btn-quantity">{items.length}</div>
                <svg
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-xlo7eb-9 sohEu"
                >
                  <path
                    d="M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
