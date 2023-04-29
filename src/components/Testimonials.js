import React from 'react';
import { dataTestimonials } from './DataTestimonials';
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {

  SwiperCore.use([Autoplay]);

  const testimonials = dataTestimonials.map((testimonial) => {
    return(
      <SwiperSlide className='testimonials__testimonial' key={testimonial.id} >
      <img src={testimonial.avatar} alt={testimonial.alt} className='testimonials__testimonial-image' />
      <h3 className='testimonials__testimonial-title'>{testimonial.name}</h3>
      <p className='testimonials__testimonial-text'>{testimonial.review}</p>
      </SwiperSlide>
    )
  });

  return (
    <div id='testimonials' className='testimonials'>
      <h1 className='testimonials__title'>Reviews from clients</h1>
        <Swiper className='testimonials__container' // install Swiper modules
          modules={[Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          autoplay={{delay: 5000, disableOnInteraction: true}}
          >
          {testimonials}
        </Swiper>
    </div>
  )
}