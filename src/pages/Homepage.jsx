import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const Homepage = () => {

  const dispatch = useDispatch();

  return (
    <div className="w-[100vw] h-[100vh]  bg-bgHome bg-no-repeat bg-cover bg-center">
      <div className="w-full h-full bg-gray-950 bg-opacity-80 flex items-center justify-center gap-4 select-none">
        <div className="p-6 flex flex-col gap-3 items-center justify-center ">
          <h2 className="font-bold text-3xl text-white-400 first-letter:text-green-400 text-center first-letter:text-4xl">Welcome to Guddu and Rali's wedding fiesta! 🎉</h2>
          <Link to="/create"><button className="px-4 py-2 text-white rounded-[10px] font-semibold bg-green-400 hover:bg-green-200 transition-transform">Let's go</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
