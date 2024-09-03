import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="big_footer">
        <div className="brands_area">
          <div className="logo">
              <h2><span>W3</span>Mastery</h2>
          </div>
          <span className='spanText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iste!</span>
        </div>
        <div className="thanks_box">
          <h2>Thank You</h2>
          <span className='spanText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni rerum odit maiores hic porro perspiciatis corporis quis! Quasi labore, blanditiis quisquam soluta mollitia ducimus?</span>
        </div>
        <div className="follow_box">
          <h2>Follow Us</h2>
          <div className="socail_box">
            <a href="#"><FiFacebook/></a>
            <a href="#"><TfiYoutube/></a>
            <a href="#"><FaXTwitter/></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>All copy right W3 Mastery</span>
      </div>
    </footer>
  )
}

export default Footer