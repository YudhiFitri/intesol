import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { ClientImages } from './ClientImages';
import ClientsImg from './ClientsImg';

const Clients = () => {
  const [current, setCurrent] = useState(0);
  const length = ClientImages.length;

  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Our Clients</p>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
        {ClientImages.map((clientImage, index) => {
          return (
            <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000 flex justify-center' : 'opacity-0 flex justify-center'}>
              {/* <FaArrowAltCircleLeft className="left-[30px] text-gray-400 cursor-pointer select-none z-[2]" size={50} /> */}
              <Image src={clientImage.image} width={200} height={200} alt="/" />
              {/* <FaArrowAltCircleRight className="right-[30px] text-gray-400 cursor-pointer select-none z-[2]" size={50} /> */}
            </div>
          );
        })}

        {/* <ClientsImg slides={ClientImages} /> */}
      </div>
    </div>
  );
};

export default Clients;
