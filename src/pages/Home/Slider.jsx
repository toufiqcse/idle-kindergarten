// @ts-nocheck
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SliderContext } from '../../Context/Context';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import AOS from 'aos';
const Slider = () => {
    const slider = useContext(SliderContext)
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide =() =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slider.length -1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () =>{
        const isLastSlide = currentIndex === slider.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)
    }
    return (
                      <div style={{ backgroundImage: `url(${slider[currentIndex].img})` }} className="h-full z-0 relative group duration-500 ease-in  bg-cover bg-center">
                        <div className=' flex justify-start items-center font-[Inter]'>
                            <div className='w-1/2 flex flex-col items-center  lg:py-20 xl:py-20 md:py-10 lg:px-20 xl:px-24 px-10 bg-gradient-to-r from-slate-800 to-slate/60'>
                                <div className=''>
                                     <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay='150' className='text-6xl text-white font-bold'>{slider[currentIndex].title}</p>
                                     <p className='text-3xl font-medium text-orange-500'>{slider[currentIndex].body}</p>
                                     <p className='text-white text-[14px] py-5'>{slider[currentIndex].description}</p>
                                     <div  data-AOS="fade-right" 
                                            data-aos-delay="150"
                                            data-aos-duration="1000">
                                        <button className='bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600 duration-500 '>
                                            <Link>{slider[currentIndex].btn}</Link>
                                        </button>
                                     </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className='hidden group-hover:block absolute top-[50%] left-5 -translate-x-0 translate-y-[-50%] text-xl p-2 rounded-full bg-black/20 text-white cursor-pointer hover:bg-black/30'>
                            <BsChevronCompactLeft onClick={prevSlide} size={30}></BsChevronCompactLeft>
                        </div>
                        <div className='hidden group-hover:block absolute top-[50%] right-5 -translate-x-0 translate-y-[-50%] text-xl p-2 rounded-full bg-black/20 text-white cursor-pointer hover:bg-black/30'>
                            <BsChevronCompactRight onClick={nextSlide} size={30}></BsChevronCompactRight>
                        </div>
                       
                    </div>
        
    );
};

export default Slider;