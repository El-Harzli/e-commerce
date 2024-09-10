import React from 'react'
import './ProductDisplay.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

function ProductDisplay({product}) {

  // Convert images object to an array of [key, image] pairs
  const imageEntries = Object.entries(product.images);

  // Move the first image to the end
  if (imageEntries.length > 1) {
    const [firstImage] = imageEntries;
    imageEntries.push(imageEntries.shift());
  }

  return (
    <div className='product-display'>
        <div className="img-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          // slidesPerView={1.5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, hide: false }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            320: {
              // mobile devices
              slidesPerView: 1,
            },
            480: {
              // small tablets
              slidesPerView: 2,
            },
          }}
          >
          {
            imageEntries.map(([key, image]) => (
            <SwiperSlide key={key} >
              {console.log(image)}
              <img src={image} alt="" />
            </SwiperSlide>
            ))
          }
        </Swiper>
        </div>
    </div>
  )
}

export default ProductDisplay



