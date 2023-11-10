import React from 'react';
import Button from '../components/Button';

const Pricing = () => {
    return (
        <section id='our-pricing'>
            <div className="flex justify-between items-center max-lg:flex-col gap-10">
                <div className="flex flex-1 flex-col">
                    <h1 className="text-4xl font-semibold">Pricing that's simple and light on your mind and on your pocket.</h1>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <span className='text-2xl'>Our pricing policy is as <br /> transparent as our process.</span>
                </div>
            </div>

            <div className="flex justify-between max-lg:flex-col gap-10 w-full max-container p-10">

                <div className="flex-1 flex flex-col justify-center items-center max-lg:flex-col bg-slate-gray gap-10 p-5">
                    <div className="flex-1 flex justify-center items-center">
                        <div>
                            <h1 className='text-2xl font-semibold'>Basic</h1>
                            <p className='text-lg'>Suitable for solopreneurs and freelancers who are getting started.</p> <br />

                            <h1 className='text-3xl font-bold'> N80,500</h1>
                            <p className='text-xs'>You can pay 70% upfront and complete 30% after.</p> <br />
                            <hr className='border border-transparent border-b-black mb-3' />
                            <ul className='mb-5'>
                                <li>Landing Page </li>
                                <li>Free 1 year hosting</li>
                                <li>Mobile Responsiveness</li>
                                <li>Contact Form</li>
                                <li>Basic SEO</li>
                                <li>1 Month of free support</li>
                                <li>5 custom emails</li>
                            </ul>

                            <div className="flex max-sm:justify-end items-center max-sm:w-full mt-5">
                                <Button label="Get Started" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center max-lg:flex-col bg-primary gap-10 p-5">
                    <div className="flex-1 flex justify-center items-center">
                        <div>
                            <h1 className='text-white text-2xl font-semibold '>Premium</h1>
                            <p className='text-white'>Suitable for solopreneurs and freelancers who are getting started.</p>

                            <h1 className='text-3xl font-bold text-white'> N120,000</h1>
                            <p className='text-xs text-white'>You can pay 70% upfront and complete 30% after.</p> <br />
                            <hr className='border border-transparent border-b-white mb-3' />
                            <ul className='mb-5 text-white'>
                                <li>Landing Page + 3 custom pages </li>
                                <li>Free 1 year hosting</li>
                                <li>Mobile Responsiveness</li>
                                <li>Contact Form</li>
                                <li>Basic SEO</li>
                                <li>Social media integration</li>
                                <li>1 Month of free support</li>
                                <li>10 custom emails</li>
                            </ul>

                            <div className="flex max-sm:justify-end items-center max-sm:w-full mt-5">
                                <Button label="Get Started" />
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-1 flex-col">

                    </div>


                </div>

                <div className="flex-1 flex flex-col justify-center items-center max-lg:flex-col bg-slate-gray gap-10 p-5">
                    <div className="flex-1 flex justify-center items-center">
                        <div>
                            <h1 className='text-2xl font-semibold'>Supreme</h1>
                            <p>Suitable for solopreneurs and freelancers who are getting started.</p>

                            <h1 className='text-3xl font-bold'> N180,000</h1>
                            <p className='text-xs'>You can pay 70% upfront and complete 30% after.</p> <br />
                            <hr className='border border-transparent border-b-black mb-3' />
                            <ul className='mb-5'>
                                <li>Landing Page + 5 custom paged </li>
                                <li>Free 1 year hosting</li>
                                <li>Mobile Responsiveness</li>
                                <li>Contact Form</li>
                                <li>Standard SEO</li>
                                <li>Blog</li>
                                <li>Social media integration</li>
                                <li>1 Month of free support</li>
                                <li>30 custom emails</li>
                            </ul>

                            <div className="flex max-sm:justify-end items-center max-sm:w-full mt-5">
                                <Button label="Get Started" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        </section >
    )
}

export default Pricing