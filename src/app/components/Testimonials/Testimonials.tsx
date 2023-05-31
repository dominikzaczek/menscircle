"use client"

import Image from "next/image";
import { useState } from "react";
import {HiArrowNarrowRight, HiArrowNarrowLeft} from 'react-icons/hi'

export default function Testimonials(){
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
    };
  
    const slides = [
      { id: 1, text: "My wife says my 'asshole alarm' is going off less since joining Men's Circle.", author: "James, member since 2021", bgColor: "bg-orange" },
      { id: 2, text: "... a sense of community and comradeship where healthy, meaningful conversation takes place. It's provided me with a deepening sense of self-appreciation, confidence and peace.", author: "James, member since 2021", bgColor: "bg-primary" },
      { id: 3, text: "...A forum to learn, grow, and reflect on who I am as a Man... it has helped to re-prioritize my life's purpose.",author: "James, member since 2021",  bgColor: "bg-ruby" },
    ];
    return (
        <div className={`${slides[currentSlide].bgColor} transition duration-1000`}>
      <div className="relative w-screen h-screen flex justify-center">
        <div className="container w-1/2 relative ">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                currentSlide === slide.id - 1 ? "opacity-100" : "opacity-0"
            } flex flex-col items-center justify-center`}
          >
            <div className="w-48 h-48 relative mb-5">
                <Image src="/static/images/alarm.png" fill style={{objectFit: "contain"}} alt="Alarm icon" />
            </div>
            <h1 className="text-4xl font-bold text-white">{slide.text}</h1>
            <h3>{slide.author}</h3>
          </div>
        ))}
        </div>
  
        {currentSlide !== 0 && <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={prevSlide}
        >
          <HiArrowNarrowLeft size={48} />
        </button>}
        {currentSlide + 1 < slides.length && <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextSlide}
        >
         <HiArrowNarrowRight size={48}/>
        </button>}
      </div>
      </div>
    );
  };