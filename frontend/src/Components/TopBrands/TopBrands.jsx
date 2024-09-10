import React, { useState, useEffect, useRef } from "react";
import "./TopBrands.css";
import { my_products } from "../Assets/all_product";
import Product from "../Product/Product";
import david_look_1 from '../Assets/david_look_1.png';
import la_martina from '../Assets/lamartina.jpg';
import harmont from '../Assets/harmont.jpg';
import paul from '../Assets/paul.jpg';

function TopBrands() {
  const topBrands = ["Boss", "La Martina", "H&B", "Paul & Shark"];
  const [topBrandsActiveCategory, setTopBrandsActiveCategory] = useState("Boss");
  const [isSticky, setIsSticky] = useState(false);
  const [scale, setScale] = useState(1); // State to track the scale of the image
  const imageContainerRef = useRef(null);
  const contentContainerRef = useRef(null);
  const [contentDistance, setContentDistance] = useState(0); // State to track the content distance

  const myFilteredProducts = my_products
    .filter((product) => product.brand === topBrandsActiveCategory)
    .slice(0, 4);

  const selectedImage = () => {
    return topBrandsActiveCategory === "Boss"
      ? david_look_1
      : topBrandsActiveCategory === "La Martina"
      ? la_martina
      : topBrandsActiveCategory === "H&B"
      ? harmont
      : paul;
  };

useEffect(() => {
  const handleImageScroll = () => {
    const imageRect = imageContainerRef.current.getBoundingClientRect();
    const contentRect = contentContainerRef.current.getBoundingClientRect();

    if (imageRect.top === 0 && !isSticky) {
      // When the image top hits the top of the viewport
      setIsSticky(true);
      setContentDistance(contentRect.top); // Store the initial distance of the content from the top
      console.log("Image has hit the top of the viewport");
    } else if (imageRect.top > 0 && isSticky) {
      // When the image leaves the top
      setIsSticky(false);
      setScale(1); // Reset the scale
      console.log("Image has left the top");
    }

    if (isSticky) {
      const currentDistance = contentRect.top;
      const totalScrollDistance = contentDistance - window.innerHeight / 2; // Scroll distance from 100vh to 50vh

      if (currentDistance >= totalScrollDistance) {
        // Scale up between 100vh to 50vh
        const scaleValue = 1 + ((contentDistance - currentDistance) / (contentDistance - totalScrollDistance)) * 0.2;
        setScale(Math.max(Math.min(scaleValue, 1.2), 1)); // Cap the scale at 1.2
        console.log("Scaling:", scaleValue);
      }
    }
  };

  // const initialCheck = () => {
  //   const imageRect = imageContainerRef.current.getBoundingClientRect();
  //   const contentRect = contentContainerRef.current.getBoundingClientRect();

  //   if (imageRect.top <= 0) {
  //     // Image is sticky at page load
  //     setIsSticky(true);
  //     setContentDistance(contentRect.top); // Store the content's initial distance
  //     const currentDistance = contentRect.top;
  //     const totalScrollDistance = contentDistance - window.innerHeight / 2;

  //     if (currentDistance >= totalScrollDistance) {
  //       const scaleValue = 1 + ((contentDistance - currentDistance) / (contentDistance - totalScrollDistance)) * 0.2;
  //       setScale(Math.max(Math.min(scaleValue, 1.2), 1));
  //     }
  //   }
  // };

  window.addEventListener("scroll", handleImageScroll);

  // Run the initial check when the component mounts
  // initialCheck();
  

  return () => {
    window.removeEventListener("scroll", handleImageScroll);
  };
}, [isSticky]);

// useEffect(() => {
//   // Scroll to the top when the component mounts
//   window.scrollTo(0, 0);
// }, []);




  return (
    <section className="top-brands">
      <div className="top-brands-header">Top Brands</div>
      <nav className="top-brands-category">
        <ul className="top-brands-category-items">
          {topBrands.map((brand, index) => {
            return (
              <li
                key={index}
                onClick={() => setTopBrandsActiveCategory(brand)}
                className={`top-brands-category-item ${
                  topBrandsActiveCategory === brand ? "active" : ""
                }`}
              >
                {brand}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="top-brands-content">
        <div className="container">
          <figure ref={imageContainerRef} className="image-container">
            <img
              src={selectedImage()}
              alt={topBrandsActiveCategory}
              style={{
                transform: `scale(${scale})`,
                transition: "transform 0.2s ease-out", // Smooth transition
              }}
            />
          </figure>
          <article ref={contentContainerRef} className="content">
            <div className="top-brands-items">
              {myFilteredProducts.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TopBrands;
