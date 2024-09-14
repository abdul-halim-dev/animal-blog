import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsHouse, BsListNested, BsCardImage, BsTags, BsGear, BsBarChart} from 'react-icons/bs'
import {AiOutlineUser, AiOutlineDatabase, AiOutlineLogout, AiFillDashboard, AiOutlineMenu ,AiOutlineX} from 'react-icons/ai'

const MenuBar = () => {
  const [menuToggler, setMenuToggler] = useState(false);

  const handleMenuToggle=()=>{
    setMenuToggler(prev=>!prev);
  }
  console.log('toggle', menuToggler)
  return (
    <div className='menuBar'>
      <button className='toggle_menu' onClick={handleMenuToggle}>{menuToggler ? <AiOutlineX/> : <AiOutlineMenu/> }</button>
      <div className="menu_header">
        <AiFillDashboard className='nav_icon'/>
        <h3 className={menuToggler ? "nav_name active" : "nav_name"}>Dashboard</h3>
        <span className={menuToggler ? "nav_name active" : "nav_name"}>welcome</span>
      </div>
      <div className="nav_wrapper">
        <Link to="/admin-path">
          <span className='nav_icon' title="Home"><BsHouse/></span>
          <span className={menuToggler ? "nav_name active" : "nav_name"}>Home</span>
        </Link>
        <Link to="/admin-path/category">
        <span className='nav_icon' title="Category"><BsListNested/></span>
        <span className={menuToggler ? "nav_name active" : "nav_name"}> Category</span>
        </Link>
        <Link to="/admin-path/posts">
        <span className='nav_icon' title="Posts"><BsCardImage/></span>
        <span className={menuToggler ? "nav_name active" : "nav_name"}> Posts</span>
        </Link>
        <Link to="/admin-path/users">
        <span className='nav_icon' title="User"><AiOutlineUser/></span>
        <span className={menuToggler ? "nav_name active" : "nav_name"}> User</span>
        </Link>
        <Link to="/admin-path/ads">
        <span className='nav_icon' title="Ads"><AiOutlineDatabase/></span>
        <span className={menuToggler ? "nav_name active" : "nav_name"}> Ads</span>
        </Link>
        <Link to="/admin-path/Tags">
        <span className='nav_icon' title="Tags"><BsTags/></span>
        <span className={menuToggler ? "nav_name active" : "nav_name"}> Tags</span>
        </Link>
        <Link to="/admin-path/profile">
        <span className='nav_icon' title="Profile"><AiOutlineUser/></span>
        <span className={menuToggler ? "nav_name active" : "nav_name"}> Profile</span>
        </Link>
        <Link to="/admin-path/setting">
        <span className='nav_icon' title="Setting"><BsGear/></span>
        <span className={menuToggler ? "nav_name active" : "nav_name"}> Setting</span>
        </Link>
        <Link to="/admin-path">
        <span className='nav_icon'><AiOutlineLogout/></span>
        <span className={menuToggler ? "nav_name active" : "nav_name"}> Logout</span>
        </Link>
      </div>
    </div>
  )
}

export default MenuBar