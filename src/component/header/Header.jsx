import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const Header = () => {
    const [searchBox, setSearchBox] = useState(false);
    const [showNav, setShowNav] = useState(false);


    const handleSearchBox =()=>{
        setSearchBox(prev=>!prev);
    }
    const handleResNav=()=>{
        setShowNav(prev=>!prev)
    }
    const navInfo = [
        {
            id:1,
            title:"birds"
        },{
            id:2,
            title:"animals"
        },
        {
            id:3,
            title:"trees"
        },
        {
            id:4,
            title:"travels"
        },
        {
            id:5,
            title:"forest"
        },
        {
            id:6,
            title:"pets"
        },
        {
            id:7,
            title:"fish"
        }

    ]

  return (
    <header>
        <div className="logo">
            <h2><span>W3</span>Mastery</h2>
        </div>
        <nav>
            <ul className={showNav ? "active" : ''}>
                <li><Link to="/">Home</Link></li>
                {
                    navInfo.map((item)=>(
                        <li key={item.id}><Link to={`/category/${item.title}`}>{item.title}</Link></li>
                    ))
                }
                
            </ul>
        </nav>
        <div className="header_right">
            <button onClick={handleSearchBox}><FaSearch/></button>
            <button className='res_btn'onClick={handleResNav}>{showNav ? <IoClose/> : <FaBars />}</button>
            {
                searchBox &&  <div className="search_bar">
                <input type="search" name="search" id="search" placeholder='search'/>
                <button onClick={handleSearchBox}><IoClose/></button>
            </div>
            }
           
        </div>
    </header>
  )
}

export default Header