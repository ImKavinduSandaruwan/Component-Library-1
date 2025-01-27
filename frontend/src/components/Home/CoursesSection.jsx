/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { ChevronRight, ArrowRight, ChevronLeft, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import book1 from "../../assets/Ebook1.svg";
import book2 from "../../assets/Ebook2.svg";
import book3 from "../../assets/EBook3.svg";
import book4 from "../../assets/EBook4.svg";
import book5 from "../../assets/EBook5.svg";
import book6 from "../../assets/Ebook1.svg";

const CourseCard = ({ image, title, description }) => (
  <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }} className="flex flex-col bg-white rounded-[25px] p-[20px]  h-[340px] shadow-sm shadow-[#B120304D] overflow-hidden">
    <div className="relative h-48 sm:h-[215px] max-w-[330px]  lg:block hidden ">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover rounded-[15px] "
      />
    </div>
    <div className="relative h-48 sm:h-[215px]  lg:hidden ">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover rounded-[15px] "
      />
    </div>
    <div className="mt-2">
      <h3 className="text-[17px] leading-[24px] font-medium font-serif_4 text-black">{title}</h3>
      <p className="mt-1 text-[15px] font-normal leading-[20px] font-serif_4 text-[#00000099]/60">{description}</p>
    </div>
  </motion.div>
);

const Section1 = ({ title, showMore = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const courses = [
    {
      image: book1,
      title: "Machine Learning",
      description: "Learn the basics of machine learning with Andrew Ng."
    },
    {
      image: book2,
      title: "Machine Learning",
      description: "Learn the basics of machine learning with Andrew Ng."
    },
    {
      image: book3,
      title: "Machine Learning",
      description: "Learn the basics of machine learning with Andrew Ng."
    },
    {
      image: book2,
      title: "Machine Learning",
      description: "Learn the basics of machine learning with Andrew Ng."
    },
    {
        image: book3,
        title: "Machine Learning",
        description: "Learn the basics of machine learning with Andrew Ng."
      },
      {
        image: book2,
        title: "Machine Learning",
        description: "Learn the basics of machine learning with Andrew Ng."
      },
  ];

  const itemsPerPage = {
    sm: 1,
    md: 2,
    lg: 4,
  };

  const getVisibleItems = () => {
    const width = window.innerWidth;
    let items = itemsPerPage.sm;
    if (width >= 1024) items = itemsPerPage.lg;
    else if (width >= 640) items = itemsPerPage.md;
    return items;
  };

  const next = () => {
    if (currentIndex < courses.length - getVisibleItems()) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="lg:py-8 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="lg:text-[36px] text-[24px] font-semibold leading-[24px] font-poppins text-black">{title}</h2>
          {showMore && (
            <a href="#" className="text-[#B12030] hover:text-red-700 text-[20px] leading-[24px] font-medium font-poppins">
              See More
            </a>
          )}
        </div>
        
        <div className="relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div 
              ref={containerRef}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* {courses.map((course, idx) => (
              <CourseCard key={idx} {...course} />
            ))} */}
               {courses
                .slice(currentIndex, currentIndex + getVisibleItems())
                .map((course, idx) => (
                  <CourseCard key={currentIndex + idx} {...course} />
                ))}
          </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          {/* <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-red-600 rounded-full p-2 text-white shadow-lg hover:bg-red-700 focus:outline-none">
            <ChevronRight className="w-5 h-5" />
          </button> */}
              {currentIndex > 0 && (
            <button 
              onClick={prev}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-red-600 rounded-full p-2 text-white shadow-lg hover:bg-red-700 focus:outline-none transition-all duration-200 ease-in-out"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          
          {currentIndex < courses.length - getVisibleItems() && (
            <button 
              onClick={next}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-red-600 rounded-full p-2 text-white shadow-lg hover:bg-red-700 focus:outline-none transition-all duration-200 ease-in-out"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Section2 = ({ title, showMore = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const containerRef = useRef(null);
    const courses = [
      {
        image: book4,
        title: "Machine Learning",
        description: "Learn the basics of machine learning with Andrew Ng."
      },
      {
        image: book5,
        title: "Machine Learning",
        description: "Learn the basics of machine learning with Andrew Ng."
      },
      {
        image: book6,
        title: "Machine Learning",
        description: "Learn the basics of machine learning with Andrew Ng."
      },
      {
        image: book4,
        title: "Machine Learning",
        description: "Learn the basics of machine learning with Andrew Ng."
      },
      {
        image: book6,
        title: "Machine Learning",
        description: "Learn the basics of machine learning with Andrew Ng."
      },
      {
        image: book4,
        title: "Machine Learning",
        description: "Learn the basics of machine learning with Andrew Ng."
      },
    ];

    
  const itemsPerPage = {
    sm: 1,
    md: 2,
    lg: 4,
  };

  const getVisibleItems = () => {
    const width = window.innerWidth;
    let items = itemsPerPage.sm;
    if (width >= 1024) items = itemsPerPage.lg;
    else if (width >= 640) items = itemsPerPage.md;
    return items;
  };

  const next = () => {
    if (currentIndex < courses.length - getVisibleItems()) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  
    return (
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="lg:text-[36px] text-[24px] font-semibold leading-[24px] font-poppins text-black">{title}</h2>
            {showMore && (
              <a href="#" className="text-[#B12030] hover:text-red-700 text-[20px] leading-[24px] font-medium font-poppins">
                See More
              </a>
            )}
          </div>
          
          <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div 
              ref={containerRef}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* {courses.map((course, idx) => (
                <CourseCard key={idx} {...course} />
              ))} */}
                 {courses
                .slice(currentIndex, currentIndex + getVisibleItems())
                .map((course, idx) => (
                  <CourseCard key={currentIndex + idx} {...course} />
                ))}
            </motion.div>
            </AnimatePresence>
            {/* Navigation Buttons */}
            {/* <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-red-600 rounded-full p-2 text-white shadow-lg hover:bg-red-700 focus:outline-none">
              <ChevronRight className="w-5 h-5" />
            </button> */}
                        {currentIndex > 0 && (
            <button 
              onClick={prev}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-red-600 rounded-full p-2 text-white shadow-lg hover:bg-red-700 focus:outline-none transition-all duration-200 ease-in-out"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          
          {currentIndex < courses.length - getVisibleItems() && (
            <button 
              onClick={next}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-red-600 rounded-full p-2 text-white shadow-lg hover:bg-red-700 focus:outline-none transition-all duration-200 ease-in-out"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
          </div>
        </div>
      </div>
    );
  };

const CoursesSection = () => {
  return (
    <div className="bg-white min-h-screen">
      <Section1 title="E Book" />
      <Section2 title="Role Base Suggetions" />
    </div>
  );
};

export default CoursesSection;