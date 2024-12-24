import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Reg = ({ onVerify }) => {
  const location = useLocation();
  const { fullName, email } = location.state || {};
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNumberValid, setMobileNumberValid] = useState(true);
  const [contactNumber, setContactNumber] = useState("");

  useEffect(() => {
    if (fullName) {
      const nameParts = fullName.split(" ");
      setFirstName(nameParts[0]);
      setLastName(nameParts.slice(1).join(" "));
    }
    if (email) {
      setEmailAddress(email);
    }
  }, [fullName, email]);

  const handleRegister = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const contactNumber = e.target.contactNumber.value;

    if (!fullName || !email || !contactNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    if (contactNumber.length !== 10) {
      setMobileNumberValid(false);
      return;
    }

    setMobileNumberValid(true);
    onVerify(contactNumber); // Move to OTP Verification screen with contact number
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-purple-200 to-pink-200">
      <h1 className="text-blue-600 text-3xl font-bold">Hey, {firstName}</h1>
      <p className="text-blue-600 mt-4 text-xl text-center mb-2">
        Let's get to know you better so we can map out <br /> your perfect study journey.
      </p>
      <form onSubmit={handleRegister} className="mt-6 flex flex-col w-80">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="p-2 mb-4 border border-black rounded-lg"
          value={`${firstName} ${lastName}`}
          required
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name (Optional)"
          className="p-2 mb-4 border border-black rounded-lg"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="p-2 mb-4 border border-black rounded-lg"
          value={lastName}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="p-2 mb-4 border border-black rounded-lg"
          value={emailAddress}
          required
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Primary Contact Number"
          className="p-2 mb-4 border border-black rounded-lg"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
        {!mobileNumberValid && (
          <p className="text-red-500 text-sm mb-4">
            Mobile number must be 10 digits.
          </p>
        )}
        <button
          type="submit"
          className="p-3 shadow-inner rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:scale-105 active:scale-100 transition-all duration-200"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

const OTPVerification = ({ onBack, contactNumber }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      alert("Please enter a 6-digit OTP.");
      return;
    }

    alert("OTP Verified! Welcome aboard.");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-blue-200 to-pink-200"
    >
      <h1 className="text-blue-600 text-3xl font-bold">Verify Your Code</h1>
      <p className="text-gray-700 mt-4 text-center">
        Enter the code you just received on your mobile number <br /> ending with ******{contactNumber.slice(-3)}.
      </p>
      <form onSubmit={handleVerifyOTP} className="mt-6 flex space-x-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`p-2 bg-transparent border ${digit ? 'border-purple-500' : 'border-gray-400'} text-center rounded-lg w-10 outline-none`}
            required
          />
        ))}
      </form>
      <button
        type="submit"
        className="p-3 px-24 mt-6 shadow-inner rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:scale-105 active:scale-100 transition-all duration-200"
      >
        Verify Now
      </button>
      <p className="mt-4 text-blue-500 cursor-pointer" onClick={onBack}>
        Back to Registration
      </p>
    </motion.div>
  );
};

const Registration = () => {
  const [step, setStep] = useState("register");
  const [contactNumber, setContactNumber] = useState("");

  return (
    <>
      {step === "register" && <Reg onVerify={(number) => { setContactNumber(number); setStep("otp"); }} />}
      {step === "otp" && <OTPVerification onBack={() => setStep("register")} contactNumber={contactNumber} />}
    </>
  );
};

export default Registration;
