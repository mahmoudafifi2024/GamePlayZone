
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../Styles/Components/Home/Slider.css';

import Swiper1 from '../../images/swiper1.jpg';
import Swiper2 from '../../images/swiper2.jpg';
import Swiper3 from '../../images/swiper3.jpg';
import Swiper4 from '../../images/swiper4.jpg';

export default function Slider() {
return (
    <Swiper
  pagination={{ clickable: true }}
  navigation={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
  modules={[Pagination, Navigation, Autoplay]}
  className="mySwiper"
>
    <SwiperSlide><img src={Swiper1} alt="Slide 1" /></SwiperSlide>
    <SwiperSlide><img src={Swiper2} alt="Slide 2" /></SwiperSlide>
    <SwiperSlide><img src={Swiper3} alt="Slide 3" /></SwiperSlide>
    <SwiperSlide><img src={Swiper4} alt="Slide 4" /></SwiperSlide>
    </Swiper>
);
}
