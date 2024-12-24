import React, { useRef, useState, useLayoutEffect, useEffect, useCallback } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion"
import { useInView } from "react-intersection-observer";
import bg from '../assets/background.jpg'
import grad1 from '../assets/grad1.avif'
import grad2 from '../assets/grad2.avif'
import story1 from '../assets/story1.avif'
import story2 from '../assets/story2.avif'
import ourvision1 from '../assets/ourvision1.avif'
import ourvision2 from '../assets/ourvision2.avif'
import usp1 from '../assets/usp1.avif'
import usp2 from '../assets/usp2.avif'
import usp3 from '../assets/usp3.avif'
import usp4 from '../assets/usp4.avif'
import port1 from '../assets/port1.avif'
import port2 from '../assets/port2.avif'
import port3 from '../assets/port3.avif'
import port4 from '../assets/port4.avif'
import port5 from '../assets/port5.avif'
import { div } from 'framer-motion/client'

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

const Section1 = () => {
  const [ref, inView] = useInView({threshold: 0.7,});
  return (
    <motion.div animate={inView ? { opacity: 1 } : { opacity: 0.1 }} transition={{ type: 'spring', duration: 1.5, bounce: 0.2 }} ref={ref} 
    className='w-[1280px] h-full flex z-10 relative ml-40'>
      <div className='w-2/5 h-full flex flex-col justify-center mt-28'>
      <motion.p initial={{ opacity: 0, x: '-100px' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', duration: 2, bounce: 0.4 }} className="text-3xl font-bold text-gray-800 mb-4">
        About The Company
        </motion.p>
        <motion.p 
            initial={{ opacity: 0, y: '100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} className="text-lg text-gray-600 leading-8">
          At Daltin, we connect students with universities worldwide through
          our innovative all-in-one platform, streamlining the student
          recruiting process. We empower students with educational
          opportunities that enhance their quality of life and promote global
          betterment. By bridging international education providers and
          recruiting partners, we provide students access to diverse study
          options from anywhere in the world, transforming lives through
          education.
        </motion.p>      
      </div>
      <div className='w-3/5 h-full flex justify-end relative mt-28'>
           <motion.img
              initial={{ opacity: 0, y: '-100px' }}
              animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '-100px' }}
              transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} 
            src={grad1} 
            alt="Students Collaboration"
            className="relative z-10 w-[260px] -right-10 h-[160px] lg:w-[600px] lg:h-[400px] object-cover rounded-md shadow-lg"
          />
          <motion.img
              initial={{ opacity: 0, y: '100px' }}
              animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '100px' }}
              transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} 
            src={grad2} 
            alt="Graduates"
            className="absolute z-10 top-[50px] lg:top-[230px] left-[50px] lg:left-[70px] w-[260px] h-[160px] lg:w-[300px] lg:h-[200px] object-cover rounded-md shadow-lg"
          />
      </div>
    </motion.div>
  )
}

const Section2 = () => {
  const [ref, inView] = useInView({threshold: 0.5,});
  return (
    <motion.div animate={inView ? { opacity: 1 } : { opacity: 0.15 }} transition={{ type: 'spring', duration: 1.5, bounce: 0.2 }} ref={ref} className='w-[1280px] h-[550px] gap-10 flex items-end z-10 relative mt-20'>
      <div className='w-[35%]  h-full flex flex-col justify-center items-end'>
        <motion.img
        initial={{ opacity: 0, y: '100px' }}
        animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '-100px' }}
        transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} 
        src={story1} alt='story1' className='w-full h-full object-cover rounded-lg' />
        <motion.p initial={{ opacity: 0, y: '100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} className=' text-6xl'>2023</motion.p>
      </div>
      <div className='w-[25%]  h-full flex flex-col justify-center items-start pt-40'>
        <motion.p initial={{ opacity: 0, y: '-100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} className=' text-4xl'>Our Story</motion.p>
        <motion.img
        initial={{ opacity: 0, y: '100px' }}
animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '100px' }}
        transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} 
        src={story2} alt='story2' className='w-full h-full object-cover rounded-lg' />
      </div>
      <div className='w-[40%] leading-8 h-full flex justify-start items-start pt-48 '>
       <motion.p initial={{ opacity: 0, y: '-100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }}>Founded in April 2023, Daltin aims to transform education by blending global best practices with cutting-edge technology. Partnering with over 500 institutions worldwide, we provide innovative, tech-driven study options that meet the evolving needs of students. Our AI-based portal combines traditional teaching with advanced tools, including virtual assistants and chatbots, for real-time support, creating a dynamic and interactive learning experience. Daltin is pioneering a new era in international education</motion.p>
      </div>
    </motion.div>
    );
};

const Section3 = () => {
const [ref, inView] = useInView({threshold: 0.5,});
  return (
    <motion.div animate={inView ? { opacity: 1 } : { opacity: 0.15 }} transition={{ type: 'spring', duration: 1.5, bounce: 0.2 }} ref={ref} className='w-[1280px] h-[400px] gap-10 flex z-10 relative mt-28'>
      <div className='w-2/5 h-full flex flex-col justify-center items-start'>
        <motion.p 
            initial={{ opacity: 0, y: '-100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} className='text-5xl mb-5'>Our Mission & Vision</motion.p>
        <motion.p 
            initial={{ opacity: 0, y: '100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} className='leading-8 pr-8 ml-3'>
          We seek to simplify the educational landscape using technology. We are empowering students to make more informed decisions about their educational paths.<br /> Everything is right here, with us, right now.
          <br />
          We seek to simplify the educational landscape using technology. We are empowering students to make more informed decisions about their educational paths.<br /> Everything is right here, with us, right now.
        </motion.p>
      </div>
      
      {/* imgs */}
      <div className='relative w-3/5 h-full flex justify-end items-center'>
        {/* Img should be top left */}
        <motion.img initial={{ opacity: 0, y: '100px' }}
        animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '-100px' }}
        transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} 
          src={ourvision1}
          alt="Our Vision 1"
          className="absolute top-0 left-14 w-[300px] h-[200px] lg:w-[400px] lg:h-[300px] object-cover rounded-md shadow-lg"
        />

        {/* Img should be bottom right and overlap on the image above */}
        <motion.img initial={{ opacity: 0, y: '100px' }}
        animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '100px' }}
        transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} 
          src={ourvision2}
          alt="Our Vision 2"
          className="absolute -bottom-5 right-0 w-[300px] h-[200px] lg:w-[400px] lg:h-[320px] object-cover rounded-md shadow-lg"
        />
      </div>
    </motion.div >
  );
};

const Section4 = () => {
  const [ref, inView] = useInView({threshold: 0.5,});
  return (
    <motion.div animate={inView ? { opacity: 1 } : { opacity: 0.15 }} transition={{ type: 'spring', duration: 1.5, bounce: 0.2 }} ref={ref} className="w-[1280px] h-[550px] flex flex-col z-10 relative">
      {/* Title and Content */}
      <div className="w-full flex justify-between items-center mb-10">
        <div className="w-1/2 ml-20 mt-32 flex flex-col justify-start items-start">
          <motion.p 
            initial={{ opacity: 0, y: '-100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} className="text-5xl font-semibold mb-5">Our USPs</motion.p>
          <motion.p 
            initial={{ opacity: 0, y: '-100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} className="leading-8 text-xl">
            Unique selling points encompass:
          </motion.p >
          <motion.ul initial={{ opacity: 0, y: '100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} className=" w-4/6 list-disc leading-8 ml-8 mt-2 space-y-2">
            <li>
              Course Finder seamlessly integrated with student information,
              providing an extensive and swift list of available university and
              course selections.
            </li>
            <li>
              My Office, a comprehensive CRM tool designed for agents and their
              teams, facilitates access to all documentation, tracks employee
              performance, and offers the flexibility of branch integration.
            </li>
            <li>
              An intuitive Easy Dashboard featuring scholarships, open intakes,
              application fee waivers, and the ability to explore top colleges
              and universities at a single click.
            </li>
          </motion.ul>
        </div>

        {/* Images */}
        <div className="w-1/2 h-[650px] grid grid-rows-5 grid-cols-5 gap-4 px-10 relative">
        <motion.img initial={{ opacity: 0, y: '100px' }}
        animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '-100px' }}
        transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }}
          src={usp1}
          alt="USP 1"
          className="row-span-3 col-span-2 object-cover w-full h-full rounded-lg shadow-lg"
        />
        <motion.img initial={{ opacity: 0, y: '100px' }}
        animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '-100px' }}
        transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }}
          src={usp2}
          alt="USP 2"
          className="row-span-2 col-span-3 object-cover w-full h-full rounded-lg shadow-lg"
        />
        <motion.img initial={{ opacity: 0, y: '100px' }}
        animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '100px' }}
        transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }}
          src={usp3}
          alt="USP 3"
          className="row-span-3 col-span-3 object-cover w-full h-full rounded-lg shadow-lg"
        />
        <motion.img initial={{ opacity: 0, y: '100px' }}
        animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '100px' }}
        transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }}
          src={usp4}
          alt="USP 4"
          className="row-span-2 col-span-2 object-cover w-full h-full rounded-lg shadow-lg mt-8"
        />
      </div>
      </div>
    </motion.div>
  );
};

const Section5 = () => {
  const [ref, inView] = useInView({threshold: 0.5,});
  return (
    <motion.div animate={inView ? { opacity: 1 } : { opacity: 0.15 }} transition={{ type: 'spring', duration: 1.5, bounce: 0.2 }} ref={ref} className="max-w-[1380px] h-auto bg-gradient-to-r flex flex-col items-center p-16 relative mr-44 xl:mr-[550px]">
      {/* Title */}
      <div className='w-full flex h-fit mt-20'>
      <motion.p 
            initial={{ opacity: 0, y: '100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} className="w-2/5 text-5xl ml-5 mt-5">Our Partners</motion.p>
        <motion.p 
            initial={{ opacity: 0, y: '100px' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }} className="w-3/5 leading-8 mb-20">
        Discover the incredible organizations we partner with to bring you the
        best opportunities and resources. Together, we're creating pathways to
        help you achieve your goals and unlock your potential. Meet our trusted
        partners on the journey to success!
        </motion.p>
      </div>

      {/* Partner Images */}
      <div className="w-full grid grid-cols-5 gap-6">
        <motion.img
          initial={{ opacity: 0, y: '100px' }}
          animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '100px' }}
          transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }}
          src={port1}
          alt="Partner 1"
          className="object-cover w-full h-[250px] rounded-lg shadow-lg"
        />
        <motion.img
          initial={{ opacity: 0, y: '-100px' }}
          animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '-100px' }}
          transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }}
          src={port2}
          alt="Partner 2"
          className="object-cover w-full h-[250px] rounded-lg shadow-lg"
        />
        <motion.img
          initial={{ opacity: 0, y: '100px' }}
          animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '100px' }}
          transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }}
          src={port3}
          alt="Partner 3"
          className="object-cover w-full h-[250px] rounded-lg shadow-lg"
        />
        <motion.img
          initial={{ opacity: 0, y: '-100px' }}
          animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '-100px' }}
          transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }}
          src={port4}
          alt="Partner 4"
          className="object-cover w-full h-[250px] rounded-lg shadow-lg"
        />
        <motion.img
          initial={{ opacity: 0, y: '100px' }}
          animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: '100px' }}
          transition={{ type: 'spring', duration: 2.75, bounce: 0.4 }}
          src={port5}
          alt="Partner 5"
          className="object-cover w-full h-[250px] rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
};


const startpage = () => {
  const [viewportW, setViewportW] = useState(0);

  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  // Adjust the ghost spacer's height
  useEffect(() => {
    if (scrollRef.current && ghostRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Set the height of the ghost spacer to the scrollable width minus the viewport width
      setScrollRange(scrollWidth - viewportWidth);
    }
  }, []);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      {/* Page Content */}
      <div className="w-full h-full flex ">
      
      {/* Scrolling Thumbnails */}
      <div className="sticky z-20 top-0 h-screen w-full ">
      
      {/* Background */}
      <img className="w-full h-full bg-cover bg-center absolute z-0" src={bg} />
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className=" h-screen z-20 flex items-center px-10 sticky"
        >
          <div className="flex space-x-[350px]">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
          </div>
        </motion.section>
      </div>

      {/* Ghost Spacer */}
      <div
        ref={ghostRef}
        style={{ height: `${scrollRange}px` }}
        className="ghost"
      />
      </div>
    </>
  );
};
export default startpage
