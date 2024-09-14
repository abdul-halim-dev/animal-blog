import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigator = useNavigate()
  const [error, setError] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(()=>{
    const user = localStorage.getItem("user");
    setUser(user)
  },[])
  
  const [input, setInput] = useState({
    email:"",
    password:""
  });
  const userLogin=()=>{
    const currentUser = JSON.parse(user);
    if(input.email === currentUser.email && input.password === currentUser.password){
      localStorage.setItem("IsUserLogin", true);
      navigator("/admin-path");
      setError(false);

    }else{
      setError(true);
    }
  }
  const handleOnChange=(e)=>{
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(false);
  }
  return (
    <div>
      <input type="email" placeholder='email' name='email' onChange={handleOnChange}/>
      <input type="password" placeholder='password' name='password' onChange={handleOnChange}/>
      <button onClick={userLogin}>Login</button>
      {error && <span className='error'>Somethink Wrong....</span>}
    </div>
  )
}

export default Login