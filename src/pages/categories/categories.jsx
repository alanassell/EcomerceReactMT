import React from 'react'
import './categories.css'

const Categories = () => {
  return (
    <section className='categoriasContainer' id='categorias'>
        <div className='catContainer bb bt'>
            <span className='pbackgraund'>SAMSUNG</span>
            
                <h3 className='colorwhite f40'>Samsung</h3>
                <div className='mt-5 verMasBtn d-flex align-items-center'>
                    <button className='f25 colorwhite'>+</button>
                    <span className='f25 colorwhite ms-3'>Ver mas</span>
                </div>
                <img className="p-3 me-5" src="https://shop.samsung.com/ie/business/images/products/28636/21040/600x600/SM-S908BZKDEUB.png" alt="" />            
        </div>
        <div className='catContainer bl bb bt'>
           <span className='pbackgraund'>IPHONE</span>
           
                <h3 className='colorwhite f40'>Iphone</h3>
                <div className='mt-5 verMasBtn d-flex align-items-center'>
                    <button className='f25 colorwhite'>+</button>
                    <span className='f25 colorwhite ms-3'>Ver mas</span>
                </div>
                <img src="https://media.croma.com/image/upload/v1662703232/Croma%20Assets/Communication/Mobiles/Images/261966_b70zmj.png" alt="" />
        </div>
        <div className='catContainer br bb'>
          <span className='pbackgraund'>XIAOMI</span>
          
                 <h3 className='colorwhite f40'>Xiaomi</h3>
                 <div className='mt-5 verMasBtn d-flex align-items-center'>
                     <button className='f25 colorwhite'>+</button>
                     <span className='f25 colorwhite ms-3'>Ver mas</span>
                </div>
                <img className='p-5 rotate' src="https://i0.wp.com/www.fdaytalk.com/wp-content/uploads/2023/09/Xiaomi-Redmi-Note-13-Pro-plus-1.webp?fit=451%2C553&ssl=1" alt="" />
        </div>
        <div className='catContainer bb'>
          <span className='pbackgraund'>MOTOROLA</span>
          
                <h3 className='colorwhite f40'>Motorola</h3>
                <div className='mt-5 verMasBtn d-flex align-items-center'>
                        <button className='f25 colorwhite'>+</button>
                        <span className='f25 colorwhite ms-3'>Ver mas</span>
                </div>
                <img className="me-4" src="https://motorolaes.vtexassets.com/arquivos/ids/158979/motorola-edge-40-pro-pdp-ecom-render-6-angel-falls-9glz05zt.png?v=638162179187800000" alt="" />  
        </div>
    </section>
  )
}

export default Categories