import React from 'react'
import './CSS/ProductDetail.css'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import { useParams } from 'react-router-dom'
import { my_products } from '../Components/Assets/all_product'

function ProductDetail() {
  const {productId} = useParams();
  const product = my_products.find((p) => p.id ===  Number(productId))

  // Handle the case where no product is found
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <article className='product-detail'>
        <ProductDisplay product={product} />
    </article>
  )
}

export default ProductDetail