import React from 'react';
import About from 'components/About';
import Hero from 'components/Hero';

const about = () => {
  return (
    <div>
      <Hero heading="About" message="About the company" />
      <About />
    </div>
  );
};

export default about;
