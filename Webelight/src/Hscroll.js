import React, { useState } from "react";
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import  photo1 from './Images/Hscroll/photo1.svg'
import  photo2 from './Images/Hscroll/photo2.svg'
import  photo3 from './Images/Hscroll/photo3.svg'
import  photo4 from './Images/Hscroll/photo4.svg'
import  photo5 from './Images/Hscroll/photo5.svg'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import './Hscroll.css'
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation]);

export default () => {
  return (

    <Swiper

    spaceBetween={30} 
    slidesPerView={1}
    centeredSlides={true} 
    loop={true}
    autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
      }} navigation={true} className="mySwiper"
 
    >
                <SwiperSlide>
                <div id="hscroll" className = "container" >
                <section className="scrolling">
                    <div className="content">
                    <div>
                    <h2>Mobile App Development</h2>
                    <p>We provide a dedicated team of developers which ensures the delivery of quick-to-market quality solutions in a cost and time efficient manner.</p>
                    <button>Let's Talk</button>
                    </div>
                    </div>
                    <h1 className="navbar-photo1"><img src={photo1} alt="photo1" className="fab-fa-fa"  /></h1>
                </section>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "container" >
                <section className="scrolling">
                    <div className="content">
                    <div>
                    <h2>Blockchain Development</h2>
                    <p>White Paper Solutions, Smart Contract Creation, New DLT Creation.</p>
                    <button>Let's Talk</button>
                    </div>
                    </div>
                    <h1 className="navbar-photo1"><img src={photo2} alt="photo2" className="fab-fa-fa" /></h1>
                </section>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "container" >
                <section className="scrolling">
                    <div className="content">
                    <div>
                    <h2>Hire Web/Mobile App Developers</h2>
                    <p>Dedicated highly qualified professional to meet your expectations and achieve the goal in short period of time and cost efficient manner.</p>
                    <button>Let's Talk</button>
                    </div>
                    </div>
                    <h1 className="navbar-photo1"><img src={photo3} alt="photo3" className="fab-fa-fa" /></h1>
                </section>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "container" >
                <section className="scrolling">
                    <div className="content">
                    <div>
                    <h2>Devops & Cloud Applications</h2>
                    <p>We provide right combination of DevOps technologies, ensures a stable work environment and speeds software delivery for true enterprise-level DevOps.</p>
                    <button>Let's Talk</button>
                    </div>
                    </div>
                    <h1 className="navbar-photo1"><img src={photo4} alt="photo4" className="fab-fa-fa" /></h1>
                </section>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "container" >
                <section className="scrolling">
                    <div className="content">
                    <div>
                    <h2>Web App Development</h2>
                    <p>We at Webelight, provides one step solutions for all you web development make sure your website represent the core values of your company.</p>
                    <button>Let's Talk</button>
                    </div>
                    </div>
                    <h1 className="navbar-photo1"><img src={photo5} alt="photo5" className="fab-fa-fa" /></h1>
                </section>
                </div >
                </SwiperSlide>
      ...
    </Swiper>
  );
};


