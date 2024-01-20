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
      <div>
        <h1 className='text-white text-4xl font-semibold'>We have helped 50+ businesses <br /> get online and earn more. </h1>
      </div>

      <div className="flex justify-around  max-lg:flex-col  mt-8">

        <div className="flex-1 flex-col md:w-1/3 lg:w-1/2">

          <div className="mt-8">
            <img src={Icon1} alt=""
              width={130}
              className="object-contain"
            />
          </div>

          <div className="mt-16">
            <img src={Icon2} alt=""
              width={130}
              className="object-contain"
            />
          </div>

          <div className="mt-16">
            <img src={Icon3} alt=""
              width={130}
              className="object-contain"
            />
          </div>
        </div>


        <div className="flex-1 flex-col md:w-1/3 lg:w-1/2">

          <div className="mt-10">
            <img src={Icon4} alt=""
              width={130}
              className="object-contain"
            />
          </div>
          <div className="mt-16">
            <img src={Icon5} alt=""
              width={130}
              className="object-contain"
            />
          </div>
          <div className="mt-16">
            <img src={Icon6} alt=""
              width={130}
              className="object-contain"
            />
          </div>
        </div>


        <div className="flex-1 flex-col md:w-1/3 lg:w-1/2 ">

          <div className="mt-8">
            <img src={Icon7} alt=""
              width={130}
              className="object-contain"
            />
          </div>

          <div className="mt-16">
            <img src={Icon8} alt=""
              width={130}
              className="object-contain"
            />
          </div>

          <div className="mt-16">
            <img src={Icon2} alt=""
              width={130}
              className="object-contain"
            />
          </div>
        </div>


        <div className="flex-1 flex-col ml-10 md:w-2/3 lg:w-1/2">
          <div className="mt-5 relative">
            <blockquote className='text-white text-xl relative pl-8'>
              <span className="absolute left-0 top-0 text-4xl">&ldquo;</span>
              I can tell you first hand, Basecom is <br /> absolutely amazing. They have helped me <br /> grow my company by 125% since they <br /> revamped our website and messaging. <br /> Highly Recommended!
            </blockquote>
          </div>

          <div className='flex '>
            <div className='flex-1 flex-col'>
              <img src={Image} alt=""
                width={100}
                className="object-contain rounded-2xl mt-8"
              // className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className='flex-1 flex-col mt-8'>
              <span className=" text-xl text-right   text-white">
                David Henricks
              </span>
              <p className='text-white text-sm mt-1'>CEO, Henricks Enterprise</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
export default Onlinebusiness