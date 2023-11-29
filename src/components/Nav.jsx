import React, { useState } from 'react';
import Button from './Button';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="bg-slate-gray px-4 lg:px-[4rem] pb-4 pt-8">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center">

        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-semibold">Logo</a>

          <div className="flex gap-3 items-center lg:hidden">
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                MENU
              </button>
            </div>
          </div>

        </div>


        <div className={`lg:flex lg:ms-auto ${!toggleMenu && "hidden"} mt-5 lg:mt-0`}>
          <ul className="flex flex-col lg:flex-row lg:justify-end lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 lg:me-10">
            <li><a href="#home" className="font-semibold hover:text-primary">Home</a></li>
            <li><a href="#our-work" className="font-semibold hover:text-primary">Work</a></li>
            <li><a href="#our-pricing" className="font-semibold hover:text-primary">Pricing</a></li>
          </ul>

          <div className='font-semibold mt-5 lg:mt-0'>
            <Button label="Get Started" />
          </div>
        </div>


      </div>
    </nav >
  );
}

export default Navbar;

