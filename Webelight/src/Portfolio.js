import React, { useState } from "react";

import portfoilo1 from './Images/Portfolio/portfolio1.png'
import portfoilo2 from './Images/Portfolio/portfolio2.png'
import portfoilo3 from './Images/Portfolio/portfolio3.png'
import portfoilo4 from './Images/Portfolio/portfolio4.png'

import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import './Portfolio.css'
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Portfolio() {
  return (
    <>
    <div id="portfolio" className="portfolio1010">
        <h1>PORTFOLIO</h1>
    </div>

    <Swiper

    spaceBetween={10} 
    slidesPerView={3}
    centeredSlides={true} 
    loop={true}
    speed={2500}
    autoplay={{
        "delay": 2500,
        "disableOnInteraction": true
      }} className="mySwiper"
 
    >          
                <SwiperSlide>
                <div  className = "container111" >
                <section className="scrolling111">
                    <h1 className="navbar-photo11"><img src={portfoilo1} alt="portfoilo1" className="aab-aa-aa"  /></h1>
                </section>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "container111" >
                <section className="scrolling111">
                    <h1 className="navbar-photo11"><img src={portfoilo2} alt="portfoilo2" className="aab-aa-aa" /></h1>
                </section>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "container111" >
                <section className="scrolling111">
                    <h1 className="navbar-photo11"><img src={portfoilo3} alt="portfoilo3" className="aab-aa-aa" /></h1>
                </section>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "container111" >
                <section className="scrolling111">
                    <h1 className="navbar-photo11"><img src={portfoilo4} alt="portfoilo4" className="aab-aa-aa" /></h1>
                </section>
                </div>
                </SwiperSlide>
      ...
    </Swiper>
    </>
  );
};


