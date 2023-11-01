import React from 'react'

const Product_Image = ({imageUrl, alttext}) => {
  return (
    <div>
        <img src={imageUrl} alt={alttext} />
    </div>
  )
}

export default Product_Image