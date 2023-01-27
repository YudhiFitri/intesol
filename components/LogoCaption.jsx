import React, { useEffect, useState } from 'react';

const LogoCaption = ({ caption }) => {
  const [captionColor, setCaptionColor] = useState('white');

  useEffect(() => {
    const changeCaptionColor = () => {
      if (window.scrollY >= 90) {
        setCaptionColor('#000000');
      } else {
        setCaptionColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeCaptionColor);
  }, []);
  return (
    <h1 style={{ color: `${captionColor}` }} className="font-bold text-3xl">
      {caption}
    </h1>
  );
};

export default LogoCaption;
