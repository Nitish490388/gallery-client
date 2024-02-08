import React, { useState } from "react";
import Input from "../components/Input";
import { FcGoogle } from 'react-icons/fc';
import { toast } from "react-toastify";
import axiosClient from "../utils/axiosClient.js";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  document.title = "Signup | Login";
  const [variant, setVariant] = useState('login');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    if (variant === 'login') {
      setVariant('register');
    } else {
      setVariant('login');
    }
  }

  const handleAuth = async (e) => {
    try {
      if (variant === 'register') {
        const response = await axiosClient.post('/auth/signup', { name, email, password });
        console.log(response);
        toast.success("Success");

      }
      else {
        const response = await axiosClient.post('/auth/login', { email, password });
        console.log(response);
        toast.success("Success");

      }
      navigate("/create");
    } catch (error) {
      console.log(error);
      toast.error("Something gone wrong in signup.")
    }


  }


  return (
    <div className="relative h-[100vh] w-[100vw] overflow-scroll flex items-center justify-center">

      <div className="bg-inherit bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
        <h2 className="text-white text-4xl mb-8 font-semibold">
          {variant === 'login' ? 'Sign in' : 'Register'}
        </h2>
        <div className="flex flex-col gap-4">
          {variant === 'register' && (
            <Input
              id="name"
              type="text"
              label="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <Input
            id="email"
            type="email"
            label="Email address or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleAuth} className="bg-green-600 py-3 text-white rounded-md w-full mt-10 hover:bg-green-700 transition">
          {variant === 'login' ? 'Login' : 'Sign up'}
        </button>
        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
            <FcGoogle size={32} />
          </div>
          {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
              <FaGithub size={32} />
            </div> */}
        </div>
        <div>
          <p className="text-neutral-500 mt-12 text-center">
            {variant === 'login' ? 'First time using R&G Fiesta ?' : 'Already have an account?'}
            <span onClick={handleClick} className="text-white ml-1 hover:underline cursor-pointer">
              {variant === 'login' ? 'Create an account' : 'Login'}
            </span>
            .
          </p>
        </div>
      </div>

    </div>
  );
};

export default Auth;
