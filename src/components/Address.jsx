import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Address = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 justify-center max-w-screen-lg mx-auto'>
      <div className='pb-8 md:pr-4 md:w-1/2'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
          Address
        </p>
        <div className="mt-10 flex items-center">
          <div className="mr-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
          </div>
          <div>
          <a href="mailto:dagimasnake1@gmail.com" target="_blank" rel="noopener noreferrer" >dagimasnake1@gmail.com</a>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <div className="mr-4">
            <FaPhone className="text-blue-500 text-2xl" />
          </div>
          <div>
          <a href="tel:+251 943 43 96 92" target="_blank" rel="noopener noreferrer">+251 943 43 96 92</a>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <div className="mr-4">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
          </div>
          <div>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
