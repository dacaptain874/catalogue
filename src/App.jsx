import React, { useState } from 'react'
import products from "./data/products.js"
import ProductList from './components/ProductList.jsx'

const App = () => {

  const [filteredProducts, setFilteredProducts] = useState(products)

  return (
    <div>
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App