import React from 'react';

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-10 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[4rem]">
        <h2 className="text-5xl font-bold text-center">{heading}</h2>
        <p className="py-5 text-xl text-center">{message}</p>
      </div>
    </div>
  );
};

export default Hero;
