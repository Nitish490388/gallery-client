import React, { useEffect, useState } from "react";
import userPic from "../assets/download.png";
import { useNavigate } from "react-router-dom";
import { MdLinkOff, MdLogout } from "react-icons/md";
import axiosClient from "../utils/axiosClient";
import { toast } from "react-toastify";
import { getUser } from "../../redux/slices/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosClient.get("/user/getUser");
        //console.log(response.data.result.avatar.url);
        setAvatar(response.data.result.avatar.url);
      } catch (error) {
        // Handle errors if needed...
        console.error(error);
      }
    }

    fetchData();
  }, []);


  const handleLogout = async () => {
    try {
      const response = await axiosClient.post("/auth/logout");
      toast.success(response.data.result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full flex items-center justify-between px-4 md:px-10 bg-neutral-700 py-4 ">
      <div className="flex gap-5 justify-center items-center">
        <h2 className="font-bold text-4xl" onClick={() => navigate('/')}>G💚R</h2>
      </div>
      <div className="flex items-center gap-7">
        <button onClick={handleLogout} className="btn-secondary text-xl"><MdLogout /></button>
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden"
          onClick={() => {
            navigate("/profile");
          }}
        >
          <img className="w-full h-full object-cover" src={avatar ? avatar : userPic} alt="user pic" />
        </div>
      </div>
    </div>
  );
};

export default Header;
