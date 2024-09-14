import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [signSuccess, setSignSuccess] = useState(false);
    const navigetor = useNavigate();

    useEffect(()=>{
        const user = localStorage.getItem('IsUserLogin');
        // console.log(JSON.parse(user))
        if(user === "false"){
            navigetor("/login");
        }
        console.log(user);
    },[signSuccess]);

    const userLogOut =()=>{
        localStorage.setItem("IsUserLogin",false);
        setSignSuccess(prev=>!prev);
    }
  return (
    <div>
        Dashboard
    </div>
  )
}

export default Dashboard