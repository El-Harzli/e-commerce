import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Link to={`/product-details/${product.id}`}>
        <article className='product'>
            <div className="product-image">
                <img src={product.images.image2} alt="" />
            </div>
            <div className="product-info">
                <div className="product-brand">
                    {product.brand}
                </div>
                <div className="product-name">
                    {product.name}
                </div>
                <div className="product-prices">
                    <span className="product-old-price">${product.old_price}</span>
                    <span className="product-new-price">${product.new_price}</span>
                </div>
                <button className="product-add-to-wishlist">
                    <i className='bx bx-heart' ></i>
                    <i className='bx bxs-heart'></i>
                </button>
            </div>
        </article>
    </Link>

  )
}

export default Product