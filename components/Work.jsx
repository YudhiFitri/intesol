import React, { useState } from 'react';
import { FaChrome, FaDesktop, FaMobile } from 'react-icons/fa';
import DesktopAppSlider from './DesktopAppSlider';
import { DesktopAppImages } from './DesktopAppImages';
import WebAppSlider from './WebAppSlider';
import { WebAppImages } from './WebAppImages';
import MobileAppSlider from './MobileAppSlider';
import { MobileAppImages } from './MobileAppImages';
// import Image from 'next/image';

const Work = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-2xl font-bold text-center p-4">Our Several Works</h1>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' + (openTab === 1 ? 'text-blue-500 underline bg-blueGray-600' : 'text-blueGray-600 bg-white')}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <div className="flex justify-center">
                    <FaDesktop size={20} className="mx-2" />
                    Desktop App
                  </div>
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' + (openTab === 2 ? 'text-blue-500 underline bg-blueGray-600' : 'text-blueGray-600 bg-white')}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <div className="flex justify-center">
                    <FaChrome size={20} className="mx-2" />
                    Web App
                  </div>
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' + (openTab === 3 ? 'text-blue-500 underline bg-blueGray-600' : 'text-blueGray-600 bg-white')}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  <div className="flex justify-center">
                    <FaMobile size={20} className="mx-2" />
                    Mobile App
                  </div>
                </a>
              </li>
            </ul>

            {/* Tab content */}
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                    {/* <Image src="/desktop-app-images/SistemInformasiBuku1.jpg" width="400" height="200" /> */}
                    <DesktopAppSlider slides={DesktopAppImages} />
                  </div>
                  <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                    <WebAppSlider slides={WebAppImages} />
                  </div>
                  <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                    <MobileAppSlider slides={MobileAppImages} />
                  </div>
                </div>
              </div>
            </div>

            {/* end of tab content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
