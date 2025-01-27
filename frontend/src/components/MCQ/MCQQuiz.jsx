/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Check} from "lucide-react";
import CompletionPopup from "./SubmitAllModal";
import SubmitAllModal from "./SubmitAllModal";


function MCQQuiz() {
 
    // At the top of your MCQQuiz component, add:
// const [showCompletionPopup, setShowCompletionPopup] = useState(false);

// // Modify your handleAllSubmit function:
// const handleAllSubmit = () => {
//   setShowCompletionPopup(true);
// };

// // Add this right before the closing </div> of your component:
// {showCompletionPopup && (
//   <CompletionPopup onClose={() => setShowCompletionPopup(false)} />


// )}
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);



  const questions = [
    {
      question: "What does the acronym 'REST' stand for in web services?",
      options: [
        "Recursive Secure Transaction",
        "Representational State Transfer",
        "Reliable Secure Transmission",
        "Regular State Transition",
      ],
      correctAnswer: "Representational State Transfer",
    },
    {
      question:
        "Which protocol is commonly used for secure data transmission over the web?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      correctAnswer: "HTTPS",
    },
    {
      question:
        "Which protocol is commonly used for secure data transmission over the web?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      correctAnswer: "HTTPS",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];


  const handleAnswerSelect = (answer) => {
    if (!showResult) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowResult(true);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

//   const handleAllSubmit = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setSelectedAnswer(null);
//       setShowResult(false);
//     }
//   };

  const getOptionClassName = (option) => {
    let baseClass = "p-10 text-[16px] eading-[24px] font-medium font-poppins  rounded-[20px] shadow-sm shadow-[#B120301A] text-center border transition-all ";

    if (!showResult && selectedAnswer === option) {
      return baseClass + "border-2 border-black";
    }

    if (showResult && selectedAnswer === option) {
      if (option === currentQuestion.correctAnswer) {
        return baseClass + "border-2 border-[#1EFF00] bg-white text-[#1EFF00]";
      } else {
        return baseClass + "border-2 border-[#DB0000] bg-white text-[#DB0000]";
      }
    }

    return baseClass + "border-gray-200 hover:border-gray-300";
  };

  const [showModal, setShowModal] = useState(false);

// Modify your handleAllSubmit function:
const handleAllSubmit = () => {
  setShowModal(true);
};


  return (

    <div className="min-h-screen  bg-white p-4 md:p-6">
      {/* Role Selection Header */}


      <div className="max-w-[650px] mx-auto p-4 mb-24">
        <div className="bg-white rounded-full border border-[#B12030] p-1.5 flex flex-col sm:flex-row gap-2">
          {/* Current Role Button */}
          <div className="flex">
            <button className=" bg-red-700 text-white rounded-full py-3 px-5 flex items-center gap-4">
              <div className="flex items-center  gap-3">
                <div className=" rounded-full flex items-center justify-center">
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 20 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.00012207 27.5H7.0698C7.38296 26.1411 7.55326 25.1648 7.59822 24.7284C7.59822 24.7284 7.73582 21.3546 4.43434 21.6444C4.43434 21.6444 0.666139 21.5691 0.0369059 26.1646C0.0369059 26.1646 0.0507254 26.6349 0.00012207 27.5Z"
                      fill="#255CAA"
                    />
                    <path
                      d="M11.668 15.7607H7.9845V20.9298H11.668V15.7607Z"
                      fill="#F8B78F"
                    />
                    <path
                      d="M18.1599 23.1639C17.1353 21.5021 15.5248 21.0513 15.5248 21.0513L11.6653 19.5525H7.98179L4.12348 21.0513C4.12348 21.0513 2.51332 21.5021 1.4884 23.1639H18.1599Z"
                      fill="#F8B78F"
                    />
                    <path
                      d="M17.8659 27.499L18.9151 25.3112C18.4186 21.8581 15.5235 21.0511 15.5235 21.0511L12.5798 19.9075L9.22047 21.1029L6.97816 19.9413L4.12218 21.0511C4.12218 21.0511 1.22748 21.8581 0.730591 25.3112L1.49081 27.499H17.8659Z"
                      fill="#5D5FAA"
                    />
                    <path
                      d="M20.0022 27.4996C19.2579 25.201 18.604 23.6262 18.3128 23.0769C18.3128 23.0769 16.566 20.2404 14.0306 22.4761C14.0306 22.4761 11.5814 24.222 12.4344 27.4996H20.0022Z"
                      fill="#255CAA"
                    />
                    <path
                      d="M4.24889 8.41352C4.16403 7.71021 4.09221 7.46659 4.0747 5.79921C4.06594 5.01266 4.21385 3.82578 5.14554 3.72539C6.43807 3.58665 6.83705 5.92674 6.91276 6.941C7.01806 8.33864 6.68739 9.84769 6.43028 11.2162C6.33783 11.7103 6.34737 12.6966 5.81759 12.9354C5.36333 13.1394 5.44079 13.2155 5.20899 12.8576C4.6508 11.9962 4.36839 9.40983 4.24889 8.41352Z"
                      fill="#602B15"
                    />
                    <path
                      d="M4.32358 15.0411C4.83448 17.1366 5.73542 17.7148 5.73542 17.7148L6.94231 17.9619C7.63752 17.8691 8.83584 17.5734 8.83584 17.5734C11.5929 16.5904 12.5087 16.6497 13.0778 15.1464C13.0961 15.0997 14.9941 7.33325 14.9941 7.33325C15.3469 3.29477 11.316 2.45476 10.7062 2.34988C10.1048 2.20481 6.26519 1.08506 5.13168 4.96174C5.13168 4.96174 3.45612 9.454 4.32358 15.0411Z"
                      fill="#F8B78F"
                    />
                    <path
                      d="M12.1977 15.825C11.0889 16.7236 9.21173 17.3135 7.82968 17.4665C5.37697 17.7379 4.82403 15.8434 4.40247 13.8381C4.43925 14.2997 4.4883 14.7683 4.56323 15.2497C5.03987 17.2051 5.8797 17.7448 5.8797 17.7448L7.00601 17.9756C7.65451 17.8882 8.77245 17.6122 8.77245 17.6122C11.3445 16.6948 12.1979 16.751 12.7292 15.3486C12.7324 15.3431 12.766 15.2044 12.8234 14.9736C12.6543 15.3003 12.462 15.612 12.1977 15.825Z"
                      fill="#F8B78F"
                    />
                    <path
                      d="M3.21199 2.67027C3.38638 2.38054 3.67034 2.43032 3.81145 2.05653C3.92959 1.74293 3.69428 1.28772 3.90234 1.01676C4.21588 0.607877 5.31028 0.722341 5.70187 0.856189C6.39553 1.09205 6.53255 1.49543 7.27836 1.14551C7.91363 0.847415 8.04656 0.455258 8.85777 0.60604C9.45197 0.716832 9.85213 1.11776 10.5304 1.00024C11.1295 0.896996 11.5131 0.448729 12.1863 0.504839C12.5117 0.532384 12.8743 0.584209 13.1168 0.858229C13.3955 1.17346 13.2178 1.32812 13.3693 1.66193C13.5619 2.08714 13.386 1.97349 13.7626 2.23976C13.9816 2.39482 14.327 2.28668 14.5312 2.5048C15.0721 3.08181 14.4601 3.91183 14.7821 4.47538C15.1227 5.07238 16.0878 4.69063 16.2873 5.54575C16.3706 5.90403 16.0676 6.19928 16.1281 6.53797C16.2091 6.99032 16.3642 6.86627 16.5796 7.21945C16.899 7.74505 17.0236 8.14598 16.6071 8.774C16.1413 9.47507 15.9697 9.5324 15.9707 10.5046C15.9714 11.5595 15.8455 11.442 15.2435 12.1353C14.7455 12.708 14.8794 13.3842 14.3167 13.8959C14.1098 14.0844 13.8329 14.1179 13.6032 14.3872C13.399 14.6264 13.3547 14.9889 13.0684 15.2077C12.9512 13.9794 13.6267 12.8135 13.6838 11.5793C13.7332 10.5148 13.669 8.47325 13.0767 7.59182C12.3584 6.52267 10.5937 6.86729 9.50121 6.86851C8.11877 6.87014 1.46579 5.56901 3.21199 2.67027Z"
                      fill="#602B15"
                    />
                    <path
                      d="M13.2083 11.6902C13.2083 11.6902 13.8895 10.1328 14.9615 11.0558C14.9615 11.0558 15.4493 11.4551 14.8479 12.4961C14.8479 12.4961 13.9759 13.995 12.9298 13.1656L13.2083 11.6902Z"
                      fill="#F8B78F"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold tetx-[12px] leading-[18px] font-poppins">Current Role</div>
                  <div className="font-medium tetx-[10px] leading-[15px] font-poppins">Software Engineer</div>
                </div>
              </div>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          {/* Senior Role Button */}
          <div className="flex">
            <button className=" bg-white rounded-full py-3 px-5 flex items-center  gap-10 hover:bg-gray-50 transition-colors">
              <div className="flex items-center  gap-3">
                <div className=" rounded-full flex items-center justify-center">
                  <svg
                    width="21"
                    height="27"
                    viewBox="0 0 21 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.03756 26.9974C3.13281 25.9055 2.01303 25.0743 0.700305 25.1077C0.700305 25.1077 0.60005 25.7018 0.5 26.9974H4.03756Z"
                      fill="#002C43"
                    />
                    <path
                      d="M12.1461 16.2361H8.27344V21.2602H12.1461V16.2361Z"
                      fill="#F8B78F"
                    />
                    <path
                      d="M18.9711 23.4316C17.894 21.8157 16.201 21.3772 16.201 21.3772L12.1437 19.9204H8.27102L4.21582 21.3772C4.21582 21.3772 2.52274 21.8157 1.44531 23.4316H18.9711Z"
                      fill="#F8B78F"
                    />
                    <path
                      d="M18.9975 26.9975L19.7652 25.5187C19.2424 22.1628 16.1994 21.3772 16.1994 21.3772L12.1421 19.9204L9.57335 21.4284L8.26943 19.9204L4.21423 21.3772C4.21423 21.3772 1.17078 22.1628 0.648438 25.5187L1.20434 26.9975H18.9975Z"
                      fill="#90C1E8"
                    />
                    <path
                      d="M5.39065 16.2923C6.19657 18.2453 7.21058 18.683 7.21058 18.683L8.50018 18.7615C9.21301 18.5802 10.4234 18.136 10.4234 18.136C13.17 16.8241 14.131 16.7605 14.5298 15.2364C14.5423 15.1896 15.5092 7.45295 15.5092 7.45295C15.3517 3.51421 11.0399 3.23755 10.3909 3.21713C9.74518 3.15704 5.59709 2.58569 4.92027 6.47188C4.92027 6.47188 3.75875 11.0226 5.39065 16.2923Z"
                      fill="#F8B78F"
                    />
                    <path
                      d="M5.42299 15.3053C5.97091 16.3244 6.97305 17.5084 8.29498 17.4941C9.27891 17.4828 10.4324 17.0743 11.338 16.7054C12.3136 16.3072 13.561 15.9385 14.4042 15.3303C14.4457 15.3005 14.4852 15.2672 14.5265 15.2365C14.5269 15.2357 14.5269 15.2357 14.5277 15.2345C14.5402 15.1877 15.5072 7.45099 15.5072 7.45099C15.3496 3.51225 11.0379 3.2356 10.3889 3.21517C9.74315 3.15508 5.59506 2.58374 4.91824 6.46993C4.91824 6.46993 3.91569 10.4107 5.0901 15.2024C5.20489 15.1504 5.34749 15.1645 5.42299 15.3053Z"
                      fill="#F8B78F"
                    />
                    <path
                      d="M13.5222 16.3623C11.9245 17.0882 11.0099 17.5855 9.77702 18.0008C7.8912 18.6364 6.89664 18.7473 5.37891 16.2546C5.38259 16.2671 5.38484 16.279 5.38893 16.2919C6.19486 18.2449 7.20886 18.6826 7.20886 18.6826L8.49846 18.7612C9.21129 18.5799 10.4217 18.1357 10.4217 18.1357C12.5735 17.1072 13.6274 16.8438 14.1753 16.0444C13.9654 16.1593 13.7469 16.2604 13.5222 16.3623Z"
                      fill="#E6AB86"
                    />
                    <path
                      d="M4.30935 4.53349C3.95559 6.44188 4.54914 11.4948 4.54914 11.4948C4.54914 11.4948 4.71344 6.43236 6.11966 5.34778C6.11966 5.34778 7.52916 4.70563 8.52373 5.509C8.52373 5.509 13.2253 3.74479 13.8505 8.37407L14.4559 12.4074L14.528 15.2354C17.5027 11.723 17.2858 6.77604 17.2858 6.77604C17.2858 6.77604 17.8094 3.57741 15.4456 3.15262C15.4456 3.15262 15.6514 0.479528 11.0098 0.0779391C11.0098 0.0779391 11.6781 0.939817 11.9246 1.51295C11.9246 1.51295 11.0966 -0.403968 6.66083 0.0779391C6.66083 0.0779391 7.77775 0.404167 8.27493 1.16471C8.27493 1.16471 7.31187 1.60973 4.51968 1.05168e-08C4.51968 1.05168e-08 1.4214 2.80438 4.30935 4.53349Z"
                      fill="#38317D"
                    />
                    <path
                      d="M14.2113 11.8874C14.2113 11.8874 14.7195 10.2963 15.9567 11.0437C15.9567 11.0437 16.5169 11.364 16.0255 12.4474C16.0255 12.4474 15.3118 14.0064 14.1133 13.3448L14.2113 11.8874Z"
                      fill="#F8B78F"
                    />
                    <path
                      d="M13.8516 8.37354C13.8516 8.37354 14.2096 11.0605 13.8923 12.5503L14.447 12.5848C14.447 12.5848 14.4821 10.7069 15.4573 10.561L13.8516 8.37354Z"
                      fill="#0E074B"
                    />
                    <path
                      d="M20.4996 27.0003C19.9834 25.3943 19.5973 24.3568 19.4971 24.1711C19.4971 24.1711 18.586 21.1185 15.1849 22.205C15.1849 22.205 12.513 23.4953 13.6831 27.0003H20.4996Z"
                      fill="#003A54"
                    />
                    <path
                      d="M6.74617 26.997L6.90392 20.4111L4.21423 21.3767C4.21423 21.3767 1.17078 22.1623 0.648438 25.5182L1.20434 26.997H6.74617Z"
                      fill="#003A54"
                    />
                    <path
                      d="M18.9999 26.9975L19.7676 25.5187C19.2448 22.1628 16.2018 21.3772 16.2018 21.3772L12.1445 19.9204V26.9975H18.9999Z"
                      fill="#003A54"
                    />
                    <path
                      d="M8.26953 21.395H11.0044V22.6898L10.0766 23.5888H8.80845L8.26953 22.4919V21.395Z"
                      fill="#A25A84"
                    />
                    <path
                      d="M9.57812 21.4274L12.1467 19.1143L14.269 20.4091L11.4645 23.0905L9.57812 21.4274Z"
                      fill="#C2DDF4"
                    />
                    <path
                      d="M9.57618 21.428L8.23031 19.386L6.11719 20.4702L7.70203 22.9404L9.57618 21.428Z"
                      fill="#C2DDF4"
                    />
                    <path
                      d="M4.46513 26.9975L4.30206 23.5896H3.03395L2.69922 26.9975H4.46513Z"
                      fill="#A25A84"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold tetx-[12px] leading-[18px] font-poppins">Senior Role</div>
                  <div className="font-semibold tetx-[10px] leading-[15px] font-poppins">
                    Senior Software Engineer
                  </div>
                </div>
              </div>
              <ChevronDown className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Question Section */}
      <div className="max-w-[1167px] mx-auto">
        <div className="text-center text-[14px] leading-[21px] font-normal font-poppins text-[#8E98A880]/50 mb-6">
          Question {currentQuestionIndex + 1} of 10
        </div>
<div className="p-[50px] max-w-[862px] border border-[#B120301A]/10 rounded-[40px] mx-auto shadow-md shadow-[#B120301A]/10 mb-10">
        <div className="text-[22px] leading-[33px] font-medium font-poppins text-[#564D4D] text-center mb-8">
          {/* What does the acronym "REST" stand for in web services? */}
          {currentQuestion.question}
        </div>
        </div>
        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
            
              className={getOptionClassName(option)}
            >
              <div className="flex items-center justify-center gap-2">
        
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Submit Button */}
 
        {!showResult && (
          <div className="flex justify-center mb-8">
            <button
              onClick={handleSubmit}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Submit Answer
            </button>
          </div>
        )}

        {/* Result Section */}
        {showResult && (
          <div className="fixed bottom-0 left-0 right-0 h-[150px] bg-black text-white px-4 py-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
          
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <>
                    <div className="bg-green-500 rounded-full p-2">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-green-400 font-bold">Correct :)</div>
                      <div>{selectedAnswer}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" rounded-full p-2">
                      {/* <X className="h-6 w-6" /> */}
                      <svg
                        width="103"
                        height="94"
                        viewBox="0 0 103 94"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          y="0.5"
                          width="103"
                          height="93"
                          fill="url(#pattern0_62_2736)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_62_2736"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_62_2736"
                              transform="matrix(0.00155675 0 0 0.00172414 -0.000493806 0)"
                            />
                          </pattern>
                          <image
                            id="image0_62_2736"
                            width="643"
                            height="580"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <div className="text-red-400 font-bold">Wrong :(</div>
                      <div>{selectedAnswer}</div>
                    </div>
                  </>
                )}
              </div>
            
              {currentQuestionIndex < questions.length - 1 ? (
                <>
                  <button
                    onClick={handleNext}
                    className="bg-red-600 text-white px-4 py-2 rounded-full"
                  >
                    NEXT Question
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleAllSubmit}
                    className="bg-red-600 text-white px-4 py-2 rounded-full"
                  >
                    Submit All
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <SubmitAllModal 
      isOpen={showModal} 
      onClose={() => setShowModal(false)} 
    />
    </div>
  );
}

export default MCQQuiz;
