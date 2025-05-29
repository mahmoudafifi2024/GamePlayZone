import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Product from "../../images/product-phone.jpeg";
import Product1 from "../../images/product-phone1.jpeg";
import 'swiper/css';
import 'swiper/css/pagination';


interface ProductGalleryProps {
images?: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images = [] }) => {
const defaultImages: string[] = [
    Product,
    Product1
];

const galleryImages = images.length > 0 ? images : defaultImages;

return (
    <Swiper
    pagination={{ clickable: true }}
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    modules={[Pagination, Autoplay]}
    className="product-gallery-swiper"
    style={{ width: '40vw', height: '50vh' }}
    >
    {galleryImages.map((img, index) => (
        <SwiperSlide key={index}>
        <img
            src={img}
            alt={`Product image ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
        </SwiperSlide>
    ))}
    </Swiper>
);
};

export default ProductGallery;
