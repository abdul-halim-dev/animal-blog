import React from 'react'
import { FaRegUser,FaUsers  } from "react-icons/fa";

const MostViewPost = () => {
  return (
    <div className='most_view_post_wrapper'>
        <h1>Most Viewed Post</h1>
        <div className="post_card">
            <div className="image_box">
                <img src="http://localhost:5173/src/assets/blog-post/02.jpg" alt="" />
            </div>
            <div className="post_info">
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
        <div className="post_card">
            <div className="image_box">
                <img src="http://localhost:5173/src/assets/blog-post/02.jpg" alt="" />
            </div>
            <div className="post_info">
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
        <div className="post_card">
            <div className="image_box">
                <img src="http://localhost:5173/src/assets/blog-post/02.jpg" alt="" />
            </div>
            <div className="post_info">
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
        <div className="post_card">
            <div className="image_box">
                <img src="http://localhost:5173/src/assets/blog-post/02.jpg" alt="" />
            </div>
            <div className="post_info">
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
    </div>
  )
}

export default MostViewPost