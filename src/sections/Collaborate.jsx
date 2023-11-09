import React from 'react';
import Image from '../assets/Collaborate.png';
import Button from '../components/Button';

const Collaborate = () => {
    return (

        <div className="flex-1 flex flex-col justify-center max-lg:flex-col bg-slate-gray gap-10 p-10">
            <div className="flex-1 flex justify-center items-center">

                <div className=''>
                    <h1 className='text-6xl font-semibold  '> Take your business online.</h1>
                    <p className='text-xl mt-5 '> Collaborate with our passionate team of designers and <br /> developers to build a website.</p>

                    <div className="flex mt-10">
                        <Button label="Get Started" />
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div>
                        <img src={Image} alt="FAQs"
                            className="object-contain items-center"
                        />

                    </div>
                </div>
            </div>
            </div>
 )
}

 export default Collaborate