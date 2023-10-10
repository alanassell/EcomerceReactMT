import React from 'react'
import Layout from '../layout/layout'
import Home from '../pages/home/home'
import Categories from '../pages/categories/categories'
import Ofertas from '../pages/ofertas/ofertas'
import Nuevos from '../pages/nuevos/nuevos'
import { ProductContextProvider } from '../contexts/productoContext'
import Nosotros from '../pages/nosotros/nosotros'

function Routes() {

  return (
    <>
      <Layout />
      <Home />
      <Categories />
      <ProductContextProvider>    
        <Ofertas />
        <Nuevos />
      </ProductContextProvider>
      <Nosotros />
    </>
  )
}
 
export default Routes