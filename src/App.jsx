import React, { useEffect, useState } from 'react'
import products from "./data/products.js"
import ProductList from './components/ProductList.jsx'

const App = () => {

  const [value, setValue] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(products)

  const searchValue = (e) => {
    setValue(e.target.value)
    const filtered =  products.filter(product => product.title.toLowerCase().includes(value.toLowerCase()))
    setFilteredProducts(filtered)
  }

  return (
    <div>
      <div className='input-container'>
        <input className="input" value={value} onChange={searchValue} type="text" placeholder='search...' />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App