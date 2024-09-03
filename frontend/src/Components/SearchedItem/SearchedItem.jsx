import React from 'react'
import './SearchedItem.css'

function SearchedItem({product, className}) {
  return (
    <article className={className}>
        <div>{product.name}</div>
    </article>
  )
}

export default SearchedItem