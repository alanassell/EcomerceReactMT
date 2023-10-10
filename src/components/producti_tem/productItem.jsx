import React from 'react'
import './productItem.css'

const ProductItem = ({product}) => {

  return (
    <div className='productContainer text-center'>
      <img src={product.imgs.img1} alt="" />
      <h2 className='f15 mt-3'>{product.categoria}</h2>
      <h3 className='colorwhite f20'>{product.nombre}</h3>
      <h3 className='colorviolet fbold f20'>{product.precio} <span className='f15'>USD</span></h3>
      <div className='verMasBtn mt-2 d-flex justify-content-center align-items-center'>
          <button className='f20 colorwhite'>+</button>
          <span className='f20 colorwhite ms-3'>Ver mas</span>
      </div>
    </div>
  )
}

export default ProductItem