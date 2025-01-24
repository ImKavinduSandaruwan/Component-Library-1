/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import login_bg from "../assets/Login_bg.svg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center  px-16">
        <div className="w-full max-w-[580px] h-[562px] space-y-8 rounded-[40px] bg-[#FBE6E61A]/10 p-12 shadow-xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center ">Welcome Back!</h1>
          
          <form onSubmit={handleSubmit} className="">
            <div className='space-y-6'>
            <div className="relative">
              <input
                type="email"
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-red-600 outline-none"
                placeholder="email"
              />
              <Mail className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="password"
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-red-600 outline-none"
                placeholder="password"
              />
              <Lock className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded text-red-600 focus:ring-red-500"
                />
                <label className="ml-2 text-sm text-gray-600">Remember Me</label>
              </div>
              <button type="button" className="text-sm text-red-600 hover:text-red-500">
                Forget Password?
              </button>
            </div>
<div className='flex justify-center'>
            <button
              type="submit"
              className=" py-3 px-16 bg-[#B12030] hover:bg-red-700  text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Log in
            </button>
            </div>
            </div>
            <div className="text-center  text-sm text-gray-600 mt-40">
              Don't have an account yet?{' '}
              <button className="text-red-600 hover:text-red-500 font-medium">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Decorative Wave Pattern */}
      <div className="hidden md:block md:w-1/2  ">
        {/* <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            d="M0,0 C40,20 60,80 100,100 L100,0 Z"
            fill="rgba(255,255,255,0.1)"
          />
          <path
            d="M0,20 C40,40 60,100 100,80 L100,0 Z"
            fill="rgba(220,38,38,0.2)"
          />
          <path
            d="M0,40 C40,60 60,80 100,60 L100,0 Z"
            fill="rgba(220,38,38,0.3)"
          />
          <path
            d="M0,60 C40,80 60,60 100,40 L100,0 Z"
            fill="rgba(220,38,38,0.4)"
          />
          <path
            d="M0,80 C40,100 60,40 100,20 L100,0 Z"
            fill="rgba(127,29,29,0.5)"
          />
        </svg> */}
           <div className="w-full h-full  overflow-hidden">
                    <img
                      src={login_bg}
                      alt="Decorative waves"
                      className="w-full h-full object-cover bg-cover"
                    />
                  
                  </div>
      </div>
    </div>
  );
};

export default Login;