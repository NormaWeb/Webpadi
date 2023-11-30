import React from 'react';
import Image from '../assets/Collaborate.png';
import Button from '../components/Button';

const Collaborate = () => {
    return (
        <div className="relative flex-1 flex flex-col justify-center max-lg:flex-col bg-slate-gray gap-10 p-10 call-out">
            <div className='lg:max-w-[60%]'>
                <h1 className='section-text-heading mb-5'> Take your business online.</h1>
                <p className='text-xl mb-10 '> Collaborate with our passionate team of designers and <br /> developers to build a website.</p>

                <Button label="Get Started" />
            </div>
        </div>

    )
}

export default Collaborate