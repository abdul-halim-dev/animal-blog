import Home from './pages/home/Home'
import Category from './pages/category/Category'
import SinglePost from './pages/singlePost/SinglePost'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import AdminLayOut from './layout/AdminLayOut'


import AdminCategory from './pages/adminPage/category/AdminCategory'
import Profile from './pages/adminPage/profile/Profile'
import Ads from './pages/adminPage/ads/Ads'
import Setting from './pages/adminPage/setting/Setting'
import Post from './pages/adminPage/posts/Post'
import User from './pages/adminPage/user/User'
import Tags from './pages/adminPage/tags/Tags'

const adminPath = "path"
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
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:`/admin-${adminPath}`,
    element:<AdminLayOut/>,
    children:[
      {
        path:`/admin-${adminPath}`,
        element:<Dashboard/>
      },
      {
        path:`/admin-${adminPath}/category`,
        element:<AdminCategory/>
      },
      {
        path:`/admin-${adminPath}/posts`,
        element:<Post/>
      },
      {
        path:`/admin-${adminPath}/users`,
        element:<User/>
      },
      {
        path:`/admin-${adminPath}/ads`,
        element:<Ads/>
      },
      {
        path:`/admin-${adminPath}/Tags`,
        element:<Tags/>
      },
      {
        path:`/admin-${adminPath}/profile`,
        element:<Profile/>
      },
      {
        path:`/admin-${adminPath}/setting`,
        element:<Setting/>
      }
    ]
  }
  ,{
    path:"*",
    element:<div>404</div>
  }
])

function App() {
  const [posts, setPost] = useState([]);
  useEffect(()=>{
    //  postData();
    //  console.log(posts)
  },[]);

  // console.log(posts);
  const postData =async()=>{
    try {
        const fecthData = await axios("http://localhost:5000/api/v1/posts");
        setPost(fecthData.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
   <RouterProvider router={route}></RouterProvider>
  )
}

export default App
