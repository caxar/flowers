import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchDataFromApi } from "../../utils/api";

import ff from "../../assets/6.png";

import "./Catalog.scss";

const Catalog = () => {
  const [category, setCategory] = React.useState([]);

  // Используем useNavigate что бы вывести при клике на определенный объект
  // вывести id в url
  const navigate = useNavigate();

  React.useEffect(() => {
    getCategoryItems();
  }, []);

  const getCategoryItems = async () => {
    await fetchDataFromApi(`/api/catalogs?populate=*`).then((res) =>
      setCategory(res)
    );
  };

  // что бы не было ошибки 0 элементов проверяем есть ли что-то в items если нет возвращаем пустое значание
  if (!category) return <></>;

  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog-title">Каталог</div>
        <div className="catalog-wrapper">
          {category?.data?.map((item) => (
            <div className="ag-courses_item" key={item.id}>
              <Link
                to={`/catalog/${item?.attributes?.slug}`}
                className="ag-courses-item_link"
              >
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_img">
                  <img
                    src={
                      process.env.REACT_APP_API_URL +
                      item?.attributes?.image?.data[0]?.attributes?.url
                    }
                    alt=""
                  />
                </div>

                <div className="ag-courses-item_title">
                  {item?.attributes?.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
