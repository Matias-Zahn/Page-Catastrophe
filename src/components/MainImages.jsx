/* eslint-disable  */
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImagesMain, ImagesMain2, ImagesMain3 } from "../constants/constant";

function MainImages({ pages }) {
  return (
    <section
      className={`  ${
        pages === "home"
          ? "translate-y-0 visible h-auto"
          : "translate-y-full invisible h-0 overflow-hidden "
      } transition-all duration-150 `}
    >
      <div className="max-w-[1024px] mx-auto mt-32 mb-10 ">
        <h1 className="text-center text-3xl  uppercase font-extrabold">
          Caracterización de zonas de peligrosidad en la ciudad de Comodoro
          Rivadavia
        </h1>
        <h3 className="font-extralight text-center">
          “Debemos prepararnos para lo inesperado, es decir que que las crisis
          nos sirva para anticipar otras. Debemos saber que toda crisis es un
          incremento de las incertidumbres. La predictibilidad disminuye. Los
          desórdenes se vuelven amenazadores. Es necesario abandonar los
          programas, hay que inventar estrategias para salir de la crisis. Es
          necesario, a menudo, abandonar las soluciones que solucionaban las
          viejas crisis y elaborar soluciones novedosas”{" "}
          <span className="font-bold">Morin, Edgar</span>
        </h3>
      </div>
      <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row gap-4 flex-wrap p-4 shadow-lg ">
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
      <article className="bg-[url(/bg/cerreo.jpg)]">
        <div className="md:flex gap-4 my-10 text-white max-w-[1024px] items-center justify-between h-[700px] mx-auto ">
          <div className="grid gap-4">
            <h4 className="text-lg font-bold  text-center">
              TÍTULOS - CATÁSTROFE DEL 2017
            </h4>
            <div>
              <p className="p-4 text-xl">
                La tormenta ocurrida en Comodoro Rivadavia en marzo-abril de
                2017 que conmocionó a la ciudad, constituyendo unos de los
                desastres naturales más importantes de su historia. El agua fue
                el protagonista de la catástrofe y sus huellas quedaron en su
                tierra (y su gente), cavando enormes zanjones que destruyeron
                calles, casas y puentes, o transportando y depositando enormes
                cantidades de tierra (sedimentos) dentro de algunos barrios
              </p>
            </div>
          </div>
          <div className="grid gap-4 ">
            <h4 className="text-lg font-bold  text-center ">
              FEBRERO DE 1995 Y AGOSTO DEL 2023
            </h4>
            <div>
              <p className="p-4 text-xl">
                La Ruta Nacional N°3 experimentó un desplazamiento debido a los
                movimientos del Cerro Chenque, lo que generó una grieta en la
                contracurva que transcurre entre el cerro y el acantilado que
                bordea el mar. Para este hecho como medida preventiva, se desvió
                el tráfico pero, la calzada colapsó por completo el 29 de agosto
                del presente año. En respuesta a esta emergencia, se declaró un
                estado de urgencia y se movilizaron los equipos de construcción
                pesados para facilitar una pronta solución.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="grid gap-5 shadow-lg p-4 max-w-[1024px] mx-auto">
        <p>
          En nuestra ciudad las condiciones climáticas adversas representan una
          amenaza considerable para diferentes zonas y ponen en riesgo a los
          ciudadanos. Es necesario hablar sobre estos temas, dar cuenta que
          nuestra ciudad es una ciudad en riesgo.
        </p>
        <div className="flex items-center">
          <img className="max-w-[300px]" src="phone/phone.png" alt="" />
          <p>
            La operatividad práctica de pensamiento holístico es crucial, pero
            es importante recordar que cuando se trata de emergencias y
            desastres, planificar la comunicación se vuelve una tarea más
            compleja y desafiante. Porque esta incluye la compilación,
            sistematización, producción y divulgación de información que permita
            la toma de decisiones y la movilización de recursos; exige
            identificar fuentes y actores clave; priorizar audiencias y definir
            los mensajes
          </p>
        </div>
        <p>
          ¿Sabías que ahora podes planear la estructura de tu vivienda en base a
          los riesgos que contiene la zona? Así vas a poder ahorrar en
          infraestructura. ¡Mira nuestro mapa de peligrosidad!
        </p>
        <p>
          Conoce la nueva APP respaldad por la Subsecretaría de Ambiente de
          Comodoro Rivadavi
        </p>
        <div className="flex items-center">
          <img className="max-w-[300px]" src="logo.png" alt="" />
          <p>
            La operatividad práctica de pensamiento holístico es crucial, pero
            es importante recordar que cuando se trata de emergencias y
            desastres, planificar la comunicación se vuelve una tarea más
            compleja y desafiante. Porque esta incluye la compilación,
            sistematización, producción y divulgación de información que permita
            la toma de decisiones y la movilización de recursos; exige
            identificar fuentes y actores clave; priorizar audiencias y definir
            los mensajes
          </p>
        </div>
        <p>
          Las categorías de red y soporte social son sustanciales para este tipo
          de hechos. Para situaciones de reinicio, en la que hay otro momento
          inicial y otro destino parcial y en la que nada puede volver a ser
          como antes. Debemos ayudar a potencializar, interactuar activamente
          con los actores sociales de estas construcciones, porque constituye el
          espacio de intervención de la disciplina.
        </p>
      </article>
    </section>
  );
}

export default MainImages;
