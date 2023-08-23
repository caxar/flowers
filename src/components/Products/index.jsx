import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Scrollbar } from "swiper/modules";

import Product from "./Product";
import { fetchDataFromApi } from "../../utils/api";
import { nanoid } from "nanoid";

import "./Products.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Products = () => {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    getProductsItem();
  }, []);

  const getProductsItem = async () => {
    await fetchDataFromApi(
      `/api/products?populate=*&filters[categories][slug][$eq]=bukety-roz`
    ).then((res) => setProducts(res));
  };

  return (
    <div className="products">
      <div className="container">
        <h2 className="products-title">Букеты роз</h2>
        <div className="products-block">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            scrollbar={{
              hide: true,
            }}
            modules={[Navigation, Scrollbar]}
            navigation={true}
            className="mySwiper"
          >
            {products?.data?.map((item) => (
              <SwiperSlide>
                <Product key={nanoid()} data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="products-more">
          <a href="">
            Показать ещё
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
