import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import LogoCaption from './LogoCaption';
import LogoImg from '../public/logo-intesol1.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  });

  return (
    <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300 pb-5">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-2 text-white">
        <Link href="/">
          <div className="columns-2 gap-1 flex">
            <Logo logo={LogoImg} logoSize="50" />
            <LogoCaption caption="Intesol" />
          </div>

          {/* <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Intesol
          </h1> */}
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden md:flex">
          <li className="p-4 hover:text-gray-500">
            <Link href="/" className={router.pathname == '/' ? 'text-blue-500 bg-white ring-2 ring-blue-500 rounded-md p-1 font-bold' : ''}>
              Home
            </Link>
          </li>
          <li className="p-4 text-lg hover:text-gray-500">
            <Link href="/about" className={router.pathname == '/about' ? 'text-blue-500 bg-white ring-2 ring-blue-500 rounded-md p-1 font-bold' : ''}>
              About
            </Link>
          </li>
          <li className="p-4 text-lg hover:text-gray-500">
            <Link href="/services" className={router.pathname == '/services' ? 'text-blue-500 bg-white ring-2 ring-blue-500 rounded-md p-1 font-bold' : ''}>
              Services
            </Link>
          </li>
          <li className="p-4 text-lg hover:text-gray-500">
            <Link href="/work" className={router.pathname == '/work' ? 'text-blue-500 bg-white ring-2 ring-blue-500 rounded-md p-1 font-bold' : ''}>
              Works
            </Link>
          </li>
          <li className="p-4 text-lg hover:text-gray-500">
            <Link href="/clients" className={router.pathname == '/clients' ? 'text-blue-500 bg-white ring-2 ring-blue-500 rounded-md p-1 font-bold' : ''}>
              Clients
            </Link>
          </li>
          <li className="p-4 text-lg hover:text-gray-500">
            <Link href="/contact" className={router.pathname == '/contact' ? 'text-blue-500 bg-white ring-2 ring-blue-500 rounded-md p-1 font-bold' : ''}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
        </div>

        {/* Mobile menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-3000'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-3000'
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/services">Services</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/work">Work</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/clients">Clients</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
