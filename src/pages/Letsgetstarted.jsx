import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ils1 from '../assets/ils1.svg';
import ils2 from '../assets/ils2.svg';
import ils3 from '../assets/ils3.svg';
import { useNavigate } from 'react-router-dom';
import { image } from 'framer-motion/client';

const Card = ({ index, title, description, image, isVisible, shadowClass }) => {
  return (
    <motion.div
    initial={{ opacity: 1,x:-300 }}
    animate={index === 0 ? {x: 300} : {x: -300}}
    transition={{ type: 'spring', duration: 2, bounce: 0.4 }}
    style={{ position: 'absolute', top: `${index} * 10px` }}
    className='p-1 bg-gradient-to-b from-purple-400 to-pink-400 rounded-lg absolute'
    >
    <div
      className={`z-[10*${index}] transition-opacity duration-1000 ease-in-out w-[300px] h-[350px] p-4 bg-white ${shadowClass} rounded-lg flex flex-col justify-center items-center text-center`}
    >
      <div className="w-32 h-32 bg-gray-300 rounded-md mb-4">{image}</div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    
    </div>
    </motion.div>
  );
};

const Letsgetstarted = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const cards = [
    {
      title: 'Stay in the Loop, Always',
      description: 'Track your application progress in real-time and never miss a single update.',
      image: <img src={ils1 } alt="ils1" />,
      shadowClass: 'shadow-cardShadowPink',
    },
    {
      title: 'Chat Anywhere, Anytime',
      description: 'Get admission advice through chat and calls, all at your fingertips.',
      image: <img src={ils2} alt="ils2" />,
      shadowClass: 'shadow-cardShadowBlue',
    },
    {
      title: 'Find Your Perfect Match',
      description: 'Instantly check your eligibility for top universities and courses tailored to your goals.',
       image: <img src={ils3} alt="ils3" />,
      shadowClass: 'shadow-cardShadowPurple',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  const getCardPosition = (index) => {
    const position = (index - currentIndex + cards.length) % cards.length;
    return position;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 p-4">
      <div className="flex justify-center space-x-10 space-y-10 h-96 w-full relative">
        {cards.map((card, index) => (
          <Card
            key={index}
            index={getCardPosition(index)}
            title={card.title}
            description={card.description}
            image={card.image}
            shadowClass={card.shadowClass}
          />
        ))}
      </div>
      <button onClick={() => navigate('/auth')} className="mt-6 px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg shadow-lg focus:outline-none hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-100">
        Let's get started
      </button>
    </div>
  );
};

export default Letsgetstarted;