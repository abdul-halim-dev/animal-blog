import React from 'react'
import Header from '../component/header/Header';
import { Outlet } from 'react-router-dom';
import Aside from '../component/aside/Aside';
import Footer from '../component/footer/Footer';

const Layout = ()=>{
    return(
      <>
      <Header/>
      <div className="app_body">
        <Outlet/>
        <Aside/>
      </div>
      <Footer/>
      </>
    )
  }

export default Layout;
