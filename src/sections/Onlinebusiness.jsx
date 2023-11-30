import React from 'react';
import Icon1 from '../assets/Atozpins.png';
import Icon2 from '../assets/FLPRO.png';
import Icon3 from '../assets/Instantpins.png';
import Icon4 from '../assets/Naijapins.png';
import Icon5 from '../assets/Project24.png';
import Icon6 from '../assets/Safebodi.png';
import Icon7 from '../assets/Soaaron.png';
import Icon8 from '../assets/Fathenso.png';
import Image from '../assets/Image1.png';


const Onlinebusiness = () => {
  return (
    <section>
      <div className='lg:max-w-[65%] mb-10'>
        <h1 className='text-white text-3xl/snug lg:text-4xl font-semibold'>We have helped 50+ businesses get online and earn more.</h1>
      </div>

      <div className="flex justify-around  max-lg:flex-col">

        <div className="columns-2 lg:columns-3 gap-8 grow">

          <div className="flex lg:items-center h-[72px] lg:h-[120px]  w-[104px] lg:w-[100%]">
            <img src={Icon1} alt="" width={150}
              className="object-contain"
            />
          </div>

          <div className="flex lg:items-center h-[72px] lg:h-[120px]  w-[104px] lg:w-[100%]">
            <img src={Icon2} alt="" width={150}
              className="object-contain"
            />
          </div>

          <div className="flex lg:items-center h-[72px] lg:h-[120px]  w-[104px] lg:w-[100%]">
            <img src={Icon3} alt="" width={150}
              className="object-contain"
            />
          </div>

          <div className="flex lg:items-center h-[72px] lg:h-[120px]  w-[104px] lg:w-[100%]">
            <img src={Icon4} alt="" width={150}
              className="object-contain"
            />
          </div>
          <div className="flex lg:items-center h-[72px] lg:h-[120px]  w-[104px] lg:w-[100%]">
            <img src={Icon5} alt="" width={150}
              className="object-contain"
            />
          </div>
          <div className="flex lg:items-center h-[72px] lg:h-[120px]  w-[104px] lg:w-[100%]">
            <img src={Icon6} alt="" width={150}
              className="object-contain"
            />
          </div>

          <div className="flex lg:items-center h-[72px] lg:h-[120px]  w-[104px] lg:w-[100%]">
            <img src={Icon7} alt="" width={150}
              className="object-contain"
            />
          </div>

          <div className="flex lg:items-center h-[72px] lg:h-[120px]  w-[104px] lg:w-[100%]">
            <img src={Icon8} alt="" width={150}
              className="object-contain"
            />
          </div>

          <div className="flex lg:items-center h-[72px] lg:h-[120px]  w-[104px] lg:w-[100%]">
            <img src={Icon2} alt="" width={150}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1 flex-col lg:ml-10 md:w-2/3 lg:w-1/2">
          <div className="mt-5">
            <span className="text-7xl/none text-white">&ldquo;</span>
            <p className='text-white text-xl/snug'>
              I can tell you first hand, Basecom is absolutely amazing. They have helped me grow my company by 125% since they revamped our website and messaging. Highly Recommended!
            </p>
          </div>

          <div className='flex gap-3 mt-8'>
            <img src={Image} alt=""
              width={100}
              className="object-cover rounded-full w-[50px] h-[50px]" />

            <div className='flex-1 flex-col'>
              <span className="text-white text-lg font-semibold">David Henricks</span>
              <p className='text-white text-sm mt-1'>CEO, Henricks Enterprise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Onlinebusiness