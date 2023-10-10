import React from 'react'
import './nuevos.css'
import { useproductContext } from '../../contexts/productoContext'
import ProductItem from '../../components/producti_tem/productitem'

const Nuevos = () => {

  const { products } = useproductContext() 

  function renderProductsNews(){
    return products?.map((product) => {
        if(product.id <= 4){
            return <ProductItem key={product.id} product={product} />
        }
    })
  }

  return (
    <section className='sectionNuevos mx'>
        <span className='pbackgraund'>NUEVOS</span>
        {renderProductsNews()}
    </section>
  )
}

export default Nuevos