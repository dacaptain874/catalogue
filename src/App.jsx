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

  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <input className={`sticky-input ${isVisible ? "input" : "hidden"}`} value={value} onChange={searchValue} type="text" placeholder='search...' />
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App