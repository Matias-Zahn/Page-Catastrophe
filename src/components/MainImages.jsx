import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImagesMain, ImagesMain2, ImagesMain3 } from "../constants/constant";

function MainImages() {
  return (
    <div className="flex">
      <Swiper
        className="mySwiper overflow-hidden"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
      >
        {ImagesMain.map((img) => (
          <SwiperSlide key={img} className="">
            <img src={img} alt="Images of Catastrophe" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },

        }}
      >
        {ImagesMain2.map((img) => (
          <SwiperSlide key={img} className="">
            <img src={img} alt="Images of Catastrophe" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
      >
        {ImagesMain3.map((img) => (
          <SwiperSlide key={img} className="">
            <img src={img} alt="Images of Catastrophe" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainImages;
