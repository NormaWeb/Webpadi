import React from 'react';
import Button from '../components/Button';
import Image1 from '../assets/Image1.png';

const Smallbusiness = () => {
    return (
        <div className="">
            <div className='lg:max-w-[65%]'>
                <h1 className='text-5xl lg:text-7xl/none font-semibold mb-5'>Take your small business online today.</h1>
                <p className='text-[23px]/normal md:text-3xl/snug mb-6'>Get a high-converting website for your business so
                    your customers and potential customers see and know
                    what you do/sell with a click of a button.</p>

                <Button label="Get Started" />
            </div>

            <img src={Image1} alt="Create an Account" className="object-contain mt-10" />
        </div>
    )
}

export default Smallbusiness