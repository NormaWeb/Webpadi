import React from 'react';
import Button from './Button';

function Navbar() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">

      <div className=" text-2xl font-semibold mb-4 lg:mb-0 lg:mr-10"> Logo</div>

      <ul className="flex space-x-6 pl-20  mb-4 lg:mb-0">
        <li><a href="#" className="hover:text-primary">Home</a></li>
        <li><a href="#" className="hover:text-primary">Work</a></li>
        <li><a href="#" className="hover:text-primary">Pricing</a></li>
      </ul>

      <div className='bg-primary hover:bg-purple-800 text-white font-semibold ml-2 '>
      <Button label="Get Started" />
      </div>
    </div>
    </nav >
  );
}

export default Navbar;
