import React, { useState } from 'react';
import Icon from '../assets/Chats Circle.svg';
import Button from '../components/Button';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqData = [
        {
            question: 'Why should I have a website?',
            answer: 'A website is the first step toward growing an online presence for your business or passion project, whether you want to sell online or manage a blog. With Webpadi, you can get started with a website customized to fit your brand.',
        },
        {
            question: "How does pricing work?",
            answer: 'Webpadi offers a range of packages tailored to meet diverse needs and budgets. These packages are designed to cater to different levels of business requirements, from solopreneurs and freelancers to larger enterprises seeking more extensive web solutions. Each package includes essential features such as mobile responsiveness, SEO optimization, and ongoing support to ensure your website performs optimally. ',
        },
        {
            question: "What's your edge over other web design agencies?",
            answer: 'Webpadi prides itself on its agile development methodology, strong focus on business requirements and ROI, quick response times, and a commitment to delivering high-quality, responsive websites. They offer extensive project management experience and ensure their websites are optimized for both user experience and search engines',
        },
        {
            question: "What's your team's design process?",
            answer: 'Webpadi makes getting a website a breeze. Choose a package that suits your budget and that of your business. Review a draft copy of your website content that perfectly captures your brand. Share your brand idea with us on a call- no boring paperwork, no confusing forms and get your custom-tailored website that meets your business needs.',
        },
        {
            question: 'How much support do you need on a project?',
            answer: 'A website might be the face of the brand, but you are the heart and soul behind it. We need your insightful ideas to bring your dream website to life.',
        },
        {
            question: 'We need an app to go with our website, can you do it?',
            answer: 'Yes, we can. While Webpadi excels in web design needs, we also assist clients in building apps that seamlessly integrate with their websites. ',
        },
    ];

    return (
        <section className="max-container">
            <div className="mb-10 lg:max-w-[45%]">
                <h1 className="section-text-heading mb-4">Frequently Asked Questions</h1>
                <p className='text-xl'>This is where we answer all your questions. Check it out.</p>
            </div>

            <div className="flex justify-between max-lg:flex-col gap-20">
                <div className="flex-1">
                    <div className="">
                        {faqData.map((item, index) => (
                            <div key={index} className="py-4">
                                <button
                                    className="flex text-start justify-between w-full border border-transparent border-b-black pb-4 gap-3"
                                    onClick={() => handleAccordionClick(index)}
                                >
                                    <h1 className="font-semibold">{item.question}</h1>
                                    <span className="">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d={
                                                    activeIndex === index
                                                        ? 'M12 6v6m0 0v6m0-6h6m-6 0H6'
                                                        : 'M12 6v6m0 0v6m0-6h6m-6 0H6'
                                                }
                                            />
                                        </svg>
                                    </span>
                                </button>
                                {activeIndex === index && <p className='mt-3'>{item.answer}</p>}
                            </div>
                        ))}

                    </div>
                </div>

                <div className="flex-1 flex flex-col max-lg:flex-col bg-slate-gray p-10 text-center">
                    <div className='flex flex-col items-center'>
                        <img src={Icon} alt="FAQs"
                            width={180}
                            className="object-contain items-center w-17 h-17 mb-5"
                        />
                        <span className='text-3xl font-bold mb-5'> You have different questions?</span>
                        <p className='text-xl'> Our team will answer all your questions. <br /> We ensure a quick response.</p>

                        <div className="flex justify-center items-center mt-6">
                            <Button label="Contact Support" url="https://wa.me/+2347014236712?text=I want to get the *Webpadi Basic Package* for my business/brand." />
                        </div>
                    </div>
                </div>
            </div>

        </section >

    )
}

export default FAQs