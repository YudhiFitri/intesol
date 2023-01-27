import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/thinking.jpg';

const About = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {/* <div className="flex columns-2 gap-4"> */}
        <div className="relative">
          <Image className="p-4" src={AboutImg} width="300" height="300" layout="responsive" alt="about photo" />
        </div>
        <div className="block p-2 rounded-lg shadow-lg bg-white mx-auto">
          <h5 className="text-gray-900 text-2xl font-bold leading-tight mb-2">Our Cares</h5>
          <p className="text-gray-700 text-xl mb-4">
            <strong>Intesol</strong> Intesol or Integra Software Solution is a software house company.
          </p>
          <p className="text-gray-700 text-xl mb-4">It is built for helping your business - especially small and micro businesses - to grow and become better at creating apps for them. It is can be done in 2 ways:</p>
          <ul className="text-gray-700 text-xl mb-4">
            <li>1. By buying our software product and using it in your companies.</li>
            <li>2. By sending us what you need and we try to fulfill it.</li>
          </ul>
          <p className="text-gray-700 text-xl mb-4">Which choosen by you, it hopes can deliver the benefits to your company and the better and beyond it can be achieves to your company.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
