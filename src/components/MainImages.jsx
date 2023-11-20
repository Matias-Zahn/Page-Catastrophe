import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImagesMain, ImagesMain2, ImagesMain3 } from "../constants/constant";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

function MainImages() {
  return (
    <div className="md:flex max-w-5xl mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-[330px]"
      >
        {ImagesMain.map((img) => (
          <SwiperSlide key={img} className="">
            <img src={img} alt="Images of Catastrophe" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-[330px]"
      >
        {ImagesMain2.map((img) => (
          <SwiperSlide key={img} className="">
            <img src={img} alt="Images of Catastrophe" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-[330px]"
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
