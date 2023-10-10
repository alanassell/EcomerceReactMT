import React from 'react'

import './home.css'

const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

const Home = () => {
  return (
      <section className='containerSectionHome'>
        <span className='pbackgraund'>MEGATECH</span>
        <div className='verMasBtn d-flex justify-content-center align-items-center'>
            <button className='f25 colorwhite'>+</button>
            <span className='f25 colorwhite ms-3'>Ver mas</span>
        </div>
        <span className='nextSection' onClick={()=>{handleScroll("categorias")}}>
            <svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3.5L25 25.5L45.5 3" stroke="#545663" stroke-width="5" stroke-linecap="round"/>
            </svg>
        </span>
        <div className='containerHome d-flex mx'>
            <div className='containerRigth d-flex flex-column justify-content-center'>
                <h3 className='colorwhite tittlehome'>Celular - Xiaomi <br /> Poco X5</h3>
                <div className='d-flex mt-4 justify-content-between'>
                    <h3 className='d-flex align-items-center price1 fbold f40'>$350 <span className='f25'> USD</span></h3>
                    <h3 className='d-flex align-items-center price2 colorviolet fbold f40'>$324 <span className='f25'> USD</span></h3>
                </div>
            </div>
            <div className='containerLeft d-flex flex-column justify-content-center'>
                <img src="https://fixechelectronica.com.ar/wp-content/uploads/2023/04/POCO-X5-PRO-5G-1.png" alt="POCO-X5-PRO-5G-1" />
            </div>
        </div>
      </section>
  )
}

export default Home