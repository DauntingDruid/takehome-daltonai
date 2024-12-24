import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Flag from 'react-world-flags';
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoDocumentsSharp } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  // About us dropdown
  const aboutUsDropdown = () => {
    return (
      <ul className="absolute flex flex-col justify-center items-center bg-white shadow-custom rounded-lg -left-5 mt-6 py-2 w-32">
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
      <ul className="absolute grid grid-cols-2 bg-white shadow-custom rounded-md mt-6 -left-28 px-4 py-2 w-96 gap-2">
        {countries.map((country, i) => (
          <li key={i} className="flex items-center">
            <Flag code={country.code} className="w-6 h-4 mr-2" />
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
    return (
      <ul className="absolute bg-white shadow-lg rounded-md mt-1 py-2 w-48">
        {[
          "UK",
          "USA",
          "Germany",
          "Canada",
        ].map((link, i) => (
          <li key={i}>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  // our products dropdown
  const ourProductsDropdown = () => {
    return (
      <ul className="absolute bg-white shadow-lg rounded-md mt-1 py-2 w-48">
        {[
          "Test Preparation",
          "Travel",
          "Education Loan",
        ].map((link, i) => (
          <li key={i}>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-pink-600"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  // our services dropdown
  const ourServicesDropdown = () => {
    return (
      <ul className="absolute flex flex-col bg-white shadow-lg rounded-md -left-32 mt-6 py-2 w-96">
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
    <div className="sticky top-0 z-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-2 flex justify-center items-center">
        <div className="text-2xl bg-black py-2 px-8 text-white mr-28">Logo</div>

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
              // onMouseLeave={() => setDropdown(null)}
            >
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
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4 ml-20">
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
      </nav>
    </div>
  );
};

export default Navbar;