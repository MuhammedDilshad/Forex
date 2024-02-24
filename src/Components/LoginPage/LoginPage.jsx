import React, { useState, useEffect } from "react";
import pipsforex from "../../Images/pipsforex.png";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("signupData"));

    if (Array.isArray(storedData)) {
      const user = storedData.find(
        (userData) =>
          userData.email === loginData.email &&
          userData.password === loginData.password
      );

      if (user) {
        navigate("/home");
        console.log("Login successful!");
      } else {
        console.log("Invalid email or password!");
      }
    } else {
      console.log("No user data found!");
    }
  };

  const handleNavigate = () => {
    navigate("/signup");
  };
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 max-sm:p-5 p-20">
      <div className=" max-md:p-5 p-9 bg-blue-400 text-center bg-opacity-80 shadow-lg ">
        <h1 className=" text-6xl max-md:text-3xl">LOGIN</h1>
        <div className="grid grid-rows-2  max-md:gap-5 gap-10 max-md:mt-5 mt-10">
          <input
            className="border text-white placeholder-white placeholder-opacity-100 rounded-md p-2 shadow-lg bg-transparent w-full"
            type="email"
            placeholder="ENTER YOUR MAIL ID"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <input
            className="border text-white placeholder-white placeholder-opacity-100 rounded-md p-2 shadow-lg bg-transparent w-full"
            type="password"
            placeholder="PASSWORD"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <div className="flex  gap-5 ">
            <input className="border rounded-md p-5" type="checkbox" />
            <label htmlFor="">REMEMBER ME</label>
          </div>
        </div>

        <div className="grid grid-cols-2 max-md:mt-5  mt-10 ">
          <small>
            <u>Forgot Password ?</u>
          </small>
          <small>
            <u>Couldn't Confirm Your Email</u>
          </small>
        </div>
        <button
          onClick={handleSubmit}
          className=" max-md:mt-5 mt-10 bg-white text-black py-2 px-8 rounded-md hover:bg-blue-600"
        >
          LOGIN
        </button>
      </div>
      <div className="flex flex-col items-center justify-center bg-black text-center max-md:gap-3 gap-6 pb-5 ">
        <img className="h-36 w-36" src={pipsforex} alt="" />
        <h1 className=" max-md:text-xl text-3xl">WELCOME TO PIPSFOREX</h1>
        <p>Don't Have An Account, Sign Up Now</p>
        <button
          onClick={handleNavigate}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-white hover:text-black "
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
