import React from "react";
import cover from "../../Images/business.jpg";

function Home() {
  return (
    <div
      className="bg-cover bg-center text-center  h-screen "
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className=" p-20 gap-10">
        <h1 className="text-4xl text-white   ">Welcome to PipsForex Limited</h1>

        <div className=" mt-10">
          <strong className=" text-black">
            At PipsForex Limited, we are committed to providing exceptional
            financial services to our clients.
            <br /> With our comprehensive range of offerings, cutting-edge
            trading platforms, and expert market analysis,
            <br /> we empower traders to navigate the dynamic world of finance
            with confidence.
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Home;
