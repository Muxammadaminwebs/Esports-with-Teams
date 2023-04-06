import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./recomended.css";
import try1 from "../../images/r1.png"
import try2 from "../../images/r2.png"
import try3 from "../../images/r3.png"
import try4 from "../../images/r4.png";


  return (
    <>
      <section>
        <div className="container">
          <div className="recomendedWrapper">
            <div className="recomendedWrap1">
              <h2 className="recomendedWrap1-title">Recomended Mobiles Games</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
// import required modules
import { FreeMode, Pagination } from "swiper";

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

              <p className="append-buttons">
                {/* <button onClick={() => prepend2()} className="prepend-2-slides">
                  Prepend 2 Slides
                </button>
                <button onClick={() => prepend()} className="prepend-slide">
                  Prepend Slide
                </button>
                <button onClick={() => append()} className="append-slide">
                  Append Slide
                </button>
                <button onClick={() => append2()} className="append-2-slides">
                  Append 2 Slides
                </button> */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );


export default Recomended;
