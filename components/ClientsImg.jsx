import Image from 'next/image';
import React, { useState } from 'react';
import { ClientImages } from './ClientImages';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const ClientsImg = ({ slides }) => {
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
      {ClientImages.map((clientImage, idx) => {
        return (
          <div key={idx} className={idx === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
            <FaArrowCircleLeft onClick={prevSlide} className="absolute top-[50%] left-[30px] text-gray-400 cursor-pointer select-none z-[2]" size={50} />
            {idx === current && <Image className="w-full h-full" src={clientImage.image} alt="/" height={100} width={100} />}
            <FaArrowCircleRight onClick={prevSlide} className="absolute top-[50%] right-[30px] text-gray-400 cursor-pointer select-none z-[2]" size={50} />
          </div>
        );
      })}
    </div>
  );
};

export default ClientsImg;
