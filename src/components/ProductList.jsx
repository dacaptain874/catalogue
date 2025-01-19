import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products }) => {
  return (
    <div>
      <ul className='product-list' >
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList