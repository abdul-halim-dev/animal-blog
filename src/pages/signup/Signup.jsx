import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigetor = useNavigate();
  const [signSuccess, setSignSuccess] = useState(false);
  useEffect(()=>{
    const user = localStorage.getItem("IsUserLogin");
    if(user==="true"){
      navigetor('/admin/dashboard');
    }
  },[signSuccess]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    conPassword: "",
    phone: "",
  });



const {password,conPassword, ...inputValue} = input;
console.log(inputValue);



  const [show, setShow] = useState(false);
  const [conshow, setConShow] = useState(false);
  const [inputError, setInputError] = useState({
    name: false,
    email: false,
    password: false,
  });

  const inputValided = (e) => {
    if (e.target.name == "name") {
      console.log("name");
      if (input.name.length < 5) {
        console.log("name must be 5 char");
        setInputError((prev) => ({ ...prev, name: true }));
      } else {
        console.log("name ok");
        setInputError((prev) => ({ ...prev, name: false }));
      }
    } else if (e.target.name == "email") {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const res = regex.test(input.email);
      if (res) {
        setInputError((prev) => ({ ...prev, email: false }));
      } else {
        setInputError((prev) => ({ ...prev, email: true }));
      }
    } else if (e.target.name == "password") {
      let regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
      if (regex.test(input.password)) {
        setInputError((prev) => ({ ...prev, password: false }));
      } else {
        setInputError((prev) => ({ ...prev, password: true }));
      }
    } else if (e.target.name == "conPassword") {
      if (input.conPassword === input.password) {
        setInputError((prev) => ({ ...prev, conPassword: false }));
      } else {
        setInputError((prev) => ({ ...prev, conPassword: true }));
      }
    } else if (e.target.name == "phone") {
      let regex = /^(?=.*[0-9]){11,14}$/;
      if (regex.test(input.phone)) {
        setInputError((prev) => ({ ...prev, phone: false }));
      } else {
        setInputError((prev) => ({ ...prev, phone: true }));
      }
    } else {
      console.log("input is not Valid....");
    }
  };

  const handleOnChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    inputValided(e);
  };
  const handelShowPassowrd = () => {
    setShow((prev) => !prev);
  };
  const handelShowConPassowrd = () => {
    setConShow((prev) => !prev);
  };
const handelOnSignUp=()=>{
  if(inputError.name || inputError.email || inputError.password ){
    console.log("user can't Sign Up");
    console.log(inputError);
  }else{
    localStorage.setItem("user",JSON.stringify(input));
    localStorage.setItem('IsUserLogin',true);
    setSignSuccess(prev=>!prev)
  }
}
  return (
    <div className="signUp_form">
      <h1>SignUp</h1>
      <div className="form_wrapper">
        <div className="input_group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            onChange={handleOnChange}
          />
          {inputError.name ? (
            <span className="error">Name Must Be 5 Character</span>
          ) : (
            ""
          )}
        </div>
        <div className="input_group">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            onChange={handleOnChange}
          />
          {inputError.email ? 
            <span className="error">Email Must Be Valid</span>
           : 
            ""
          }
        </div>
        <div className="input_group">
          <label htmlFor="password">password</label>
          <input
            type={show ? "text" : "password"}
            id="password"
            name="password"
            placeholder="password"
            onChange={handleOnChange}
          />
          <button onClick={handelShowPassowrd}>{show ? "hide" : "Show"}</button>
          {inputError.password ? (
            <span className="error">
                  At least one lowercase alphabet i.e. [a-z] At least one
                  uppercase alphabet i.e. [A-Z] At least one Numeric digit i.e.
                  [0-9] At least one special character i.e. [‘@’, ‘$’, ‘.’, ‘#’,
                  ‘!’, ‘%’, ‘*’, ‘?’, ‘&’, ‘^’] Also, the total length must be
                  in the range [8-15]
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="input_group">
          <label htmlFor="conPassword">conPassword</label>
          <input
            type={conshow ? "text" : "password"}
            id="conPassword"
            name="conPassword"
            placeholder="conPassword"
            onChange={handleOnChange}
          />
          <button onClick={handelShowConPassowrd}>
            {conshow ? "hide" : "Show"}
          </button>
          {inputError.conPassword ? (
            <span className="error">Conpassword Must Be Match with Password</span>
          ) : (
            ""
          )}
        </div>
        <div className="input_group">
          <label htmlFor="phone">phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="phone"
            onChange={handleOnChange}
          />
          {inputError.phone ? (
            <span className="error">Phone Must Be 11/14 Number</span>
          ) : (
            ""
          )}
        </div>

        <div className="button_group">
          <button onClick={handelOnSignUp}>SignUp</button>
        </div>
        <Link to="/login">Allready Have An Account? Login</Link>
      </div>
    </div>
  );
};

export default Signup;
