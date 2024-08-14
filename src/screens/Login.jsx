
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../FEATURES/Auth/AuthSlice"; 
import Loading from "../components/Loading";

const Login = () => {
  const {user, isError, message , isLoading} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setformData] = useState({
    email:"", 
    password :""
  })

  const {email,password} = formData

  const handleChange = e =>{
    setformData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault()
    dispatch(loginUser(formData))



  }

  useEffect(()=>{

    if(user){
      navigate('/dashboard')
    }
        if (isError && message) {
          toast.error(message);
        }

  },[user, isError, message])


    if (isLoading) {
      return <Loading />;
    }

  




  return (
    <Container sx={{ padding: "80px 0px " }}>
      <div className="container p-5 my-4 ">
        <h1 className="text-center display-3">Welcome back our fellow user😊😊</h1>
        <h1 className="text-center display-5">Login here 👇👇</h1>
        <div className="card my-3 p-2  ">
          <form onSubmit={handleSubmit}>
            <input 
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              placeholder="enter email"
              className="form-control my-2 required"
            />
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="enter password"
              className="form-control my-2 required"
            />
          </form>
          <button onClick={handleSubmit} className="btn btn-success w-100 my-2">
            Login
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
