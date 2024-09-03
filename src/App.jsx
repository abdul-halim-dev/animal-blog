import Home from './pages/home/Home'
import Category from './pages/category/Category'
import SinglePost from './pages/singlePost/SinglePost'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import { useEffect, useState } from 'react'


const route  = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/category/:id",
        element:<Category/>
      },
      {
        path:"/singlePost/:postid",
        element:<SinglePost/>
      },{
        path:"*",
        element:<PageNotFound/>
      }
    ]
  }
])

function App() {
  const [posts, setPost] = useState([]);
  useEffect(()=>{
     const postinfo =  postData();
    //  console.log(postinfo)
  },[]);

  // console.log(posts);
  const postData =async()=>{
    try {
        const fecthData = await fetch("http://localhost:5173/src/server/posts.json").then((data)=> data.json()).then((item)=>{
            setPost(item);
        });
        return fecthData;
    } catch (error) {
      console.log(error)
    }
  }
  return (
   <RouterProvider router={route}></RouterProvider>
  )
}

export default App
