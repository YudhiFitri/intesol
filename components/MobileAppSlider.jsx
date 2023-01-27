import React, { useState } from 'react';
import Image from 'next/image';
import { MobileAppImages } from './MobileAppImages';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const MobileAppSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative flex justify-center p-4">
      {MobileAppImages.map((slide, index) => {
        return (
          <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
            <FaArrowCircleLeft onClick={prevSlide} className="absolute top-[50%] left-[30px] text-gray-400 cursor-pointer select-none z-[2]" size={50} />
            {index === current && <Image className="object-cover" src={slide.image} alt="/" width="1440" height="600" />}
            <FaArrowCircleRight onClick={nextSlide} className="absolute top-[50%] right-[30px] text-gray-400 cursor-pointer select-none z-[2]" size={50} />
          </div>
        );
      })}
    </div>
  );
};

export default MobileAppSlider;
