 
import { useParams } from 'react-router-dom';
import PostCard from '../../component/postCard/PostCard'
import { useEffect, useState } from 'react';
import axios from 'axios';
const Category = ()=>{
    const catId = useParams();
    const [filterPosts, setFilterPost] = useState([]);
    useEffect(()=>{
        window.scrollTo(0,0);
        const catPost = async ()=>{
            try {
                const res = await axios.get('http://localhost:5173/src/server/posts.json');
                const postData = res.data;
                const filterData = await postData.filter((item)=>item.category ===catId.id);
                setFilterPost(filterData);
            } catch (error) {
                console.log(error);
            }
        }
        catPost();
    },[catId]);
    return(
        <>
        {
            filterPosts.length === 0 ? <div>No post Upload For this Category</div> : <div className='page_layout'>
            <div className="page_header">
                <h2>Category-{catId.id.toUpperCase()}</h2>
            </div>
            <div className="category_container">
                {
                    filterPosts.map((item)=>(
                        <PostCard key={item.id} info={item}/>
                    ))
                }
                
                <div className="button_group">
                    <button className='load_more_btn'>Load More</button>
                </div>
            </div>
            </div>
        }
         </>
       
    )
}

export default Category;