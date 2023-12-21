import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../assets/Three Page View.png';
import Image2 from '../assets/Second view page.png';
import Image3 from '../assets/Full Home Page.png';
import Arrow from '../assets/arrow.svg';

const Launch = () => {
    //creating the ref
    const customeSlider = useRef();

    const sliderSettings = {
        accessibility: true,
        arrows: false,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '100px',
        dots: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const previous = () => {
        customeSlider.current.slickNext();
    };

    const next = () => {
        customeSlider.current.slickPrev();
    };

    return (
        <section id='our-work'>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-10">

                <div className='lg:max-w-[75%]'>
                    <h1 className='text-3xl/snug font-semibold lg:font-normal lg:text-4xl text-white'>
                        Take a look at some of the websites we have built and launched successfully.
                    </h1>
                </div>

                <div className="hidden lg:flex gap-10">
                    <button onClick={previous} className='flex items-center justify-center bg-white rounded-full w-[50px] h-[50px]'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAodJREFUWEelWDtOxTAQHF+U4gENR0AUNIgWiQLxhNA7FR1n4AhGjh171/vxBtKQF9ub2d2ZsUOCeiUAGdj+0Pv2SF+kDLa11vztOX9X+dWvyHIaw33PYpDmOuOKARLVovCV+8WwVQhWIZGUlYYok13bcNXby82WWYH058dme91MbhEUwhzNOMKzETNtFPd05nKYBhKqtFYuMvI5pEB141lEDsu+mgCh0+49C79p2Sfk4lavAL4BvNRA/2tqQGUc75TsGcBte/YE4CHmIXbJKiBuxrr6ZYwKZhTkDcDdskKHOaQsGErsyM/IrTL1UQMT0dQ8h79QcojzY1q9LT4j4baQp10CzJpFRd65b5OUxwEO9fDl5p1wpsT5R2W0XJnKXI0XMBcAV4RznwCu2SpRGkrOmJsbFWKLOZiKoIC5qWcU/9JhSN7QUw7XNTe3hJw+EvKJvPkHm/ek7OLRkTzu8IVQCAorxcK8C3Jrk9tROqhkT1kbqGifMiXVW6VnEzAU2dBOEauVvso20qcPIJ8q6i1Maxnnz1rqW4DeMrstZEQXSTmh5KGwKKmDCDmw6fgxWiPwW0rjsufyWAlQHa8HtNhSDZRtjE52835Hp8oTo1qcDrm6tdg60p2eVswMqQgZqdfV6s47NtcaLbCFrKPvsok1bKhsnx8/frhYZidWVeaaG/Wtcx7tewZwH8vORrjyIZ9RdbRU6mscYWchH2dXLClllu5b1pnRr0qVTQKT/Zp2kaCeB+9q7eIQ5SMtW0jUjvHnCmsfKJJD6zLpDkv+c0MnRJyI62wOH4lAt4gDCeick4q2ZeG26QByRavtI1NV8QEOWF8LkRBKAsajmHHQNon7BjSCazHnF2nW/i1o1B+QAAAAAElFTkSuQmCC" /></button>
                    <button onClick={next} className='flex items-center justify-center bg-white rounded-full w-[50px] h-[50px]'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAApRJREFUWEetWL1u8zAMPL5AgW7F93RFgaboEOBbiy59gy5FFjdLXlSFZNkmTVGk3HoIHFmi+XO8Y0JgFwFI5TuBkNb7ZZXvXe+3Q83HkUVuIt/bl/UytR7eKN/VsCMcKs+3j3r4D1KgQrZt9jPUrmeuqKpixO3oHqfM/WhmzDmVqLgsUTheBTK0h1zLBQeGDROW1QCoe0c952q3RmrFEGt3c7ibrAwF6iNiIpCK/2AHA3gD8A/AuZ1Tzm0cSno9wl0NChCefwL4P2+iCUinkFFFMbOjknS7WTYfXgh4XbJPwJSAk8sPBn0MtX3H3wuAV2ZsQnFquSzykgXWGQqyitS7taIXJO5ULZ9DpHvMhcjKbPBqjRm9AngSmSKcqlLbHe21fRhbOvq88j07tT7slE8aYG3vjBwDnEQApeIUPTHRmwh4SVwFeXbZfaRDPyKbhE7N8WUquJvXy0fOXAb6jg63BUGMnY6oBhrkNkrGwA2gR0JKljC7dMEjanAZ1/JIIm8AHvUAU0hVEmNnSrBLZktNLtkZwD1jomsCnjPEthFZxiB4KBJekKZqp3FQ0w1IRmY2l03pGNVYtj/j8jtVLqrrE0AvBTdWzTUP7flyme5iKs3sVQ6aMQGkHQf168AypCnXO9rAwXXPPVLPOhYFD/E0BlJqkMgqrluZqriqWO3gBVNbQ7jjYw7bUXqWmQBvDTXXZk9EyQY0fBFw9sCrtLIlroFMGM6Xk+8AHvIIOxThbrMhHQdNKixq0tNy0Zmp2xlq0MFBf60ycQ3VvzqcUwpDrPbLPyfdf0ucYGYecpDvRza2o6fmx7RsgEPDsVa8aKZupOxQ9ylPYlEMl8zHsxyFi7yE07T7ocjR3gYmj9J6y++68gcS8hg7bBx0+AAAAABJRU5ErkJggg==" /></button>
                </div>
            </div>



            <Slider {...sliderSettings} ref={customeSlider} className="">
                <div className="pe-5">
                    <div className="flex-1 flex flex-col justify-center bg-white p-5">
                        <div className="flex flex-1 flex-col">
                            <img src={Image1} alt="Launch"
                                // width={500}
                                className="object-contain"
                            />
                        </div>

                        <div className="flex flex-1 flex-col mt-5">
                            <h5 class="text-heading font-semibold tracking-tight mb-2">FLPRO Limited</h5>

                            <div className="flex flex-row gap-4">
                                <p className="text-[16px] md:text-[18px]">Providing top-notch management and promotional services to artists across different niches.</p>

                                <a href="https://flprolimited.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="bg-black p-2 md:p-3 rounded-full inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" /></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pe-5">
                    <div className="flex-1 flex flex-col justify-center bg-white p-5">
                        <div className="flex flex-1 flex-col">
                            <img src={Image2} alt="Launch" className="object-contain" />
                        </div>

                        <div className="flex flex-1 flex-col mt-5">
                            <h5 class="text-heading font-semibold tracking-tight mb-2">Soaaron </h5>

                            <div className="flex flex-row">
                                <p className="text-[16px] md:text-[18px]">Providing top-notch management and promotional services to artists across different niches.</p>

                                <a href="https://flprolimited.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="bg-black p-2 md:p-3 rounded-full inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" /></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pe-5">
                    <div className="flex-1 flex flex-col justify-center bg-white p-5">
                        <div className="flex flex-1 flex-col">
                            <img src={Image3} alt="Launch"
                                className="object-contain"
                            />
                        </div>

                        <div className="flex flex-1 flex-col mt-5">
                            <h5 class="text-heading font-semibold tracking-tight mb-2">Fathenso Services</h5>
                            <div className="flex flex-row">
                                <p className="text-[16px] md:text-[18px]">Providing top-notch management and promotional services to artists across different niches.</p>

                                <a href="https://flprolimited.com/" target="_blank" rel="noopener noreferrer">
                                    <span className="bg-black p-2 md:p-3 rounded-full inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" /></svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>

            <div className="flex lg:hidden justify-end gap-5 mt-10">
                <button onClick={previous} className='flex items-center justify-center bg-white rounded-full w-[50px] h-[50px]'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAodJREFUWEelWDtOxTAQHF+U4gENR0AUNIgWiQLxhNA7FR1n4AhGjh171/vxBtKQF9ub2d2ZsUOCeiUAGdj+0Pv2SF+kDLa11vztOX9X+dWvyHIaw33PYpDmOuOKARLVovCV+8WwVQhWIZGUlYYok13bcNXby82WWYH058dme91MbhEUwhzNOMKzETNtFPd05nKYBhKqtFYuMvI5pEB141lEDsu+mgCh0+49C79p2Sfk4lavAL4BvNRA/2tqQGUc75TsGcBte/YE4CHmIXbJKiBuxrr6ZYwKZhTkDcDdskKHOaQsGErsyM/IrTL1UQMT0dQ8h79QcojzY1q9LT4j4baQp10CzJpFRd65b5OUxwEO9fDl5p1wpsT5R2W0XJnKXI0XMBcAV4RznwCu2SpRGkrOmJsbFWKLOZiKoIC5qWcU/9JhSN7QUw7XNTe3hJw+EvKJvPkHm/ek7OLRkTzu8IVQCAorxcK8C3Jrk9tROqhkT1kbqGifMiXVW6VnEzAU2dBOEauVvso20qcPIJ8q6i1Maxnnz1rqW4DeMrstZEQXSTmh5KGwKKmDCDmw6fgxWiPwW0rjsufyWAlQHa8HtNhSDZRtjE52835Hp8oTo1qcDrm6tdg60p2eVswMqQgZqdfV6s47NtcaLbCFrKPvsok1bKhsnx8/frhYZidWVeaaG/Wtcx7tewZwH8vORrjyIZ9RdbRU6mscYWchH2dXLClllu5b1pnRr0qVTQKT/Zp2kaCeB+9q7eIQ5SMtW0jUjvHnCmsfKJJD6zLpDkv+c0MnRJyI62wOH4lAt4gDCeick4q2ZeG26QByRavtI1NV8QEOWF8LkRBKAsajmHHQNon7BjSCazHnF2nW/i1o1B+QAAAAAElFTkSuQmCC" /></button>
                <button onClick={next} className='flex items-center justify-center bg-white rounded-full w-[50px] h-[50px]'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAApRJREFUWEetWL1u8zAMPL5AgW7F93RFgaboEOBbiy59gy5FFjdLXlSFZNkmTVGk3HoIHFmi+XO8Y0JgFwFI5TuBkNb7ZZXvXe+3Q83HkUVuIt/bl/UytR7eKN/VsCMcKs+3j3r4D1KgQrZt9jPUrmeuqKpixO3oHqfM/WhmzDmVqLgsUTheBTK0h1zLBQeGDROW1QCoe0c952q3RmrFEGt3c7ibrAwF6iNiIpCK/2AHA3gD8A/AuZ1Tzm0cSno9wl0NChCefwL4P2+iCUinkFFFMbOjknS7WTYfXgh4XbJPwJSAk8sPBn0MtX3H3wuAV2ZsQnFquSzykgXWGQqyitS7taIXJO5ULZ9DpHvMhcjKbPBqjRm9AngSmSKcqlLbHe21fRhbOvq88j07tT7slE8aYG3vjBwDnEQApeIUPTHRmwh4SVwFeXbZfaRDPyKbhE7N8WUquJvXy0fOXAb6jg63BUGMnY6oBhrkNkrGwA2gR0JKljC7dMEjanAZ1/JIIm8AHvUAU0hVEmNnSrBLZktNLtkZwD1jomsCnjPEthFZxiB4KBJekKZqp3FQ0w1IRmY2l03pGNVYtj/j8jtVLqrrE0AvBTdWzTUP7flyme5iKs3sVQ6aMQGkHQf168AypCnXO9rAwXXPPVLPOhYFD/E0BlJqkMgqrluZqriqWO3gBVNbQ7jjYw7bUXqWmQBvDTXXZk9EyQY0fBFw9sCrtLIlroFMGM6Xk+8AHvIIOxThbrMhHQdNKixq0tNy0Zmp2xlq0MFBf60ycQ3VvzqcUwpDrPbLPyfdf0ucYGYecpDvRza2o6fmx7RsgEPDsVa8aKZupOxQ9ylPYlEMl8zHsxyFi7yE07T7ocjR3gYmj9J6y++68gcS8hg7bBx0+AAAAABJRU5ErkJggg==" /></button>
            </div>
        </section >
    );
};

export default Launch;
