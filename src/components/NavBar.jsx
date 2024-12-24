import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Flag from 'react-world-flags';
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { RiBankFill } from "react-icons/ri";
import gre from '../assets/gre.png'
import ielts from '../assets/ielts.png'
import gmat from '../assets/gmat.svg'
import pte from '../assets/PTE.webp'
import sat from '../assets/sat.png'
import toefl from '../assets/toefl.svg'
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoDocumentsSharp } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropdown(null);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // About us dropdown
  const aboutUsDropdown = () => {
    return (
      <ul className="absolute flex flex-col justify-center items-center bg-white shadow-custom rounded-lg py-2 w-32 z-50 mt-6">
        {[
          "Company",
          "Blogs",
          "Events & Webinars",
        ].map((link, i) => (
          <li key={i}>
            <a
              href="#"
              className="block px-2 py-2 text-center text-gray-700 hover:text-pink-600"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  // destinations dropdown
  const destinationsDropdown = () => {
    const countries = [
      { name: "UK", code: "GB" },
      { name: "USA", code: "US" },
      { name: "Ireland", code: "IE" },
      { name: "Canada", code: "CA" },
      { name: "Germany", code: "DE" },
      { name: "France", code: "FR" },
      { name: "Europe", code: "EU" },
      { name: "Italy", code: "IT" },
      { name: "Netherlands", code: "NL" },
      { name: "Spain", code: "ES" },
      { name: "New Zealand", code: "NZ" },
    ];
  
    return (
      <ul className="absolute grid grid-cols-2 bg-white shadow-custom rounded-md px-4 md:py-2 w-80 md:w-96 gap-2 z-50 mt-6">
        {countries.map((country, i) => (
          <li key={i} className="flex items-center">
            <Flag code={country.code} className="w-12 h-10 mr-0 md:mr-2" />
            <a
              href="#"
              className="block px-4 py-2 text-lg text-gray-700 hover:text-pink-600"
            >
              {country.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  // universities dropdown
  const universitiesDropdown = () => {
    const countries = [
      { name: "UK", code: "GB" },
      { name: "USA", code: "US" },
      { name: "Ireland", code: "IE" },
      { name: "Canada", code: "CA" },
      { name: "Germany", code: "DE" },
      { name: "France", code: "FR" },
      { name: "Europe", code: "EU" },
      { name: "Italy", code: "IT" },
      { name: "Netherlands", code: "NL" },
      { name: "Spain", code: "ES" },
      { name: "New Zealand", code: "NZ" },
    ];
  
    return (
      <div className="absolute bg-white shadow-custom rounded-md px-4 md:py-3 w-80 md:w-96 z-50 mt-6" >
        <p className="w-full text-lg mb-1">Top Universities in</p>
        <ul className=" grid grid-cols-2  gap-2">
          
          {countries.map((country, i) => (
            <li key={i} className="flex items-center">
              <Flag code={country.code} className="w-12 h-10 mr-0 md:mr-2" />
              <a
                href="#"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-pink-600"
              >
                {country.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // our products dropdown
  const ourProductsDropdown = () => {
    const testPreparation = {
      title: "Test Preparation",
      description: "Excel in English & Academics",
      icons: [
        { name: "IELTS", color: "bg-red-500", icon: <img src={ielts} alt="ielts" /> },
        { name: "PTE", color: "bg-red-400", icon: <img src={pte} alt="pte" /> },
        { name: "TOEFL", color: "bg-blue-500", icon: <img src={toefl} alt="toefl" /> },
        { name: "GMAT", color: "bg-yellow-500", icon: <img src={gmat} alt="gmat" /> },
        { name: "GRE", color: "bg-blue-400", icon: <img src={gre} alt="gre" /> },
        { name: "SAT", color: "bg-blue-600", icon: <img src={sat} alt="sat" /> },
      ],
    }
    const products = [
      {
        title: "Accommodation",
        description: "Find Your Perfect Student Stay",
        icon: <FaHouse size={34} />,
      },
      {
        title: "Education Loan",
        description: "Effortless Education Financing",
        icon: <RiBankFill size={34} />,
      },
      {
        title: "Travel",
        description: "Exclusive Travel Deals for Students",
        icon: <BiSolidPlaneAlt size={34} />,
      },
      {
        title: "Fee Transfer",
        description: "Seamless Transfers for Study Abroad",
        icon: <FaMoneyBillTransfer size={34} />, 
      },
    ];
  
    return (
      <div className="absolute flex flex-col md:flex-row bg-white shadow-xl rounded-xl -left-0 md:-left-96 w-fit md:w-[800px] overflow-hidden z-50 mt-6">
        <div className="w-full md:w-1/3 h-full bg-purple-200 p-5 rounded-b-3xl md:rounded-l-none md:rounded-r-3xl">
          <h2 className="text-2xl font-semibold text-gray-800">{testPreparation.title}</h2>
          <p className="ml-1 text-gray-600 my-1">{testPreparation.description}</p>
          <div style={{ borderTop: "1px solid #888 ", marginLeft: 5, marginRight: 5 }}></div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {testPreparation.icons.map((icon, i) => (
              <div key={i} className="flex items-center justify-center space-x-2">
                <div className={`w-16 h-10 rounded-lg overflow-hidden flex justify-center bg-white items-center`}>
                  {icon.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
          {products.map((product, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full flex justify-center items-center">
                <span className="text-2xl">{product.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
  
      </div>
    );
  };

  // our services dropdown
  const ourServicesDropdown = () => {
    return (
      <ul className="absolute flex flex-col bg-white shadow-lg rounded-md py-2 w-96 z-50 mt-6">
        {[
          {
            title: "SOP Creation",
            subtext: "Guidance for Effective SOP Creation",
            icon: <IoDocumentTextSharp size={24} />,
          },
          {
            title: "Visa Processing",
            subtext: "Effective Visa Processing for Students",
            icon: <IoDocumentsSharp size={24} />,
          },
          {
            title: "Interview Preparation",
            subtext: "Mastering Your Study Abroad Interview",
            icon: <FaPeopleArrows size={24} />,
          },
        ].map((link, i) => (
          <li key={i} className="flex items-center px-4 py-2 hover:bg-gray-100">
            <div className="mr-4">{link.icon}</div>
            <div>
              <a
                href="#"
                className="block text-lg text-gray-700 hover:text-pink-600"
              >
                {link.title}
              </a>
              <p className="text-sm text-gray-500">{link.subtext}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex-col md:sticky flex bg-white top-0 z-50 shadow-md md:flex-row justify-center items-center">
      {/* Navbar */}
      <nav className="container px-8 py-2 flex justify-between items-center ">
        <div className="text-2xl bg-black py-2 px-8 text-white">Logo</div>

        <ul className="hidden md:flex space-x-8">
          {[
            {
              title: "About Us",
              dropdown: aboutUsDropdown,
            },
            {
              title: "Destinations",
              dropdown: destinationsDropdown,
            },
            {
              title: "Universities",
              dropdown: universitiesDropdown,
            },
            {
              title: "Our Products",
              dropdown: ourProductsDropdown,
            },
            {
              title: "Our Services",
              dropdown: ourServicesDropdown,
            },
          ].map((item, index) => (
            <li
              key={index}
              className="relative h-full"
              onMouseEnter={() => setDropdown(index)}
              // onMouseLeave={handleMouseLeave}
            >
              <div className="relative">
                <button
                  className={`relative text-xl ${
                    index === 0
                      ? "text-pink-500 font-bold"
                      : "text-gray-800 hover:text-pink-600"
                  } focus:outline-none transition-all duration-300 before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:w-0 before:h-1 before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500 before:rounded-full before:transition-all before:duration-300 hover:before:w-full`}
                  onClick={() => toggleDropdown(index)}
                >
                  {item.title}
                </button>
                {dropdown === index && item.dropdown()}
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <div className="flex justify-center items-center h-full">
            <FiSearch size={28} className="mt-1" />
          </div>
          <button
            className="px-4 w-44 h-10 font-semibold bg-gradient-to-br to-pink-500 from-orange-400 text-white rounded-xl transition-all duration-500 active:scale-95 hover:text-lg shadow-md"
            onClick={() => navigate('/letsgetstarted')}
          >
            Talk to Experts
          </button>
        </div>

        <div className="md:hidden absolute top-4 right-4 z-50 flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>
      
      <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
         className="md:hidden w-full absolute top-0 bg-white shadow-md px-8 py-2 flex flex-col space-y-4 z-40">
          {[
            {
              title: "About Us",
              dropdown: aboutUsDropdown,
            },
            {
              title: "Destinations",
              dropdown: destinationsDropdown,
            },
            {
              title: "Universities",
              dropdown: universitiesDropdown,
            },
            {
              title: "Our Products",
              dropdown: ourProductsDropdown,
            },
            {
              title: "Our Services",
              dropdown: ourServicesDropdown,
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <button
                className={`relative text-xl ${
                  index === 0
                    ? "text-pink-500 font-bold"
                    : "text-gray-800 hover:text-pink-600"
                } focus:outline-none transition-all duration-300`}
                onClick={() => toggleDropdown(index)}
              >
                {item.title}
              </button>
              {dropdown === index && item.dropdown()}
            </div>
          ))}
          <div className="flex justify-center items-center space-x-4">
            <FiSearch size={28} className="mt-1" />
            <button
              className="px-4 w-44 h-10 font-semibold bg-gradient-to-br to-pink-500 from-orange-400 text-white rounded-xl transition-all duration-500 active:scale-95 hover:text-lg shadow-md"
              onClick={() => navigate('/letsgetstarted')}
            >
              Talk to Experts
            </button>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;