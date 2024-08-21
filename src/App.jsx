import React from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Catagori from './pages/catagori/Catagori';
import SinglePost from './pages/singlePost/SinglePost';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Layout from './layout/Layout';



const route = createBrowserRouter([
 {
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },{
      path:"/catagori",
      element:<Catagori/>
    }
    ,{
      path:"/singlepost",
      element:<SinglePost/>
    },{
      path:"*",
      element:<PageNotFound/>
    }
  ]
 }
]);

const App = () => {
  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default App