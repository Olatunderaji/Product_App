import React from 'react'
import Products from './Products.css'
import Product_Name from '../Product_Name/Product_Name'
import Product_Image from '../ProductImage/ProductImage'
import Price from '../Price/Price'
const Product = ({name, description,price, image}) => {
  return (
    <div className='cardContainer'>
    <div className='card'>
      <div className='imgBox'>
      <Product_Image imageUrl={image} alttext={name}/>
      </div>
      <div className='text'>
      <h3 id='name'>{name}</h3>
      <h4 id='price'>{price}</h4>
      <p id='description'>{description}</p>
      </div>
     
    </div>
    </div>
    
  )
}

export default Product