import React from 'react';
import Button from '../components/Button';

const Simplified = () => {
    return (
        <section>
            <div className="flex justify-between max-lg:flex-col lg:gap-20 w-full max-container">
                <div className="lg:max-w-[38%] mb-10 lg:mb-0">
                    <h1 className="section-text-heading mb-5">We have a simplified process.</h1>
                    <p className="text-heading mb-7">Get your business online today in just four simple steps.</p>

                    <Button label="Get Started" url="https://wa.me/+2347014236712?text=I want to get the *Webpadi Basic Package* for my business/brand."/>
                </div>

                <div className="flex-1 flex-col justify-center items-center">
                    <div className="mt-5">
                        <div className='flex mb-4 w-12 h-12 justify-center items-center text-white bg-primary rounded-full font-semibold'>
                            <h1 className='text-heading'>1</h1>
                        </div>

                        <h4 className="text-heading font-semibold">Choose a package</h4>
                        <p className='text-[18px] mt-2'>Choose a package that is right for you depending on your nature of business, budget and business launch needs.</p>
                    </div>

                    <div className="mt-10">
                        <div className='flex mb-4 w-12 h-12 justify-center items-center text-white bg-primary rounded-full font-semibold'>
                            <h1 className="text-heading">2</h1>
                        </div>

                        <h4 className="text-heading font-semibold">Review your Draft</h4>
                        <p className='text-[18px] mt-2'>Review a draft copy of your website content and UI design.</p>
                    </div>
                </div>

                <div className="flex-1 flex-col justify-center items-center">
                    <div className="mt-5">
                        <div className='flex mb-4 w-12 h-12 justify-center items-center text-white bg-primary rounded-full font-semibold'>
                            <h1 className="text-heading">3</h1>
                        </div>

                        <h4 className="text-heading font-semibold">Answer a few Questions</h4>
                        <p className='text-[18px] mt-2'>Give us a few information about your business via a simple chat. No boring forms. No confusing paperwork.</p>
                    </div>

                    <div className="mt-10">
                        <div className='flex mb-4 w-12 h-12 justify-center items-center text-white bg-primary rounded-full font-semibold'>
                            <h1 className="text-heading">4</h1>
                        </div>

                        <h4 className="text-heading font-semibold">Launch your Website</h4>
                        <p className='text-[18px] mt-2'>Our experts will deliver a custom-tailored website that fit the need of your business to help you earn more.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Simplified