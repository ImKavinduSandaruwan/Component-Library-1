/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-xl  border-[1px] border-[#B120301A]/10 shadow-[#B120304D]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[78px]">
          {/* Logo and Left Menu Items */}
          <div className="flex items-center gap-20">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                {/* <div className="text-red-600 text-3xl font-bold mr-2">●</div> */}
                <img src={logo} alt="" className="h-[50px] w-[52px]" />
                <span className="text-[#B12030] text-[24px] font-bold leading-[24px] tracking-[-3px] font-hepta">
                  Target
                </span>
              </div>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <a
                  href="/"
                  className="text-[#B12030] leading-[16px] text-[16px] font-poppins font-normal hover:font-bold"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-black hover:text-gray-900  leading-[16px] text-[16px] font-poppins font-normal hover:font-bold"
                >
                  Interview
                </a>
                <a
                  href="/mcq"
                  className="text-black hover:text-gray-900 leading-[16px] text-[16px] font-poppins font-normal hover:font-bold"
                >
                  MCQ
                </a>
              </div>
            </div>
          </div>

          {/* Right Menu Items */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              {/* <Search className="h-5 w-5 text-gray-600" /> */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_59_33" fill="white">
                  <path d="M32.475 33.5901L22.0383 23.1534C21.205 23.8634 20.2467 24.4129 19.1633 24.8017C18.08 25.1906 16.9911 25.3851 15.8967 25.3851C13.2278 25.3851 10.9689 24.4612 9.12001 22.6134C7.27112 20.7656 6.34668 18.5073 6.34668 15.8384C6.34668 13.1695 7.27001 10.9101 9.11668 9.06008C10.9633 7.21008 13.2211 6.28396 15.89 6.28174C18.5589 6.27952 20.8189 7.20396 22.67 9.05508C24.5211 10.9062 25.4467 13.1656 25.4467 15.8334C25.4467 16.9912 25.2417 18.1117 24.8317 19.1951C24.4217 20.2784 23.8828 21.2051 23.215 21.9751L33.6517 32.4101L32.475 33.5901ZM15.8983 23.7167C18.1095 23.7167 19.9761 22.9556 21.4983 21.4334C23.0206 19.9112 23.7817 18.044 23.7817 15.8317C23.7817 13.6195 23.0206 11.7529 21.4983 10.2317C19.9761 8.71063 18.1095 7.94952 15.8983 7.94841C13.6872 7.9473 11.82 8.70841 10.2967 10.2317C8.77335 11.7551 8.01224 13.6217 8.01335 15.8317C8.01446 18.0417 8.77557 19.9084 10.2967 21.4317C11.8178 22.9551 13.6845 23.7162 15.8967 23.7151" />
                </mask>
                <path
                  d="M32.475 33.5901L22.0383 23.1534C21.205 23.8634 20.2467 24.4129 19.1633 24.8017C18.08 25.1906 16.9911 25.3851 15.8967 25.3851C13.2278 25.3851 10.9689 24.4612 9.12001 22.6134C7.27112 20.7656 6.34668 18.5073 6.34668 15.8384C6.34668 13.1695 7.27001 10.9101 9.11668 9.06008C10.9633 7.21008 13.2211 6.28396 15.89 6.28174C18.5589 6.27952 20.8189 7.20396 22.67 9.05508C24.5211 10.9062 25.4467 13.1656 25.4467 15.8334C25.4467 16.9912 25.2417 18.1117 24.8317 19.1951C24.4217 20.2784 23.8828 21.2051 23.215 21.9751L33.6517 32.4101L32.475 33.5901ZM15.8983 23.7167C18.1095 23.7167 19.9761 22.9556 21.4983 21.4334C23.0206 19.9112 23.7817 18.044 23.7817 15.8317C23.7817 13.6195 23.0206 11.7529 21.4983 10.2317C19.9761 8.71063 18.1095 7.94952 15.8983 7.94841C13.6872 7.9473 11.82 8.70841 10.2967 10.2317C8.77335 11.7551 8.01224 13.6217 8.01335 15.8317C8.01446 18.0417 8.77557 19.9084 10.2967 21.4317C11.8178 22.9551 13.6845 23.7162 15.8967 23.7151"
                  fill="black"
                />
                <path
                  d="M32.475 33.5901L31.0608 35.0043L32.477 36.4205L33.8912 35.0023L32.475 33.5901ZM22.0383 23.1534L23.4526 21.7392L22.1469 20.4335L20.7413 21.631L22.0383 23.1534ZM15.8967 25.3851V23.3851V25.3851ZM23.215 21.9751L21.7041 20.6647L20.4835 22.0722L21.8009 23.3894L23.215 21.9751ZM33.6517 32.4101L35.0679 33.8223L36.4782 32.408L35.0658 30.9958L33.6517 32.4101ZM33.8892 32.1759L23.4526 21.7392L20.6241 24.5676L31.0608 35.0043L33.8892 32.1759ZM20.7413 21.631C20.101 22.1766 19.3556 22.6078 18.4876 22.9194L19.8391 26.6841C21.1377 26.2179 22.3091 25.5502 23.3354 24.6758L20.7413 21.631ZM18.4876 22.9194C17.6098 23.2345 16.7491 23.3851 15.8967 23.3851V27.3851C17.2332 27.3851 18.5503 27.1468 19.8391 26.6841L18.4876 22.9194ZM15.8967 23.3851C13.7455 23.3851 11.9989 22.663 10.5338 21.1988L7.70622 24.028C9.9389 26.2594 12.7101 27.3851 15.8967 27.3851V23.3851ZM10.5338 21.1988C9.069 19.7349 8.34668 17.9892 8.34668 15.8384H4.34668C4.34668 19.0254 5.47325 21.7964 7.70622 24.028L10.5338 21.1988ZM8.34668 15.8384C8.34668 13.6868 9.06852 11.9393 10.5322 10.473L7.70119 7.64714C5.4715 9.88085 4.34668 12.6522 4.34668 15.8384H8.34668ZM10.5322 10.473C11.9953 9.00721 13.7408 8.28353 15.8917 8.28174L15.8883 4.28174C12.7015 4.2844 9.93137 5.41294 7.70119 7.64714L10.5322 10.473ZM15.8917 8.28174C18.0412 8.27995 19.7883 9.00179 21.2558 10.4693L24.0842 7.64086C21.8495 5.40614 19.0766 4.27909 15.8883 4.28174L15.8917 8.28174ZM21.2558 10.4693C22.7239 11.9374 23.4467 13.6847 23.4467 15.8334H27.4467C27.4467 12.6465 26.3184 9.87499 24.0842 7.64086L21.2558 10.4693ZM23.4467 15.8334C23.4467 16.7492 23.2856 17.6299 22.9612 18.4872L26.7022 19.903C27.1978 18.5936 27.4467 17.2332 27.4467 15.8334H23.4467ZM22.9612 18.4872C22.6233 19.3798 22.1979 20.0953 21.7041 20.6647L24.726 23.2854C25.5677 22.3148 26.22 21.177 26.7022 19.903L22.9612 18.4872ZM21.8009 23.3894L32.2376 33.8244L35.0658 30.9958L24.6291 20.5608L21.8009 23.3894ZM32.2355 30.9979L31.0588 32.1779L33.8912 35.0023L35.0679 33.8223L32.2355 30.9979ZM15.8983 25.7167C18.6238 25.7167 21.004 24.7561 22.9126 22.8476L20.0841 20.0192C18.9482 21.1551 17.5951 21.7167 15.8983 21.7167V25.7167ZM22.9126 22.8476C24.8213 20.9389 25.7817 18.558 25.7817 15.8317H21.7817C21.7817 17.5299 21.2198 18.8835 20.0841 20.0192L22.9126 22.8476ZM25.7817 15.8317C25.7817 13.1055 24.8213 10.7248 22.912 8.81701L20.0846 11.6465C21.2199 12.7809 21.7817 14.1336 21.7817 15.8317H25.7817ZM22.912 8.81701C21.0037 6.91003 18.624 5.94978 15.8994 5.94841L15.8973 9.94841C17.5949 9.94926 18.9486 10.5112 20.0846 11.6465L22.912 8.81701ZM15.8994 5.94841C13.1731 5.94704 10.7921 6.90794 8.88247 8.81753L11.7109 11.646C12.848 10.5089 14.2013 9.94756 15.8973 9.94841L15.8994 5.94841ZM8.88247 8.81753C6.97309 10.7269 6.01198 13.1073 6.01335 15.8327L10.0133 15.8307C10.0125 14.1362 10.5736 12.7832 11.7109 11.646L8.88247 8.81753ZM6.01335 15.8327C6.01472 18.5566 6.97514 20.9358 8.88143 22.8449L11.7119 20.0186C10.576 18.881 10.0142 17.5269 10.0133 15.8307L6.01335 15.8327ZM8.88143 22.8449C10.7894 24.7557 13.1706 25.7164 15.8977 25.7151L15.8957 21.7151C14.1983 21.7159 12.8462 21.1545 11.7119 20.0186L8.88143 22.8449Z"
                  fill="black"
                  mask="url(#path-1-inside-1_59_33)"
                />
              </svg>
            </button>
            <button className="px-5 py-2 text-[16px] leading-[24px] font-medium font-poppins text-[#B12030] border border-[#B12030] rounded-full hover:bg-red-50">
              Upload CV
            </button>
            <button onClick={()=> navigate("/login")} className="px-5 py-2 text-[16px] leading-[24px] font-medium font-poppins text-white bg-[#B12030] rounded-full hover:bg-red-700">
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 text-center sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-[#B12030] leading-[16px] text-[16px] font-poppins font-normal hover:font-bold"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 leading-[16px] text-[16px] font-poppins font-normal hover:font-bold"
            >
              Interview
            </a>
            <a
              href="/mcq"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 leading-[16px] text-[16px] font-poppins font-normal hover:font-bold"
            >
              MCQ
            </a>
          </div>
          <div className="px-5 py-2 space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 text-[16px] leading-[24px] font-medium font-poppins text-[#B12030] border border-[#B12030] rounded-full hover:bg-red-50">
              Upload CV
            </button>
            <button onClick={()=> navigate("/login")} className="w-full flex items-center  justify-center px-4 py-2 text-[16px] leading-[24px] font-medium font-poppins text-white bg-[#B12030] rounded-full hover:bg-red-700">
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
