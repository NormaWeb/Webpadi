// import React from 'react';
// import Image1 from '../assets/Three Page View.png';
// import Image2 from '../assets/Second view page.png';
// import Image3 from '../assets/Full Home Page.png';

// const Launch = () => {
//     return (
//         <section id='our-work'>
//             <div>
//                 <h1 className='text-4xl font-semibold leading-tight text-white'>Take a look at some of the websites <br /> we have built and launch successfully.</h1>
//             </div>

//             <div className="flex justify-between max-lg:flex-col gap-10 w-full max-container p-10">

//                 <div className="flex-1 flex flex-col justify-center  max-lg:flex-col bg-white gap-10 p-6">
//                     <div className="flex-1 flex justify-center items-center">
//                         <div>
//                             <img src={Image1} alt="Launch"
//                                 className="object-contain"
//                             />

//                         </div>

//                     </div>
//                     <div className="flex flex-1 flex-col">
//                         <h5 class="text-xl font-semibold tracking-tight">FLPRO Limited</h5>
//                         <p className="">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Eius, ea.</p>
//                     </div>


//                 </div>

//                 <div className="flex-1 flex flex-col justify-center max-lg:flex-col bg-white gap-10 p-6">
//                     <div className="flex-1 flex justify-center items-center">
//                         <div>
//                             <img src={Image2} alt="Launch"
//                                 className="object-contain"
//                             />
//                         </div>

//                     </div>
//                     <div className="flex flex-1 flex-col">
//                         <h5 class="text-xl font-semibold tracking-tight">Soaaron </h5>
//                         <p className="">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Eius, ea.</p>
//                     </div>


//                 </div>

//                 <div className="flex-1 flex flex-col justify-center max-lg:flex-col bg-white gap-10 p-6">
//                     <div className="flex-1 flex justify-center items-center">
//                         <div>
//                             <img src={Image3} alt="Launch"
//                                 className="object-contain"
//                             />
//                         </div>

//                     </div>
//                     <div className="flex flex-1 flex-col">
//                         <h5 class="text-xl font-semibold tracking-tight">Fathenso Services</h5>
//                         <p className="">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Eius, ea.</p>
//                     </div>


//                 </div>
//             </div>

//         </section>
//     )
// }

// export default Launch


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../assets/Three Page View.png';
import Image2 from '../assets/Second view page.png';
import Image3 from '../assets/Full Home Page.png';

const Launch = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section id='our-work'>
            <div>
                <h1 className='text-4xl font-semibold leading-tight text-white'>
                    Take a look at some of the websites <br /> we have built and launched successfully.
                </h1>
            </div>

            <Slider {...sliderSettings} className="max-container p-10">

                 <div className="flex-1 flex flex-col justify-center bg-white gap-10 p-6">
                 <div className="flex flex-1 flex-col">
                        <img src={Image1} alt="Launch"
                        // width={500}
                            className="object-contain"
                        />
                    </div>

                <div className="flex flex-1 flex-col mt-5">
                     <h5 class="text-xl font-semibold tracking-tight">FLPRO Limited</h5>
                    <p className="">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Eius, ea.</p> 
                </div>
                </div>


                <div className="flex-1 flex flex-col justify-center bg-white gap-10 p-6">
                    <div className="flex flex-1 flex-col">
                        <img src={Image2} alt="Launch" className="object-contain" />
                    </div>

                <div className="flex flex-1 flex-col mt-5">
                     <h5 class="text-xl font-semibold tracking-tight">Soaaron </h5>                         <p className="">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Eius, ea.</p> 
                </div>
                </div>



                <div className="flex-1 flex flex-col justify-center bg-white gap-10 p-6">

                    <div className="flex flex-1 flex-col">
                        <img src={Image3} alt="Launch"
                            className="object-contain"
                        />
                    </div>
                   
                <div className="flex flex-1 flex-col mt-5">                        
                  <h5 class="text-xl font-semibold tracking-tight">Fathenso Services</h5>                    
                  <p className="">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Eius, ea.</p> 
                </div> 
                </div> 

               
            </Slider>
        </section >
    );
};

export default Launch;
