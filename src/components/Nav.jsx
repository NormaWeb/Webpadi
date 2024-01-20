import React, { useState } from 'react';
import Button from './Button';
import Logo from '../assets/logo.png';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="bg-slate-gray padding-x pb-4 pt-8">
      <div className="flex flex-col lg:flex-row lg:items-center">

        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-semibold">
            <img src={Logo} alt="Webpadi Logo" width={150} className="object-contain" />
          </a>

          <div className="flex gap-3 items-center lg:hidden">
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAdxJREFUWEelV1EWwjAIozf35vNtqyuUAGHux6draSAk1CHlM2TIIccQkUMvdj/Ml9Hv4CCwdODt3aDM+mLNfH1+cI/aYArF7d5WaXCTAVVfrpbpwTF9F90M6LBCFvzVNwytNWlMz53Vgo/dfH2rT7SRmPMDbkpIoGhMHgxRstf/rhBTAnoNiWNfNuPzlHVbH3nMbmU5ZVZ+xN52KRZGVY6fBJHKtqRitbrsgQhquLekjFqGZE5dAmKElwgCtgvv1HXG8YqGBSiVNbo2VZzrxVYqAWWNGAxvTLiwqWkXVNMQ2fhLoN4YV6APSgyfE5+etM/HqyacZRcUakh70DS4KXs/AiOGS0AvWdGzak0u1QERIEAZA4GeGTM+dUHTDVvcKpQ6UE8s5plk7jn/PKm9NKSbxixM0jt1KnuGDq4SWxkeSnKn1i0HgHaPdkUO8rOUrV3FcNXNYyOTQD07p/6SzaXscVtFXe5Aj+0q9PAB/1YMkSNH1K2KS500RrLehRkwmoRrII/9aKkZAQaiK4qZZREF8f2mLqYF6nwO5OGNkS5PDecMldoaGAh/XdA4SMklpvKhVMbgZQ8QtzqnLI3BkEHz/3D7TmWuO6ODYzfPdsRpAC/DF0mODncLACd/AVLEyCtPWh9jAAAAAElFTkSuQmCC" />
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

