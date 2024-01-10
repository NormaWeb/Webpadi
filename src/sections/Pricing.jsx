import React from 'react';
import Button from '../components/Button';

const Pricing = () => {
    return (
        <section id='our-pricing'>
            <div className="flex justify-between items-center max-lg:flex-col lg:gap-20 mb-10">
                <div className="mb-5 lg:mb-0 lg:max-w-[62%]">
                    <h1 className="text-3xl/snug font-semibold lg:font-normal lg:text-4xl">Pricing that's simple and light on your mind and on your pocket.</h1>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <span className='text-heading'>Our pricing policy is as transparent as our process.</span>
                </div>
            </div>

            <div className="flex justify-between max-lg:flex-col gap-10">

                <div className="flex-1 flex flex-col justify-center items-center max-lg:flex-col bg-slate-gray p-5">
                    <div className="flex-1 flex justify-center items-center py-5">
                        <div>
                            <h1 className='text-2xl font-semibold mb-1'>Basic</h1>
                            <p className='text-lg mb-4'>Suitable for solopreneurs and freelancers who are getting started.</p>

                            <h1 className='text-3xl font-bold'> N80,500</h1>
                            <p className=''>You can pay 70% upfront and complete 30% after.</p> <br />
                            <p className='text-lg'>Duration: <span className="text-lg font-semibold ms-1">2 - 3 Days</span></p> <br />
                            <hr className='border border-transparent border-b-black mb-3' />

                            <div className='flex gap-3 items-center mt-5'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Landing Page </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Free 1 year hosting </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Mobile Responsiveness</div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Contact Form </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Basic SEO </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> 1 Month of free support</div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> 5 custom emails </div>
                            </div>


                            <div className="flex max-sm:justify-end items-center max-sm:w-full mt-10">
                                <Button label="Get Started" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex-1 flex flex-col justify-center items-center max-lg:flex-col bg-primary gap-10 p-5">
                    <div className="flex-1 flex justify-center items-center py-5">
                        <div>
                            <h1 className='text-white text-2xl font-semibold mb-1'>Premium</h1>
                            <p className='text-lg text-white mb-4'>Suitable for solopreneurs and freelancers who are getting started.</p>

                            <h1 className='text-3xl font-bold text-white'> N120,000</h1>
                            <p className=' text-white'>You can pay 70% upfront and complete 30% after.</p> <br />
                            <p className='text-lg text-white'>Duration: <span className="text-lg font-semibold ms-1">7 - 10 Days</span></p> <br />
                            <hr className='border border-transparent border-b-white mb-3' />

                            <div className=' flex gap-3 items-center mt-5'>
                                <div className='w-2 h-2 bg-white rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col text-white'> Landing Page  + 3 custom pages</div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-white rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col text-white'> Mobile Responsiveness </div>
                            </div>
                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-white rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col  text-white'> Free 1 year hosting</div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-white rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col  text-white'> Contact Form </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-white rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col  text-white'> Basic SEO </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-white rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col text-white '> Social media integration </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-white rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col text-white '>1 Month of free suppor</div>
                            </div>

                            <div className=' flex gap-3 items-center '>
                                <div className='w-2 h-2 bg-white rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col text-white '> 10 custom emails </div>
                            </div>


                            <div className="flex max-sm:justify-end items-center max-sm:w-full mt-5">
                                <Button label="Get Started" backgroundColor="bg-white" textColor="text-black" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex-1 flex flex-col justify-center items-center max-lg:flex-col bg-slate-gray gap-10 p-5">
                    <div className="flex-1 flex justify-center items-center py-5">
                        <div>
                            <h1 className='text-2xl font-semibold mb-1'>Supreme</h1>
                            <p className='text-lg mb-4'>Suitable for solopreneurs and freelancers who are getting started.</p>

                            <h1 className='text-3xl font-bold'> N180,000</h1>
                            <p className=''>You can pay 70% upfront and complete 30% after.</p> <br />
                            <p className='text-lg'>Duration: <span className="text-lg font-semibold ms-1">14 - 16 Days</span></p> <br />
                            <hr className='border border-transparent border-b-black mb-3' />

                            <div className=' flex gap-3 items-center mt-5'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Landing Page + 5 custom paged </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Free 1 year hosting </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Mobile Responsiveness </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Contact Form</div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Standard SEO </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Blog </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> Social media integration </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> 1 Month of free support </div>
                            </div>

                            <div className=' flex gap-3 items-center'>
                                <div className='w-2 h-2 bg-black rounded-xl flex-col'></div>
                                <div className='flex-1 flex-col'> 30 custom emails </div>
                            </div>


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