import React, { useState } from "react";
import pipsforex from "../../Images/pipsforex.png";
import { useNavigate } from "react-router-dom";
function SignupPage() {
  const [initialData, setInitialData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
    partnercode: "",
    funds: false,
    security: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInitialData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegister = () => {
    const existingData = JSON.parse(localStorage.getItem("signupData")) || [];

    const isExistingUser = existingData.some(
      (user) =>
        user.email === initialData.email &&
        user.password === initialData.password
    );

    if (isExistingUser) {
      console.log("A user with the same email and password already exists.");
      return;
    }

    const updatedData = [...existingData, initialData];

    localStorage.setItem("signupData", JSON.stringify(updatedData));

    console.log("Form data registered:", initialData);

    setInitialData({
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmpassword: "",
      partnercode: "",
      funds: false,
      security: false,
    });

    navigate("/home");
  };

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 max-sm:p-5 p-20">
      <div className="flex flex-col items-center justify-center bg-black text-center max-md:gap-3 gap-6 pb-5 ">
        <img className="h-36 w-36" src={pipsforex} alt="" />
        <h1 className=" max-md:text-xl text-3xl">WELCOME TO PIPSFOREX</h1>
        <p>Already Have An Account ?</p>
        <button
          onClick={handleNavigate}
          className="bg-blue-600 text-white py-2 px-8 rounded-md hover:bg-white hover:text-black "
        >
          Login
        </button>
      </div>
      <div className=" max-md:p-5 p-9 bg-blue-400 text-center bg-opacity-80 shadow-lg ">
        <h1 className=" text-3xl ">REGISTER HERE</h1>
        <div className="grid grid-cols-2 justify-center gap-5 max-md:grid-cols-1 max-md:mt-5 mt-10">
          <input
            className="border text-white placeholder-white placeholder-opacity-100 rounded-md p-2 shadow-lg bg-transparent"
            type="text"
            placeholder="FIRST NAME"
            name="firstname"
            value={initialData.firstname}
            onChange={handleChange}
            required
          />
          <input
            className="border text-white placeholder-white placeholder-opacity-100 rounded-md p-2 shadow-lg bg-transparent"
            type="text"
            placeholder="LAST NAME"
            name="lastname"
            value={initialData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <input
            className="border text-white placeholder-white placeholder-opacity-100 rounded-md p-2 shadow-lg bg-transparent w-full"
            type="email"
            placeholder="ENTER YOUR MAIL ID"
            name="email"
            value={initialData.email}
            onChange={handleChange}
            required
          />
          <input
            className="border text-white placeholder-white placeholder-opacity-100 rounded-md p-2 shadow-lg bg-transparent w-full"
            type="tel"
            placeholder="ENTER YOUR PHONE NUMBER"
            name="phonenumber"
            value={initialData.phonenumber}
            onChange={handleChange}
            required
          />
          <input
            className="border text-white placeholder-white placeholder-opacity-100 rounded-md p-2 shadow-lg bg-transparent w-full"
            type="password"
            placeholder="ENTER YOUR PASSWORD HERE"
            name="password"
            value={initialData.password}
            onChange={handleChange}
            required
          />
          <input
            className="border text-white placeholder-white placeholder-opacity-100 rounded-md p-2 shadow-lg bg-transparent w-full"
            type="password"
            placeholder="REPEAT YOUR PASSWORD HERE"
            name="confirmpassword"
            value={initialData.confirmpassword}
            onChange={handleChange}
            required
          />
          <input
            className="border text-white placeholder-white placeholder-opacity-100 rounded-md p-2 shadow-lg bg-transparent w-full"
            type="text"
            placeholder="ENTER PARTNER CODE"
            name="partnercode"
            value={initialData.partnercode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-row gap-5 justify-center mt-5 text-center">
          <div className="flex  gap-5 ">
            <input
              name="funds"
              className="border rounded-md p-5"
              type="checkbox"
              checked={initialData.funds}
              onChange={handleChange}
            />
            <label htmlFor="">FUNDS & SECURITY</label>
          </div>
          <div className="flex  gap-5 ">
            <input
              name="security"
              className="border rounded-md p-5"
              type="checkbox"
              checked={initialData.security}
              onChange={handleChange}
            />
            <label htmlFor="">PRIVASY POLICY</label>
          </div>
        </div>
        <button
          onClick={handleRegister}
          type="submit"
          className=" max-md:mt-5 mt-10 bg-white text-black py-2 px-8 rounded-md hover:bg-blue-600"
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
