import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary p-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-white text-2xl font-semibold mb-4 lg:mb-0 lg:mr-6"> Logo</div>
        
        <ul className="flex space-x-10 gap-10 text-white mb-4 lg:mb-0 ">
          <li><a href="#" className="hover:text-gray-300 text-xl">Home</a></li>
          <li><a href="#" className="hover:text-gray-300 text-xl">Terms of Use</a></li>
          <li><a href="#" className="hover:text-gray-300 text-xl">Privacy and Cookies Policy</a></li>
        </ul>
      </div>
      
      <div className=" text-white text-xl mt-10">
        All right reserved  &copy; 2023 | Oniontabs LLC
      </div>
    </footer>
  );
}

export default Footer;
