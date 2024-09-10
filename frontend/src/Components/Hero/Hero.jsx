import React from 'react'
import './Hero.css'
// import {my_products} from '../Assets/all_product'
import hero_image_mobile from '../Assets/hero_image_mobile.png'
import hero_image_laptop from '../Assets/hero_image_laptop.png'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-image-container">
          <img className='hero-image' src={hero_image_mobile} alt="" />
        </div>
        <div className="hero-content">
          <div className="hero-content-category">
            MEN
          </div>
          <div className="hero-content-title">
            New Formal
          </div>
          <div className="hero-content-cta">
            <a href="#">Discover the Collection</a>
          </div>
        </div>
    </div>
  )
}

export default Hero