/* eslint-disable  */
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImagesMain, ImagesMain2, ImagesMain3 } from "../constants/constant";

function MainImages({ pages }) {
  return (
    <section
      className={` max-w-5xl mx-auto ${
        pages === "home"
          ? "translate-y-0 visible h-auto p-4"
          : "translate-y-full invisible h-0 overflow-hidden p-0"
      } transition-all duration-150 `}
    >
      <h1 className="text-center text-3xl my-10 uppercase font-extrabold">
        Caracterización de zonas de peligrosidad en la ciudad de Comodoro
        Rivadavia
      </h1>
      <div className="flex flex-col md:flex-row gap-4 flex-wrap p-4 shadow-lg">
        <Swiper
          spaceBetween={5}
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
          className="mySwiper max-w-[300px]"
        >
          {ImagesMain.map((img) => (
            <SwiperSlide key={img} className="">
              <img src={img} alt="Images of Catastrophe" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={5}
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
          className="mySwiper max-w-[300px]"
        >
          {ImagesMain2.map((img) => (
            <SwiperSlide key={img} className="">
              <img src={img} alt="Images of Catastrophe" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={5}
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
          className="mySwiper max-w-[300px]"
        >
          {ImagesMain3.map((img) => (
            <SwiperSlide key={img} className="">
              <img src={img} alt="Images of Catastrophe" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MainImages;
