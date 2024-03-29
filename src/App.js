import logo from './logo.svg';
import "./css/style.css";

// swiper
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import{ Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./css/custom-swiper-bullet.css";

function App() {

  return (
    <div className='bg-neutral-950 min-h-screen flex justify-center items-center p-10 2xl:p-20 2xl:px-72'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ 
          clickable: true,
         }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className='mySwiper text-white h-[20rem] px-20 cursor-pointer'
      >
        <SwiperSlide className='px-20 h-fit bg-neutral-600'>
          Slide 1
        </SwiperSlide>
        <SwiperSlide className='px-20 h-fit bg-neutral-600'>
          Slide 2
        </SwiperSlide>
        <SwiperSlide className='px-20 h-fit bg-neutral-600'>
          Slide 3
        </SwiperSlide>
        <SwiperSlide className='px-20 h-fit bg-neutral-600'>
          Slide 4
        </SwiperSlide>
        <SwiperSlide className='px-20 h-fit bg-neutral-600'>
          Slide 5
        </SwiperSlide>
        <SwiperSlide className='px-20 h-fit bg-neutral-600'>
          Slide 6
        </SwiperSlide>
        <SwiperSlide className='px-20 h-fit bg-neutral-600'>
          Slide 7
        </SwiperSlide>
        <SwiperSlide className='px-20 h-fit bg-neutral-600'>
          Slide 8
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
