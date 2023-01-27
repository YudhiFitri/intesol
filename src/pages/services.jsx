import Hero from 'components/Hero';
import Services from 'components/Services';
import React from 'react';

const services = () => {
  return (
    <div>
      <Hero heading="Services" message="Several Company Services" />
      <Services />
    </div>
  );
};

export default services;
