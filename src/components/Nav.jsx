// import React from 'react';
// import Button from './Button';

// function Navbar() {
//   return (
//     <nav className="bg-white px-20 p-10 ">
//       <div className="container mx-auto flex-col lg:flex-row  items-center">
//         <a href="#"  className='text-2xl font-semibold mb-4 lg:mb-0 lg:mr-16'> Logo </a>
//         <ul className="flex justify-end space-x-8 mb-4 lg:mb-0 ">
//           <li><a href="#home" className="hover:text-primary mx-2">Home</a></li>
//           <li><a href="#our-work" className="hover:text-primary mx-2">Work</a></li>
//           <li><a href="#our-pricing" className="hover:text-primary mx-2">Pricing</a></li>

//           <div className='bg-primary hover:bg-purple-800 text-white font-semibold ml-2'>
//           <Button label="Get Started" />
//         </div>
//         </ul>

//       </div>
//     </nav >
//   );
// }

// export default Navbar;

import React from 'react';
import Button from './Button';

function Navbar() {
  return (
    <nav className="bg-white px-4 lg:px-20 py-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <a href="#" className="text-2xl font-semibold mb-4 lg:mb-0 lg:mr-16">Logo</a>
        <div className="lg:flex-grow">
          <ul className="flex flex-col lg:flex-row lg:justify-end space-y-4 lg:space-y-0 lg:space-x-8 ">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="#our-work" className="hover:text-primary">Work</a></li>
            <li><a href="#our-pricing" className="hover:text-primary">Pricing</a></li>
          </ul>
        </div>
        <div className='lg:ml-auto'>
          <div className='bg-primary hover:bg-purple-800 text-white font-semibold ml-2'>
            <Button label="Get Started" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

