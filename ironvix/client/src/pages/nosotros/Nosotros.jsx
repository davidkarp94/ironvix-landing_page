import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './nosotros.css'
import Title from '../../components/title/Title';
import placeholder from '../../assets/images/staff.jpg'
import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';

const Nosotros = () => {

  const staff = [
    {
      name: 'Nacho Calvo',
      occupation: 'Ironvix CEO',
      image: placeholder
    },
    {
      name: 'Nacho Calvo',
      occupation: 'Ironvix CEO',
      image: placeholder
    },
    {
      name: 'Nacho Calvo',
      occupation: 'Ironvix CEO',
      image: placeholder
    },
    {
      name: 'Nacho Calvo',
      occupation: 'Ironvix CEO',
      image: placeholder
    }
  ]

  return (
    <section id='nosotros'>
      <div className='nosotros-container'>
        <div className="title">
            <Title text='NOSOTROS' />
        </div>

        <Swiper
        slidesPerView={2}
        spaceBetween={200}
        centerInsufficientSlides={true}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={20000}
        modules={[ Autoplay, FreeMode ]}
        className="staff-container"
      >
        {staff.map((member, index) => (
          <SwiperSlide key={index}>
            <img className='staff-image' src={member.image} alt="Staff Photo" />
            <p className='staff-name raleway-black'>{member.name}</p>
            <p className='staff-occupation raleway-bold'>{member.occupation}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  )
}

export default Nosotros