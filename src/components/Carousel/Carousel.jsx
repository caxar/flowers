import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./Carousel.scss";

const ProductCarousel = ({ image }) => {
  const p = image?.image?.data;

  return (
    <div className="product-carousel">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {p.map((item) => (
          <img
            key={item.id}
            src={process.env.REACT_APP_API_URL + item.attributes?.url}
            alt={item.attributes.name}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
