/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Upload, ChevronLeft, ChevronRight, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignUpStepForm = () => {
  const [step, setStep] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const steps = [
    { number: 1, title: "Basic Details", isActive: true },
    { number: 2, title: "Skill Assessment", isActive: false },
    { number: 3, title: "Upload CV", isActive: true },
  ];

  const questions = [
    {
      id: "a",
      text: "Recursive Secure Transaction",
    },
    {
      id: "b",
      text: "Reliable Secure Transmission",
    },
    {
      id: "c",
      text: "Representational State Transfer",
    },
    {
      id: "d",
      text: "Regular State Transition",
    },
  ];

  const handleSubmitAssessment = () => {
    setShowResults(true);
  };

  const handleContinueToCV = () => {
    setShowResults(false);
    setStep(3);
  };

  const renderStepContent = () => {
    if (showResults && step === 2) {
      return (
        <div className="max-w-4xl mx-auto lg:px-4 px-5 text-center">
          <h2 className="text-[24px] font-semibold leading-[36px] font-poppins mb-4 mt-[130px]">
            Thank You for Completing the Assessment!
          </h2>
          <p className="text-[#564D4D] text-[16px] leading-[24px] font-medium font-poppins max-w-[754px] mx-auto mb-12">
            We are currently analyzing your responses to initialize your skill
            level. Stay tuned for the next steps in your journey!
          </p>

          <div className="absolute bg-[#564D4D80]/50 w-full "></div>
          <div className="w-full max-w-[754px] mx-auto  mt-10 mb-10">
            <div className=" border  border-[#564D4D80]/50 "></div>
          </div>

          <div className="flex justify-center gap-16 mb-12">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#1EFF001C]/10 flex items-center justify-center mx-auto mb-2">
                {/* <Check className="w-6 h-6 text-green-600" /> */}
                <svg
                  className=""
                  width="16"
                  height="14"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 5.5L2.875 4.16667L5.625 6.83333L11.125 1.5L12.5 2.83333L5.625 9.5L1.5 5.5Z"
                    fill="#1EFF00"
                    stroke="#1EFF00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-[12px] leading-[18px] font-poppins font-semibold text-[#564D4D]">
                correct answers
              </p>
              <p className="text-[14px] leading-[21px] font-poppins font-semibold text-[#564D4D]">
                4
              </p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#DB00001C]/10 flex items-center justify-center mx-auto mb-2">
                {/* <X className="w-5 h-5 text-red-600" /> */}
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.92671 6.92671L5.49971 4.49971L7.92671 2.07271C7.97321 2.02563 7.99929 1.96213 7.99929 1.89596C7.99929 1.82979 7.97321 1.76628 7.92671 1.71921L6.78021 0.572708C6.73333 0.525841 6.66975 0.499512 6.60346 0.499512C6.53717 0.499512 6.47359 0.525841 6.42671 0.572708L3.99971 2.99971L1.57271 0.572708C1.52583 0.525841 1.46225 0.499512 1.39596 0.499512C1.32967 0.499512 1.26609 0.525841 1.21921 0.572708L0.0727083 1.71921C0.0258406 1.76609 -0.000488281 1.82967 -0.000488281 1.89596C-0.000488281 1.96225 0.0258406 2.02583 0.0727083 2.07271L2.49971 4.49971L0.0727083 6.92671C0.0258406 6.97359 -0.000488281 7.03717 -0.000488281 7.10346C-0.000488281 7.16975 0.0258406 7.23333 0.0727083 7.28021L1.21921 8.42671C1.26609 8.47358 1.32967 8.4999 1.39596 8.4999C1.46225 8.4999 1.52583 8.47358 1.57271 8.42671L3.99971 5.99971L6.42671 8.42671C6.47359 8.47358 6.53717 8.4999 6.60346 8.4999C6.66975 8.4999 6.73333 8.47358 6.78021 8.42671L7.92671 7.28021C7.97358 7.23333 7.9999 7.16975 7.9999 7.10346C7.9999 7.03717 7.97358 6.97359 7.92671 6.92671Z"
                    fill="#DB0000"
                  />
                </svg>
              </div>
              <p className="text-[12px] leading-[18px] font-poppins font-semibold text-[#564D4D]">
                wrong answers
              </p>
              <p className="text-[14px] leading-[21px] font-poppins font-semibold text-[#564D4D]">
                1
              </p>
            </div>

            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#4050F680]/50 flex items-center justify-center mx-auto mb-2">
                {/* <span className="text-blue-600">%</span> */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 10 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 0.541748L0.125 2.70841V5.95842C0.125 8.96467 2.205 11.7759 5 12.4584C7.795 11.7759 9.875 8.96467 9.875 5.95842V2.70841L5 0.541748ZM6.66833 8.66675L5 7.66466L3.33708 8.66675L3.77583 6.77092L2.30792 5.50341L4.24708 5.3355L5 3.548L5.75292 5.33008L7.69208 5.498L6.22417 6.77092L6.66833 8.66675Z"
                    fill="#4050F6"
                  />
                </svg>
              </div>
              <p className="text-[12px] leading-[18px] font-poppins font-semibold text-[#564D4D]">
                total marks
              </p>
              <p className="text-[14px] leading-[21px] font-poppins font-semibold text-[#564D4D]">
                80%
              </p>
            </div>
          </div>

          <button
            onClick={handleContinueToCV}
            className="bg-[#B12030] text-white text-[16px] leading-[24px] font-medium font-poppins px-5 py-2 rounded-[20px]"
          >
            Continue
          </button>
        </div>
      );
    }

    switch (step) {
      case 1:
        return (
          <div className="max-w-7xl mx-auto lg:px-4 px-6">
            <h2 className="text-[20px] font-semibold leading-[30px] font-poppins mb-2">
              Basic Details
            </h2>
            <p className="text-[#564D4DB2]/70 text-[16px] leading-[24px] max-w-[1272px] mx-auto font-medium font-poppins mb-8">
              We'd like to know more about you! Please provide your basic
              details, including your job preferences, experience level, and
              career goals. These details will help us personalize your
              experience and match you with the best opportunities.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 p-[50px] bg-[#F1F4F8] rounded-[40px]">
                <div>
                  <label className="block mb-2 text-[#564D4D] text-[16px] leading-[24px]  font-medium font-poppins">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="w-full px-[18px] py-[17px] rounded-[100px] font-medium font-poppins text-[14px] leading-[21px] border"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[#564D4D] text-[16px] leading-[24px]  font-medium font-poppins">
                    What is your current job role?
                  </label>
                  <select className="w-full px-[18px] py-[17px] rounded-[100px] font-medium font-poppins text-[14px] leading-[21px] border">
                    <option>Select Your Job Role</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-[#564D4D] text-[16px] leading-[24px]  font-medium font-poppins">
                    How many years of experience do you have?
                  </label>
                  <select className="w-full  px-[18px] py-[17px] rounded-[100px] font-medium font-poppins text-[14px] leading-[21px] border">
                    <option>Select Your years of experience</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6 p-[50px] bg-[#F1F4F8] rounded-[40px]">
                <div>
                  <label className="block mb-2 text-[#564D4D] text-[16px] leading-[24px]  font-medium font-poppins">
                    What is your desired job role?
                  </label>
                  <select className="w-full px-[18px] py-[17px] rounded-[100px] font-medium font-poppins text-[14px] leading-[21px] border">
                    <option>Select Your Desired Job Role</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-[#564D4D] text-[16px] leading-[24px]  font-medium font-poppins">
                    Which field are you most interested in?
                  </label>
                  <select className="w-full px-[18px] py-[17px] rounded-[100px] font-medium font-poppins text-[14px] leading-[21px] border">
                    <option>Select Your Skills</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-[#564D4D] text-[16px] leading-[24px]  font-medium font-poppins">
                    How would you rate your English proficiency?
                  </label>
                  <select className="w-full px-[18px] py-[17px] rounded-[100px] font-medium font-poppins text-[14px] leading-[21px] border">
                    <option className=" ">
                      Select Your English Proficiency
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setStep(2)}
                className="bg-[#B12030] text-[16px] font-medium leading-[24px] font-poppins text-white px-[20px] py-2 rounded-[20px]"
              >
                Save & Continue
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="max-w-7xl mx-auto lg:px-4 px-6">
            <h2 className="text-[20px] font-semibold leading-[30px] font-poppins mb-2">
              Skill Assessment
            </h2>
            <p className="text-[#564D4DB2]/70 text-[16px] leading-[24px] max-w-[1272px] mx-auto font-medium font-poppins mb-8">
              The following questions are designed to evaluate your knowledge
              and skills based on the job role you selected. Answer each
              question to the best of your ability.This assessment is just a
              step to help you showcase your expertise!
            </p>

            <div className="mb-8 max-w-4xl mx-auto px-4">
              <div className="flex justify-between  items-center">
                <div>
                  <p className="text-[14px] font-medium font-poppins leading-[21px] text-[#564D4D80]/50  mb-2">
                    Question 1 of 5
                  </p>
                  <p className="mb-4 text-[#564D4D] text-[16px] leading-[24px] font-medium font-poppins">
                    What does the acronym "REST" stand for in web services?
                  </p>
                </div>
                <div className="flex justify-end items-center">
                  <button
                    onClick={handleSubmitAssessment}
                    className="bg-[#B12030] text-[16px] leading-[24px] font-medium font-poppins text-white px-5 py-2 rounded-[20px]"
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {questions.map((q) => (
                  <div
                    key={q.id}
                    className={`p-2 rounded-full  border-b-[#564D4D4D] cursor-pointer ${
                      selectedAnswer === q.id
                        ? "bg-black text-white"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedAnswer(q.id)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-[25px] h-[24px] rounded-full border border-[#564D4D] p-[16px] text-[12px] bg-white text-black flex items-center justify-center">
                        {q.id}
                      </span>
                      <span className="text-[16px] font-semibold font-poppins leading-[24px]">
                        {q.text}
                      </span>
                    </div>
                    <div className="absolute bg-white bottom "></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2">
              <button className="p-2 rounded-full bg-red-50">
                <ChevronLeft className="w-5 h-5 text-red-700" />
              </button>
              <button className="p-2 rounded-full bg-red-50">
                <ChevronRight className="w-5 h-5 text-red-700" />
              </button>
            </div>
            <div className="hidden justify-end items-center">
              <button
                onClick={handleSubmitAssessment}
                className="bg-red-700 text-white px-6 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="max-w-4xl mx-auto lg:px-4 px-6 text-center">
            <h2 className="text-[20px] leading-[30px] font-semibold font-poppins mb-2">
              Submit Your CV Here
            </h2>
            <p className="text-[#564D4D] text-[14px] leading-[21px] font-medium max-w-[882px] mx-auto font-poppins mb-8">
              Simply drag and drop your CV into the upload area or click to
              browse files on your device. Once uploaded confirm the file to
              complete the sign-up.
            </p>

            <div className="flex justify-center">
              <div className="border-2 bg-[#F1F4F8] rounded-[40px] lg:w-[666px] h-[278px] p-12 mb-8">
                <div className="flex flex-col items-center justify-center mt-12">
                  {/* <Upload className="w-12 h-12 text-gray-400 mb-4" /> */}
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.0078 42.7085L24.999 23.9585"
                      stroke="#564D4D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M42.2058 35.746C45.6294 33.3386 47.0973 28.9899 45.8332 25.0001C44.5691 21.0103 40.6982 18.8245 36.513 18.8277H34.0953C32.5148 12.6681 27.3 8.12063 20.9826 7.393C14.6651 6.66538 8.55312 9.90821 5.61364 15.5473C2.67416 21.1863 3.51587 28.0539 7.73014 32.8162"
                      stroke="#564D4D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31.6289 28.7875L24.9998 22.1584L18.3706 28.7875"
                      stroke="#564D4D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex  items-center gap-2">
                    <p className="text-[#B12030] underline text-[12px] leading-[18px] font-medium font-poppins hover:underline cursor-pointer">
                      Click to Upload
                    </p>
                    <p className="text-[#564D4D] text-[12px] leading-[18px] font-medium font-poppins">
                      or drag and drop your file here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/login")}
              className="bg-[#B12030] text-white text-[16px] leading-[24px] font-medium font-poppins px-5 py-2 rounded-[20px] mb-4"
            >
              Upload & Continue
            </button>

            <div className="text-sm">
              <span className="text-[#564D4D80]/50 text-[12px] leading-[18px] font-medium font-poppins">
                Don't have a CV?{" "}
              </span>
              <button className="text-[#B12030] hover:underline underline text-[12px] leading-[18px] font-medium font-poppins">
                Skip
              </button>
              <span className="text-[#564D4D80]/50 text-[12px] leading-[18px] font-medium font-poppins">
                {" "}
                this for now.
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="text-right lg:px-4 px-6 mb-8 max-w-7xl mx-auto">
        <div className="gap-[10px] flex flex-row justify-end">
          <span className="text-[#564D4DB2]/70 text-[14px] leading-[21px] font-semibold font-poppins">
            Already have an account?{" "}
          </span>
          <a
            href="/login"
            className="text-[#B12030] underline hover:underline text-[14px] leading-[21px] font-semibold font-poppins"
          >
            Log in
          </a>
        </div>
      </div>

      <h1 className="text-[24px] font-semibold leading-[36px] font-poppins text-center mb-12">
        {step === 1
          ? "Let's Get to Know You!"
          : "Let's Showcase Your Expertise!"}
      </h1>

      <div className="max-w-lg mx-auto px-4 mb-12">
        {/* <div className="flex justify-center items-center gap-4">
          {steps.map((s, index) => (
            <React.Fragment key={s.number}>
              <div className=" flex flex-col ">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= s.number
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {s.number}
                </div>
                <div className="text-sm ml-2">{s.title}</div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 ${
                    step > s.number ? "bg-red-600" : "bg-gray-200"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div> */}
        <div className="flex items-center">
          {steps.map((s, index) => (
            <React.Fragment key={s.number}>
              <div className="flex flex-col items-center ">
                <div
                  className={`w-7 h-7 rounded-full text-[14px] flex items-center justify-center mb-2 ${
                    step >= s.number
                      ? "bg-[#DB0000] text-white"
                      : "bg-[#564D4D1A]/10 text-gray-600"
                  }`}
                >
                  {s.number}
                </div>
                <div className="text-[12px] font-semibold leading-[18px] font-poppins text-center">
                  {s.title}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-[1.5px] relative top-[-14px]">
                  <div
                    className={`h-full ${
                      step > s.number ? "bg-[#DB0000]" : "bg-[#564D4D80]/50"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {renderStepContent()}
    </div>
  );
};

export default SignUpStepForm;
