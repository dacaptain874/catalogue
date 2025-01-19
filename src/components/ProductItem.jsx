import React from 'react'

const ProductItem = ({product}) => {

  return (
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
  )
}

export default ProductItem