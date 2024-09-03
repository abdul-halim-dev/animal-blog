import React, { useState } from 'react'
import { FaRegUser, FaUsers } from 'react-icons/fa'
import {Link } from 'react-router-dom'

const PostCard = ({info}) => {
  return (
    <Link to={`/singlepost/${info.id}`}className='post_card_col'>
        <div className="image_box">
            <img src={info.img} alt="" />
        </div>
        <div className="post-auth-info">
            <span><FaRegUser/>admin</span>
            <span><FaUsers /> 140k</span>
        </div>
        <div className="post-info">
            <h2>{info.title.substring(0, 30)}....</h2>
            <p>{info.decs.substring(0, 200)}....</p>
        </div>
    </Link>
  )
}

export default PostCard