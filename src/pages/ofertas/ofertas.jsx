import React from 'react'
import './ofertas.css'
import { useproductContext } from '../../contexts/productoContext'
import ProductItem from '../../components/producti_tem/productitem'

const Ofertas = () => {
  
  const { products } = useproductContext() 

  function renderProductsOff(){
    return products?.map((product) => {
        if(product.id <= 4){
            return <ProductItem key={product.id} product={product} />
        }
    })
  }

  return (
    <section className='sectionOfertas mx'>
      <span className='pbackgraund'>OFERTAS</span>
      {renderProductsOff()}
    </section>  
  )
}

export default Ofertas
