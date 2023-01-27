import React from 'react';
import Logo from './Logo';
import LogoIntesol from '../public/logo-intesol1.png';
import LogoCaption from './LogoCaption';
const Footer = () => {
  return (
    <div className="max-w-[1240] flex justify-between items-center mx-auto bg-gray-500 shadow">
      <div className="flex columns-2 gap-1 my-6 mx-6">
        <Logo logo={LogoIntesol} logoSize={40} />
        <LogoCaption caption="Intesol" />
      </div>
      <div className="mx-10">Copyright &copy; 2023, All rights Reserved</div>
    </div>
  );
};

export default Footer;
