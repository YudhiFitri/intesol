import Clients from 'components/Clients';
import Hero from 'components/Hero';
import React from 'react';

const clients = () => {
  return (
    <div>
      <Hero heading="Clients" message="Our Clients" />
      <Clients />
    </div>
  );
};

export default clients;
