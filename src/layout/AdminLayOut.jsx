import React, { useEffect, useState } from 'react'
import Header from '../adminComponent/header/Header'
import Footer from '../adminComponent/footer/Footer'
import {Outlet, useNavigate} from 'react-router-dom'
import MenuBar from '../adminComponent/menuBar/MenuBar'

const AdminLayOut = () => {
    const [IsUser, setIsUser] = useState(false);
    const navigator = useNavigate();
    useEffect(()=>{
      const IsAdminLogin = localStorage.getItem("IsUserLogin");
      if(!IsAdminLogin === "true"){
        navigator("/");
      }
      setIsUser(true);
    },[]);
   
  return (
    <div className='admin_layout'>
        <Header/>
        <div className="admin_body">
          <MenuBar/>
          <Outlet/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default AdminLayOut