import React from 'react'
import {Link} from 'react-router-dom'
import { FaRegUser,FaUsers  } from "react-icons/fa";

const FeaturesCard = () => {
    const featuresPostInfo = {
        id:1,
        uId:"/2",
        imageLink:"/src/assets/blog-post/01.jpg",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit....",
        decs:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit....",
        auth:"admin",
        click:"120k"
    }
  return (
    <Link to={`/singlepost${featuresPostInfo.uId}`}className="features_card_wrapper">
        <h1>Features Post</h1>
    <div className='featuresCard'>
        <div className="image_box">
            <img src={`http://localhost:5173${featuresPostInfo.imageLink}`} alt="" />
        </div>
        <div className="post-auth-info">
            <span><FaRegUser/>{featuresPostInfo.auth}</span>
            <span><FaUsers /> {featuresPostInfo.click}</span>
        </div>
        <div className="post-info">
            <h2>{featuresPostInfo.title}</h2>
            <p>{featuresPostInfo.decs}</p>
        </div>
    </div>
    </Link>
  )
}

export default FeaturesCard