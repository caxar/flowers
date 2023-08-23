import React from "react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Banner.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";

const Banner = () => {
  const progressCircle = React.useRef(null);
  const progressContent = React.useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="banner-wrapper">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            // pagination={{
            //   type: "progressbar",
            // }}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={banner1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner2} alt="" />
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
