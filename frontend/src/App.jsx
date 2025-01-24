/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SignUpStepForm from "./components/SignUp/SignUpStepForm ";

import { useLayoutEffect } from "react";
import SignUpForm from "./components/SignUp/SignUpForm";
import Login from "./components/Login";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 1);
  }, [location.pathname]);
  return children;
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <SignUpStepForm /> */}

      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<SignUpForm />} />
            <Route path="/details" element={<SignUpStepForm />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
