import React from 'react';
import Button from '../components/Button';
import Image1 from '../assets/Image1.png';

const Smallbusiness = () => {
    return (
        <div className="">
            <div>
                <h1 className='text-7xl font-semibold leading-tight'>Take your small <br />
                    business online today.</h1> <br />
                <p className='text-3xl'>Let's build a high-converting website for your business so <br />
                    your customers and potential customers see and know <br />
                    what you do/sell with a click of a button.</p> <br />

                <div className="flex max-sm:justify-end items-center max-sm:w-full mb-5">
                    <Button label="Get Started" />
                </div>
            </div>
            

            <div className='mt-10'>
                < img src={Image1} alt="Create an Account"
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default Smallbusiness