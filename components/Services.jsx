import React from 'react';
import { FaChrome, FaDesktop, FaMobile, FaMix } from 'react-icons/fa';
const Services = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Our Services</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 text-center flex justify-center">
              <FaDesktop size={100} />
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Desktop App</h5>
              <p className="text-gray-700 text-base mb-4 text-center">Build, test, and deploy desktop form window applications which are using .NET Framework, to clients or companies..</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 text-center flex justify-center">
              <FaChrome size={100} />
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Web App</h5>
              <p className="text-gray-700 text-base mb-4 text-center">Build, test, and deploy web applications/websites to clients or companies.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 text-center flex justify-center">
              <FaMobile size={100} />
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Mobile App</h5>
              <p className="text-gray-700 text-base mb-4 text-center">Build, test, and deploy mobile applications to clients or companies using Flutter framework.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 text-center flex justify-center">
              <FaMix size={100} />
            </div>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Web and Mobile App</h5>
              <p className="text-gray-700 text-base mb-4 text-center">Build, test, and deploy both combination mobile and web applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
