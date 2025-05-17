
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../Styles/Components/Home/Slider.css';

import Swiper1 from '../../images/swiper.webp';
import Swiper2 from '../../images/swiper1.webp';
import Swiper3 from '../../images/swiper2.webp';
import Swiper4 from '../../images/swiper3.webp';

export default function Slider() {
return (
    <Swiper
  pagination={{ clickable: true }}
  loop={true}
  modules={[Pagination,  Autoplay]}
  className="mySwiper"
>
    <SwiperSlide><img src={Swiper1} alt="Slide 1" /></SwiperSlide>
    <SwiperSlide><img src={Swiper2} alt="Slide 2" /></SwiperSlide>
    <SwiperSlide><img src={Swiper3} alt="Slide 3" /></SwiperSlide>
    <SwiperSlide><img src={Swiper4} alt="Slide 4" /></SwiperSlide>
    </Swiper>
);
}
