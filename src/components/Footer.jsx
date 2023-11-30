import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary padding">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="text-white text-2xl font-semibold mb-14 lg:mb-0"> Logo</div>

        <ul className="flex flex-col lg:flex-row lg:space-x-10 gap-10 text-white mb-4 lg:mb-0 ">
          <li><a href="#" className="hover:text-gray-300 text-xl">Home</a></li>
          <li><a href="#" className="hover:text-gray-300 text-xl">Terms of Use</a></li>
          <li><a href="#" className="hover:text-gray-300 text-xl">Privacy and Cookies Policy</a></li>
        </ul>
      </div>

      <div className="text-white text-xl mt-10">
        All right reserved  &copy; 2023 | Powered by <a href="https://oniontabs.com" target="_blank" rel="noopener noreferrer">Oniontabs LLC</a>
      </div>
    </footer>
  );
}

export default Footer;
