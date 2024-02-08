
import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { FaGrinHearts } from "react-icons/fa";
import { BsChatHeart } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoAdd } from "react-icons/io5";

const Footbar = () => {
  const navItems = [
    {
      text: "create",
      icon: <IoAdd />
    },
    {
      text: "gallery",
      icon: <AiOutlinePicture />
    },
    {
      text: "members",
      icon: <FaGrinHearts />
    },
    {
      text: "profile",
      icon: <CgProfile />
    }
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1] || "gallery"; // Extract the first part of the path

  return (
    <div className="w-full ">
      <div className="w-full md:w-[500px] md:rounded-lg bg-neutral-700 mx-auto py-2 flex justify-evenly">
        {navItems.map((item) => (
          <div
            key={item.text}
            onClick={() => {
              navigate(`/${item.text}`);
            }}
            className={`flex justify-center items-center h-12 w-12 rounded-full transition-colors ${currentPath === item.text
              ? "bg-neutral-600 text-xl active"
              : "bg-neutral-500 text-xl hover:bg-neutral-600"
              }`}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footbar;







