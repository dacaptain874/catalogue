import React from 'react'
import products from "./data/products.js"

const App = () => {

  return (
    <ul className='product-list' >
      {products.map(product => (
        <li key={product.id} >
          <div className={"product"}>
            <div className="img-container" >
              <img src={product.img} className='img'/>
            </div>
            <article>
              <h3 className='product-title' >{product.title}</h3>
              <p className='product-description' >{product.description}</p>
              <span className='product-price' >Narxi: <b>{product.price}</b> so'm </span>
            </article>
            <div className="product-quantity">
              <p>blok: (<b>{product.blok}</b>) </p>
              <p>dona: (<b>{product.quantity}</b>) </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default App