import React, { useState } from "react";
import NavBar from '../components/NavBar'
import { motion } from "framer-motion";
import StartPage from '../components/Startpage'

const aboutSections = [
    {
      id: 'company',
      title: 'About The Company',
      content: 'At Daltin, we connect students with universities worldwide through our innovative all-in-one platform, streamlining the student recruiting process. We empower students with educational opportunities that enhance their quality of life and promote global betterment. By bridging international education providers and recruiting partners, we provide students access to diverse study options from anywhere in the world, transforming lives through education.',
      images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
    },
    {
      id: 'story',
      title: 'Our Story',
      content: 'Founded in April 2023, Daltin aims to transform education by blending global best practices with cutting-edge technology. Partnering with over 500 institutions worldwide, we provide innovative, tech-driven study options that meet the evolving needs of students. Our AI-based portal combines traditional teaching with advanced tools, including virtual assistants and chatbots, for real-time support, creating a dynamic and interactive learning experience. Daltin is pioneering a new era in international education.',
      year: '2023',
      images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
    },
    {
      id: 'mission',
      title: 'Our Mission & Vision',
      content: 'We seek to simplify the educational landscape using technology. We are empowering students to make more informed decisions about their educational paths. Everything is right here, with us, right now.',
      images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
    },
    {
      id: 'usps',
      title: 'Our USPs',
      content: 'Unique selling points encompass:',
      features: [
        'Course Finder seamlessly integrated with student information, providing an extensive and swift list of available university and course selections.',
        'My Office, a comprehensive CRM tool designed for agents and their teams, facilitates access to all documentation, tracks employee performance, and offers the flexibility of branch integration.',
        'An intuitive Easy Dashboard featuring scholarships, open intakes, application fee waivers, and the ability to explore top colleges and universities at a single click.'
      ],
      images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
    },
    {
      id: 'partners',
      title: 'Our Partners',
      content: "Discover the incredible organizations we partner with to bring you the best opportunities and resources. Together, we're creating pathways to help you achieve your goals and unlock your potential. Meet our trusted partners on the journey to success!",
      images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
    }
  ]


  const Aboutus = () => {
    const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown((prev) => !prev);
    };
  
    return (
      <div className="w-full h-vh relative">
        <NavBar />
        {/* AI Course Finder Section */}
        <div>
          <div className="flex flex-col w-full items-center absolute justify-center z-30">
            <div className="flex justify-center items-center">
              <button
                onClick={toggleDropdown}
                className="px-12 py-3 -mt-1 text-lg font-semibold bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-b-2xl shadow-lg transition-all duration-500"
              >
                Explore AI Course Finder
              </button>
            </div>
  
            {/* Dropdown Content */}
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="mt-4 p-2 rounded-xl flex flex-wrap bg-white drop-shadow-xl shadow-custom justify-center w-fit max-w-3xl"
              >
                <button className="w-48 py-3 rounded-lg text-center text-lg hover:text-pink-600 transition-all duration-500">
                  Check Eligibility
                </button>
                <button className="w-48 py-3 rounded-lg text-center text-lg hover:text-pink-600 transition-all duration-500">
                  Search Program
                </button>
                <button className="w-48 py-3 rounded-lg text-center text-lg hover:text-pink-600 transition-all duration-500">
                  Search Institute
                </button>
              </motion.div>
            )}
          </div>
        </div>
          
        {/* About Sections */}
        <StartPage />
      </div>
    );
  };

export default Aboutus