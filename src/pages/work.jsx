import Hero from 'components/Hero';
import Work from 'components/Work';
import React from 'react';

const work = () => {
  return (
    <div>
      <Hero heading="Works" message="Some our latest works" />
      <Work />
    </div>
  );
};

export default work;
