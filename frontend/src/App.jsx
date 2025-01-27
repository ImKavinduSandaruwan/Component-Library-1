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
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Mcq from "./pages/Mcq";

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
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/details" element={<SignUpStepForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mcq" element={<Mcq />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
