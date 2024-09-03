import React from 'react'
import {Link } from 'react-router-dom'
import { FaUsers, FaRegUser } from "react-icons/fa"
const RelatedPost = () => {
  return (
    <div className='related_post'>
      <h1>Related Posts</h1>
     <div className="post_card_container">
     <Link to="/singlepost/jhfgdshgfhdsg" className="related_post_card">
        <div className="image_box">
          <img src="http://localhost:5173/src/assets/blog-post/04.jpg" alt="" />
        </div>
        <div className="post-auth-info">
            <span><FaRegUser/>admin</span>
            <span><FaUsers /> 140k</span>
        </div>
        <div className="post_details">
          <h4>Lorem ipsum dolor sit amet consectetur </h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nemo ex provident sapiente </p>
        </div>
      </Link>
     <Link to="/singlepost/jhfgdshgfhdsg" className="related_post_card">
        <div className="image_box">
          <img src="http://localhost:5173/src/assets/blog-post/04.jpg" alt="" />
        </div>
        <div className="post-auth-info">
            <span><FaRegUser/>admin</span>
            <span><FaUsers /> 140k</span>
        </div>
        <div className="post_details">
          <h4>Lorem ipsum dolor sit amet consectetur </h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nemo ex provident sapiente </p>
        </div>
      </Link>
     <Link to="/singlepost/jhfgdshgfhdsg" className="related_post_card">
        <div className="image_box">
          <img src="http://localhost:5173/src/assets/blog-post/04.jpg" alt="" />
        </div>
        <div className="post-auth-info">
            <span><FaRegUser/>admin</span>
            <span><FaUsers /> 140k</span>
        </div>
        <div className="post_details">
          <h4>Lorem ipsum dolor sit amet consectetur </h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nemo ex provident sapiente </p>
        </div>
      </Link>
     <Link to="/singlepost/jhfgdshgfhdsg" className="related_post_card">
        <div className="image_box">
          <img src="http://localhost:5173/src/assets/blog-post/04.jpg" alt="" />
        </div>
        <div className="post-auth-info">
            <span><FaRegUser/>admin</span>
            <span><FaUsers /> 140k</span>
        </div>
        <div className="post_details">
          <h4>Lorem ipsum dolor sit amet consectetur </h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nemo ex provident sapiente </p>
        </div>
      </Link>
     <Link to="/singlepost/jhfgdshgfhdsg" className="related_post_card">
        <div className="image_box">
          <img src="http://localhost:5173/src/assets/blog-post/04.jpg" alt="" />
        </div>
        <div className="post-auth-info">
            <span><FaRegUser/>admin</span>
            <span><FaUsers /> 140k</span>
        </div>
        <div className="post_details">
          <h4>Lorem ipsum dolor sit amet consectetur </h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nemo ex provident sapiente </p>
        </div>
      </Link>
     <Link to="/singlepost/jhfgdshgfhdsg" className="related_post_card">
        <div className="image_box">
          <img src="http://localhost:5173/src/assets/blog-post/04.jpg" alt="" />
        </div>
        <div className="post-auth-info">
            <span><FaRegUser/>admin</span>
            <span><FaUsers /> 140k</span>
        </div>
        <div className="post_details">
          <h4>Lorem ipsum dolor sit amet consectetur </h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nemo ex provident sapiente </p>
        </div>
      </Link>
      
     </div>
    </div>
  )
}

export default RelatedPost