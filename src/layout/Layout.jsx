import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Aside from '../component/aside/Aside'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout'>
        <Header/>
        <div className='app_body'>
            <Outlet/>

            <Aside/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout