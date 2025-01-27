/* eslint-disable no-unused-vars */

import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import signup_bg from "../../assets/SignUp_bg.svg";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className=" bg-white flex h-screen w-full">
      {/* <div className="w-full  flex  "> */}
        {/* Form Section */}
        <div className="w-full md:w-1/2  flex items-center justify-center lg:px-16 px-6 lg:py-6 py-10  mb-5">
          <div className="bg-[#FBE6E61A]/10 max-w-[500px] w-full rounded-[50px] p-8 shadow-xl ">
            <h1 className="lg:text-[36px] text-[24px] leading-[54px] font-poppins text-center font-semibold text-[#263238] mb-8">
              Create an Account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="user name"
                  className="w-full border-b-2 text-[16px] leading-[24px] font-semibold font-poppins border-gray-200 py-2 text-[#564D4D80]/50 pl-2 pr-10 focus:outline-none focus:border-red-500 bg-transparent"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
                {/* <User
                  className="absolute right-2 top-2 text-gray-400"
                  size={20}
                /> */}
                <div className="absolute right-2 top-2 text-gray-400">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 13.5C14.7614 13.5 17 11.2614 17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5Z"
                      stroke="#564D4D"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 21.5C20 19.3783 19.1571 17.3434 17.6569 15.8431C16.1566 14.3429 14.1217 13.5 12 13.5C9.87827 13.5 7.84344 14.3429 6.34315 15.8431C4.84285 17.3434 4 19.3783 4 21.5"
                      stroke="#564D4D"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Email field */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="email"
                  className="w-full border-b-2 text-[16px] leading-[24px] font-semibold font-poppins text-[#564D4D80]/50 border-gray-200 py-2 pl-2 pr-10 focus:outline-none focus:border-red-500 bg-transparent"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {/* <Mail
                  className="absolute right-2 top-2 text-gray-400"
                  size={20}
                /> */}
                <div className="absolute right-2 top-2 text-gray-400">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6.5C2 5.96957 2.21071 5.46086 2.58579 5.08579C2.96086 4.71071 3.46957 4.5 4 4.5H20C20.5304 4.5 21.0391 4.71071 21.4142 5.08579C21.7893 5.46086 22 5.96957 22 6.5V18.5C22 19.0304 21.7893 19.5391 21.4142 19.9142C21.0391 20.2893 20.5304 20.5 20 20.5H4C3.46957 20.5 2.96086 20.2893 2.58579 19.9142C2.21071 19.5391 2 19.0304 2 18.5V6.5ZM5.519 6.5L12 12.171L18.481 6.5H5.519ZM20 7.829L12.659 14.253C12.4766 14.4128 12.2424 14.5009 12 14.5009C11.7576 14.5009 11.5234 14.4128 11.341 14.253L4 7.829V18.5H20V7.829Z"
                      fill="#263238"
                      fillOpacity="0.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Password field */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="password"
                  className="w-full border-b-2 text-[16px] leading-[24px] font-semibold font-poppins text-[#564D4D80]/50 border-gray-200 py-2 pl-2 pr-10 focus:outline-none focus:border-red-500 bg-transparent"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                {/* <Lock
                  className="absolute right-2 top-2 text-gray-400"
                  size={20}
                /> */}
                <div className="absolute right-2 top-2 text-gray-400">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.5C11.4696 17.5 10.9609 17.2893 10.5858 16.9142C10.2107 16.5391 10 16.0304 10 15.5C10 14.39 10.89 13.5 12 13.5C12.5304 13.5 13.0391 13.7107 13.4142 14.0858C13.7893 14.4609 14 14.9696 14 15.5C14 16.0304 13.7893 16.5391 13.4142 16.9142C13.0391 17.2893 12.5304 17.5 12 17.5ZM18 20.5V10.5H6V20.5H18ZM18 8.5C18.5304 8.5 19.0391 8.71071 19.4142 9.08579C19.7893 9.46086 20 9.96957 20 10.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V10.5C4 9.39 4.89 8.5 6 8.5H7V6.5C7 5.17392 7.52678 3.90215 8.46447 2.96447C9.40215 2.02678 10.6739 1.5 12 1.5C12.6566 1.5 13.3068 1.62933 13.9134 1.8806C14.52 2.13188 15.0712 2.50017 15.5355 2.96447C15.9998 3.42876 16.3681 3.97995 16.6194 4.58658C16.8707 5.19321 17 5.84339 17 6.5V8.5H18ZM12 3.5C11.2044 3.5 10.4413 3.81607 9.87868 4.37868C9.31607 4.94129 9 5.70435 9 6.5V8.5H15V6.5C15 5.70435 14.6839 4.94129 14.1213 4.37868C13.5587 3.81607 12.7956 3.5 12 3.5Z"
                      fill="#263238"
                      fillOpacity="0.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Terms checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 accent-[#B12030]  "
                  checked={formData.agreeToTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreeToTerms: e.target.checked })
                  }
                />
                <label htmlFor="terms" className="text-[14px] leading-[21px] font-semibold font-poppins text-[#564D4DB2]/70">
                  I agree to{" "}
                  <span className="text-[#B12030] text-[14px] leading-[21px] font-semibold font-poppins cursor-pointer">
                    Terms & Conditions
                  </span>
                </label>
              </div>

              {/* Submit button */}
              <div className="flex justify-center">
                <button
                  onClick={() => navigate("/details")}
                  type="submit"
                  className=" bg-[#B12030] text-white text-[20px] leading-[30px] font-poppins rounded-full px-16 py-3 font-medium hover:bg-red-600 transition-colors"
                >
                  Sign up
                </button>
              </div>
              {/* Social login section */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-[14px] leading-[21px] font-semibold font-poppins text-[#564D4D80]/50">
                    or continue
                  </span>
                </div>
              </div>

              {/* Social buttons */}
              <div className="flex justify-center space-x-1">
                <button className=" ">
                  {/* <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="w-6 h-6"
                  /> */}
                  <svg
                    width="78"
                    height="79"
                    viewBox="0 0 78 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_42)">
                      <rect
                        x="14"
                        y="10.5"
                        width="50"
                        height="50"
                        rx="5"
                        fill="white"
                      />
                      <g clipPath="url(#clip0_1_42)">
                        <path
                          d="M34.4508 21.4867C31.4533 22.5266 28.8683 24.5002 27.0755 27.1178C25.2826 29.7354 24.3764 32.8589 24.49 36.0296C24.6035 39.2003 25.7309 42.251 27.7064 44.7336C29.6819 47.2162 32.4015 48.9999 35.4657 49.8227C37.9499 50.4637 40.5526 50.4918 43.05 49.9047C45.3125 49.3965 47.4042 48.3094 49.1203 46.75C50.9065 45.0774 52.2029 42.9496 52.8703 40.5953C53.5958 38.0352 53.7249 35.3428 53.2477 32.725H39.2977V38.5117H47.3766C47.2151 39.4347 46.8691 40.3155 46.3593 41.1016C45.8495 41.8877 45.1863 42.5629 44.4094 43.0867C43.4229 43.7393 42.3108 44.1784 41.1446 44.3758C39.9749 44.5933 38.7752 44.5933 37.6055 44.3758C36.42 44.1307 35.2985 43.6414 34.3125 42.9391C32.7285 41.8178 31.5391 40.2248 30.9141 38.3875C30.2785 36.5158 30.2785 34.4866 30.9141 32.6148C31.359 31.3028 32.0945 30.1083 33.0657 29.1203C34.177 27.9689 35.5841 27.1459 37.1324 26.7416C38.6808 26.3372 40.3106 26.3672 41.843 26.8281C43.0401 27.1956 44.1348 27.8377 45.0399 28.7031C45.9508 27.7969 46.8602 26.8883 47.768 25.9773C48.2368 25.4875 48.7477 25.0211 49.2094 24.5195C47.8279 23.2339 46.2063 22.2336 44.4375 21.5758C41.2165 20.4062 37.6922 20.3748 34.4508 21.4867Z"
                          fill="white"
                        />
                        <path
                          d="M34.4508 21.4867C37.6918 20.374 41.2162 20.4046 44.4375 21.5734C46.2066 22.2357 47.8274 23.2409 49.207 24.5313C48.7383 25.0328 48.2437 25.5016 47.7656 25.9891C46.8562 26.8969 45.9476 27.8016 45.0398 28.7031C44.1348 27.8377 43.0401 27.1956 41.8429 26.8281C40.311 26.3656 38.6813 26.3339 37.1325 26.7366C35.5838 27.1393 34.1759 27.9608 33.0633 29.1109C32.0921 30.0989 31.3566 31.2935 30.9117 32.6055L26.0531 28.8438C27.7922 25.3951 30.8033 22.7571 34.4508 21.4867Z"
                          fill="#E33629"
                        />
                        <path
                          d="M24.764 32.5703C25.0252 31.2761 25.4587 30.0227 26.0531 28.8438L30.9117 32.6148C30.2761 34.4866 30.2761 36.5158 30.9117 38.3875C29.2929 39.6375 27.6734 40.8938 26.0531 42.1563C24.5651 39.1945 24.1113 35.8199 24.764 32.5703Z"
                          fill="#F8BD00"
                        />
                        <path
                          d="M39.2977 32.7227H53.2477C53.7249 35.3405 53.5958 38.0328 52.8703 40.593C52.2029 42.9472 50.9065 45.075 49.1203 46.7477C47.5524 45.5242 45.9774 44.3102 44.4094 43.0867C45.1868 42.5624 45.8503 41.8865 46.3601 41.0995C46.87 40.3126 47.2157 39.4308 47.3766 38.507H39.2977C39.2953 36.5805 39.2977 34.6516 39.2977 32.7227Z"
                          fill="#587DBD"
                        />
                        <path
                          d="M26.0508 42.1562C27.6711 40.9062 29.2906 39.65 30.9094 38.3875C31.5356 40.2255 32.7267 41.8185 34.3125 42.9391C35.3016 43.6381 36.4255 44.1234 37.6125 44.3641C38.7822 44.5815 39.9819 44.5815 41.1516 44.3641C42.3178 44.1666 43.4299 43.7276 44.4164 43.075C45.9844 44.2984 47.5594 45.5125 49.1273 46.7359C47.4115 48.2962 45.3197 49.3841 43.057 49.893C40.5596 50.4801 37.9569 50.4519 35.4727 49.8109C33.5079 49.2863 31.6727 48.3615 30.082 47.0945C28.3984 45.7579 27.0233 44.0734 26.0508 42.1562Z"
                          fill="#319F43"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_42"
                        x="0"
                        y="0.5"
                        width="78"
                        height="78"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="2"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect1_dropShadow_1_42"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.694118 0 0 0 0 0.12549 0 0 0 0 0.188235 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_42"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_42"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_1_42">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(24 20.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className=" ">
                  {/* <img
                    src="https://www.facebook.com/favicon.ico"
                    alt="Facebook"
                    className="w-6 h-6"
                  /> */}
                  <svg
                    width="78"
                    height="79"
                    viewBox="0 0 78 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_49)">
                      <rect
                        x="14"
                        y="10.5"
                        width="50"
                        height="50"
                        rx="5"
                        fill="white"
                      />
                      <g clipPath="url(#clip0_1_49)">
                        <path
                          d="M54 35.5C54 27.2158 47.2842 20.5 39 20.5C30.7158 20.5 24 27.2158 24 35.5C24 42.9869 29.4853 49.1925 36.6562 50.3178V39.8359H32.8477V35.5H36.6562V32.1953C36.6562 28.4359 38.8957 26.3594 42.322 26.3594C43.9631 26.3594 45.6797 26.6523 45.6797 26.6523V30.3438H43.7883C41.9249 30.3438 41.3438 31.5 41.3438 32.6863V35.5H45.5039L44.8389 39.8359H41.3438V50.3178C48.5147 49.1925 54 42.987 54 35.5Z"
                          fill="#1877F2"
                        />
                        <path
                          d="M44.8389 39.8359L45.5039 35.5H41.3438V32.6863C41.3438 31.4999 41.9249 30.3438 43.7883 30.3438H45.6797V26.6523C45.6797 26.6523 43.9631 26.3594 42.3219 26.3594C38.8957 26.3594 36.6562 28.4359 36.6562 32.1953V35.5H32.8477V39.8359H36.6562V50.3178C37.4316 50.4393 38.2152 50.5002 39 50.5C39.7848 50.5002 40.5684 50.4393 41.3438 50.3178V39.8359H44.8389Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_49"
                        x="0"
                        y="0.5"
                        width="78"
                        height="78"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="2"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect1_dropShadow_1_49"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.694118 0 0 0 0 0.12549 0 0 0 0 0.188235 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_49"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_49"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_1_49">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(24 20.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="  ">
                  {/* <img src="https://twitter.com/favicon.ico" alt="Twitter" className="w-6 h-6" /> */}
                  {/* <div></div> */}
                  <svg
                    width="78"
                    height="79"
                    viewBox="0 0 78 79"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_1_53)">
                      <rect
                        x="14"
                        y="10.5"
                        width="50"
                        height="50"
                        rx="5"
                        fill="white"
                      />
                      <g clipPath="url(#clip0_1_53)">
                        <path
                          d="M54 26.2363C52.8766 26.7341 51.6851 27.0607 50.4649 27.2055C51.7358 26.4438 52.7116 25.2375 53.1711 23.8004C51.963 24.5173 50.6412 25.0224 49.2628 25.2939C48.14 24.0978 46.5405 23.3502 44.7702 23.3502C41.3711 23.3502 38.6152 26.106 38.6152 29.5049C38.6152 29.9874 38.6696 30.4571 38.7745 30.9077C33.6593 30.6509 29.1241 28.2006 26.0884 24.4769C25.5587 25.3859 25.2552 26.4433 25.2552 27.5711C25.2552 29.7065 26.3419 31.5903 27.9933 32.6941C27.0159 32.6635 26.06 32.3995 25.2054 31.9241C25.2051 31.9499 25.205 31.9757 25.205 32.0016C25.205 34.9837 27.3266 37.4713 30.1421 38.0368C29.2358 38.2832 28.2851 38.3193 27.3627 38.1422C28.1459 40.5875 30.4189 42.3668 33.1121 42.4166C31.0057 44.0673 28.3518 45.0514 25.4682 45.0514C24.9714 45.0514 24.4815 45.0222 24 44.9654C26.7238 46.7117 29.959 47.7306 33.4348 47.7306C44.7559 47.7306 50.9466 38.352 50.9466 30.2187C50.9466 29.9518 50.9406 29.6863 50.9288 29.4224C52.1336 28.5513 53.1736 27.4724 54 26.2363Z"
                          fill="#55ACEE"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_1_53"
                        x="0"
                        y="0.5"
                        width="78"
                        height="78"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="2"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect1_dropShadow_1_53"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.694118 0 0 0 0 0.12549 0 0 0 0 0.188235 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_53"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_53"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_1_53">
                        <rect
                          width="30"
                          height="24.4922"
                          fill="white"
                          transform="translate(24 23.2539)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>

              {/* Login link */}
              <div className="text-center text-[14px] leading-[21px] font-semibold font-poppins text-[#564D4DB2]/70 ">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-[#B12030] text-[14px] leading-[21px] font-semibold font-poppins underline cursor-pointer"
                >
                  Log in
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:block md:w-1/2 lg:py-6 py-10 ">
        
          <div className="w-full  overflow-hidden">
            <img
              src={signup_bg}
              alt="Decorative waves"
                className="w-full h-full object-cover bg-cover"
            />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default SignUpForm;
