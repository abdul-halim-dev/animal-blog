import { useEffect, useState } from 'react';
import PostCard from '../../component/postCard/PostCard'
import axios from 'axios';
const Home =()=>{
    const [showPosts, setShowPosts] = useState([]);

    useEffect(()=>{
        const postFecthing = async ()=>{
            try {
                const data = await axios.get('http://localhost:5173/src/server/posts.json');
                setShowPosts(data.data.filter((item)=>item.id <=15));
            } catch (error) {
                console.log(error)
            }
        }
        postFecthing();
    },[]);
    return(
        <div className="home_container">
            {
                showPosts.map((item)=>(
                    <PostCard key={item.id} info={item}/>
                ))
            }
            
            <div className="button_group">
                <button className='load_more_btn'>Load More</button>
            </div>
        </div>
        
    )
}

export default Home;