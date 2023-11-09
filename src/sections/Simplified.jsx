import React from 'react';
import Icon1 from '../assets/one.png';
import Icon2 from '../assets/two.png';
import Icon3 from '../assets/three.png';
import Icon4 from '../assets/four.png';
import Button from '../components/Button';
const Simplified = () => {
    return (
        <section>
            <div className="flex justify-between max-lg:flex-col gap-10 w-full max-container p-10">
                <div className="flex flex-1 flex-col">
                    <h1 className="text-4xl font-semibold mb-5 leading-tight">We have a simplified process.</h1>
                    <p className="text-xl">Get your business online today in just four simple steps.</p>

                    <div className="flex max-sm:justify-end items-center max-sm:w-full mt-5">
                        <Button label="Get Started" />
                    </div>
                </div>

                <div className="flex-1 flex-col justify-center items-center">
                    <div className="mt-5">
                        <img src={Icon1} alt="Choose a package"
                            width={50}
                            className="object-contain"
                        />
                        <h4 className="text-2xl mt-3 font-semibold">Choose a package</h4>
                        <p className='text-xl mt-3'>Choose a package that is right for you depending on your nature of business, budget and business launch needs.</p>
                    </div>

                    <div className="mt-10">
                        <img src={Icon2} alt="Review your draft"
                            width={50}
                            className="object-contain"
                        />

                        <h4 className="text-2xl mt-3 font-semibold">Review your Draft</h4>
                        <p className='text-xl mt-3'>Review a draft copy of your website content and UI design.</p>
                    </div>
                </div>

                <div className="flex-1 flex-col justify-center items-center">
                    <div className="mt-5">
                        <img src={Icon3} alt="Answer questions"
                            width={50}
                            className="object-contain"
                        />
                        <h4 className="text-2xl mt-3 font-semibold">Answer a few Questions</h4>
                        <p className='text-xl mt-3'>Give us a few information about your business via a simple chat. No boring forms. No confusing paperwork.</p>
                    </div>

                    <div className="mt-10">
                        <img src={Icon4} alt="Launch website"
                            width={50}
                            className="object-contain"
                        />
                        <h4 className="text-2xl mt-3 font-semibold">Launch your Website</h4>
                        <p className='text-xl mt-3'>Our experts will deliver a custom-tailored website that fit the need of your business to help you earn more.</p>
                    </div>
                </div>
            </div>
        </section >

    )
}


export default Simplified