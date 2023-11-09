import React from 'react';
import Icon1 from '../assets/Atozpins.png';
import Icon2 from '../assets/FLPRO.png';
import Icon3 from '../assets/Instantpins.png';
import Icon4 from '../assets/Naijapins.png';
import Icon5 from '../assets/Project24.png';
import Icon6 from '../assets/Safebodi.png';
import Icon7 from '../assets/Soaaron.png';
import Icon8 from '../assets/Fathenso.png';


const Onlinebusiness = () => {
  return (
    <section>
      <div>
        <h1 className='text-white text-4xl font-semibold'>We have helped 50+ businesses <br /> get online and earn more. </h1>
      </div>

      <div className="flex justify-between max-lg:flex-col w-full max-container p-10">

        <div className="flex-1 flex-col justify-center items-center">

          <div className="mt-5">
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


        <div className="flex-1 flex-col justify-center items-center">

          <div className="mt-8">
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


        <div className="flex-1 flex-col justify-center items-center">

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

        <div className="flex-1 flex-col justify-center items-center">
          <div className="mt-5 ">
            <blockquote className='text-white text-2xl '>I can tell you first hand, Basecom is <br /> absolutely amazing. They have helped me <br /> grown my company by 125% since they <br /> revamped our website and messaging. <br /> Highly Recommened!</blockquote>
          </div>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-5 text-white">
            &#8212; David Henricks <br />CEO. Henricks Enterprise
          </figcaption>
        </div>
      </div>
    </section >
  )
}
export default Onlinebusiness