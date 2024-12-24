import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    setPasswordsMatch(true);
    toast.success("Successfully registered!");
    const timer = setTimeout(() => {
      navigate('/register', { state: { fullName, email } });
    }, 2500);
    return () => clearTimeout(timer);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    toast.success("Successfully logged in!");
  };

  const handlePasswordChange = (e) => {
    const password = e.target.form.password.value;
    const confirmPassword = e.target.value;
    setPasswordsMatch(password === confirmPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 overflow-hidden">
      <div className="w-full h-full flex">
        {/* Left Section */}

        <ToastContainer position="bottom-center" autoClose={2000}/>
        {!isLogin && <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x:0 }}
            transition={{ type: "spring", duration: 2.75, bounce: 0.4 }}
            className="w-2/5 h-full flex flex-col justify-center items-center bg-gradient-to-b from-purple-400 to-pink-400 relative"
          >
            <div className="absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_0.5px,transparent_0.5px)] [background-size:16px_16px]"/>
            <p className="text-white text-6xl text-center">
              Your Journey <br /> Abroad Starts Here!
            </p>
            <p className="text-white text-center text-2xl mt-10">
              Join thousands of students <br />
              who've found their dream <br />
              universities with us.
            </p>
          </motion.div> 
        }   

        {/* Right Section */}
        {isLogin && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 2.75, bounce: 0.4 }}
            className="w-3/5 h-full flex flex-col justify-center items-center bg-white"
          >
            <form
              onSubmit={handleLogin}
              className="flex flex-col space-y-6 w-96"
            >
              <h2 className="text-3xl font-bold text-center text-blue-600">
                Login To Daltin
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="p-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-2 border border-gray-300 rounded-lg"
                required
              />
              <div className="flex justify-between items-center">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-blue-500 text-sm hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="p-3 shadow-inner rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:scale-105 active:scale-100 transition-all duration-200"
              >
                Login
              </button>
              <p className="mt-4 w-full flex justify-center items-center text-blue-500 text-lg">
            <span className="border-[0.8px] border-black mt-1 w-[150px]" />
            OR
            <span className="border-[0.8px] border-black mt-1 w-[150px]" />
          </p>
          <div className="flex w-full justify-center items-center space-x-4 mt-6">
            <div className="flex py-1 justify-center items-center w-[160px] h-fit border border-gray-300 rounded-md hover:scale-105 active:scale-100 transition-all duration-200">
              <FcGoogle size={32} />
            </div>
            <div className="flex py-1 justify-center items-center w-[160px] h-fit border border-gray-300 rounded-md hover:scale-105 active:scale-100 transition-all duration-200">
              <FaApple size={32} />
            </div>
          </div>
          <p className="text-center">
                Don't have an account yet?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Register now
                </span>
              </p>
            </form>
          </motion.div>
        )}

        {!isLogin && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 2.75, bounce: 0.4 }}
            className="w-3/5 h-full flex flex-col justify-center items-center bg-white"
          >
            <form
              onSubmit={handleRegister}
              className="flex flex-col space-y-6 w-96"
            >
              <h2 className="text-3xl font-bold text-center text-blue-600">
                Create an account
              </h2>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="p-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-2 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                onChange={handlePasswordChange}
                required
              />
              {!passwordsMatch && (
                <p className="text-red-500 text-sm mb-4">
                  Passwords do not match.
                </p>
              )}
              <button
                type="submit"
                className="p-3 shadow-inner rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:scale-105 active:scale-100 transition-all duration-200"
              >
                Register
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login now
                </span>
              </p>
              <p className="mt-4 w-full flex justify-center items-center text-blue-500 text-lg">
            <span className="border-[0.8px] border-black mt-1 w-[150px]" />
            OR
            <span className="border-[0.8px] border-black mt-1 w-[150px]" />
          </p>
          <div className="flex w-full justify-center items-center space-x-4 mt-6">
            <div className="flex py-1 justify-center items-center w-[160px] h-fit border border-gray-300 rounded-md hover:scale-105 active:scale-100 transition-all duration-200">
              <FcGoogle size={32} />
            </div>
            <div className="flex py-1 justify-center items-center w-[160px] h-fit border border-gray-300 rounded-md hover:scale-105 active:scale-100 transition-all duration-200">
              <FaApple size={32} />
            </div>
          </div>
            </form>
          </motion.div>
        )}

        {isLogin && (<motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x:0 }}
            transition={{ type: "spring", duration: 2.75, bounce: 0.4 }}
            className="w-2/5 h-full flex flex-col justify-center items-center bg-gradient-to-b from-purple-400 to-pink-400 relative"
          >
            <div className="absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(#e5e7eb_0.5px,transparent_0.5px)] [background-size:16px_16px]"/>
            <p className="text-white text-6xl text-center">
              Welcome Back, <br /> Future Achiever!
            </p>
            <p className="text-white text-center text-2xl mt-10">
              We're excited to continue where <br /> you left off.
            </p>
          </motion.div>
        )}

      </div>

      
    </div>
  );
};

export default Auth;
