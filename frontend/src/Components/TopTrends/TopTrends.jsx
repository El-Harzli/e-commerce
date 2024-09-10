import React, { useState } from "react";
import "./TopTrends.css";
import Product from "../Product/Product";
import { my_products } from "../Assets/all_product";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Link } from "react-router-dom";

function TopTrends() {
  const [topTrendsActiveCategory, setTopTrendsActiveCategory] = useState("Polo");
  const limitedProducts = my_products
  .filter((product) => {
    return product.sub_category === topTrendsActiveCategory
  })
  .slice(0, 5)

  const topTrendsCategories = ["Polo", "T-shirt", "Shirt", "Jeans", "Shoes"];

  return (
    <section className="top-trends">
      <div className="top-trends-header">Top Trendings</div>
      <nav className="top-trends-category">
        <ul className="top-trends-category-items">
          {
            topTrendsCategories.map((category, index) => {
              return (
                <li
                key={index}
                onClick={() => setTopTrendsActiveCategory(category)}
                className={`top-trends-category-item ${
                  topTrendsActiveCategory === category ? "active" : ""
                }`}
              >
                {category}
              </li>
              )
            })
          }
        </ul>
      </nav>
      <div className="top-trends-content">
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
              slidesPerView: 1.5,
            },
            480: {
              // small tablets
              slidesPerView: 2,
            },
            768: {
              // tablets and small laptops
              slidesPerView: 3,
            },
            1024: {
              // laptops
              slidesPerView: 4,
            },
            1200: {
              // desktops
              slidesPerView: 5,
            },
          }}
        >
          {limitedProducts.map((product) => (
            <SwiperSlide key={product.id}  onClick={()=> console.log("You have clicked : " + product.name )} >
                <Product  product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="top-trends-cta">Shop Now</button>
    </section>
  );
}

export default TopTrends;
