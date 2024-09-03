import { FaUsers, FaRegUser } from "react-icons/fa"
import RelatedPost from "../../component/relatedPost/RelatedPost"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";


const SinglePost = () => {
  const postId  = useParams();
  
  const [postData, setPostData] = useState([]);
  useEffect(()=>{
    window.scrollTo(0,0);
      const posts = async ()=>{
          try {
            const postDataInfo = await axios.get('http://localhost:5173/src/server/posts.json');
            setPostData(postDataInfo.data.filter((item)=>item.id == postId.postid));
          } catch (error) {
            console.log(error);
          }

      }
      posts();
  },[]);

  return (
    <div className="single_post_wrapper">
      <div className="single_post_card">
        <div className="image_box">
          <img src={postData[0]?.img} alt="" />
        </div>
        <div className="post-auth-info">
            <span><FaRegUser/>{postData[0]?.author}</span>
            <span><FaUsers /> {postData[0]?.click}</span>
        </div>
      <div className="post_details">
        <h1>{postData[0]?.title}</h1>
        <p>{postData[0]?.decs}</p>
        <p>{postData[0]?.decs}</p>
        <p>{postData[0]?.decs}</p>
      </div>
      </div>
      <RelatedPost/>
      
    </div>
  )
}

export default SinglePost