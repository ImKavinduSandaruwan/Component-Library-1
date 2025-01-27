/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import login_bg from "../assets/Login_bg.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex h-screen w-full bg-white ">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-16 py-6 mb-5">
        <div className="w-full max-w-[500px]  space-y-8 rounded-[40px]  bg-[#FBE6E61A]/10 p-8 shadow-xl">
          <h1 className="text-[36px] leading-[54px] font-poppins  font-semibold text-[#263238] mb-8 text-center ">
            Welcome Back!
          </h1>

          <form onSubmit={handleSubmit} className="">
            <div className="space-y-12">
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-3 py-2 border-b text-[16px] leading-[24px] font-semibold font-poppins text-[#564D4D80]/50 border-gray-300 focus:border-red-600 outline-none"
                  placeholder="email"
                />
                {/* <Mail className="absolute right-3 top-2 h-5 w-5 text-gray-400" /> */}
                <div className="absolute right-3 top-2 h-5 w-5 text-gray-400">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6ZM5.519 6L12 11.671L18.481 6H5.519ZM20 7.329L12.659 13.753C12.4766 13.9128 12.2424 14.0009 12 14.0009C11.7576 14.0009 11.5234 13.9128 11.341 13.753L4 7.329V18H20V7.329Z"
                      fill="#263238"
                      fillOpacity="0.5"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type="password"
                  className="w-full px-3 py-2 border-b text-[16px] leading-[24px] font-semibold font-poppins text-[#564D4D80]/50 border-gray-300 focus:border-red-600 outline-none"
                  placeholder="password"
                />
                {/* <Lock className="absolute right-3 top-2 h-5 w-5 text-gray-400" /> */}
                <div className="absolute right-3 top-2 h-5 w-5 text-gray-400 ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17C11.4696 17 10.9609 16.7893 10.5858 16.4142C10.2107 16.0391 10 15.5304 10 15C10 13.89 10.89 13 12 13C12.5304 13 13.0391 13.2107 13.4142 13.5858C13.7893 13.9609 14 14.4696 14 15C14 15.5304 13.7893 16.0391 13.4142 16.4142C13.0391 16.7893 12.5304 17 12 17ZM18 20V10H6V20H18ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 8.89 4.89 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z"
                      fill="#263238"
                      fillOpacity="0.5"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-[#B12030] rounded text-red-600 focus:ring-red-500"
                  />
                  <label className="ml-2 text-[14px] leading-[21px] font-semibold font-poppins text-[#564D4DB2]/70">
                    Remember Me
                  </label>
                </div>
                <button
                  type="button"
                  className="text-[14px] leading-[21px] font-semibold font-poppins  text-[#B12030] hover:text-red-500"
                >
                  Forget Password?
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className=" py-3 px-16 bg-[#B12030] hover:bg-red-700 text-[20px] leading-[30px] font-poppins  text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Log in
                </button>
              </div>
            </div>
            <div className="text-center  text-[14px] leading-[21px] font-semibold font-poppins text-[#564D4DB2]/70 mt-40">
              Don't have an account yet?{" "}
              <button onClick={()=>navigate("/")} className="text-[#B12030] hover:text-red-500 text-[14px] leading-[21px] font-semibold font-poppins  underline">
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
