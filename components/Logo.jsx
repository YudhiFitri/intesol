import Image from 'next/image';
import React from 'react';

const Logo = ({ logo, logoSize }) => {
  return (
    // <div className="columns-2 gap-1">
    <Image src={logo} alt="intesol logo" height={logoSize} width={logoSize} />
    // </div>
  );
};

export default Logo;
