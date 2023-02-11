// @ts-nocheck
import React, { useContext } from 'react';
import { AboutContext } from '../../Context/Context';

const AboutDetails = () => {
    const abouts = useContext(AboutContext)
    
    return (
            <div className='my-14'>
                {
                    abouts.map(about => (
                        <div key={about.id} about={about}>
                            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap container md:container md:px-8 lg:container xl:container lg:px-8  mx-auto font-[Inter] w-full'>
                                <div className='flex px-3 lg:px-0  md:w-1/4 lg:w-1/4 xl:w-1/4 w-full gap-3'>
                                    <img className='w-[30px] h-[50px]' src={about.about_img} alt="" />
                                    <p className='text-xl font-bold'>{about.about_title}</p>
                                </div>
                                <div className='md:w-3/4 lg:w-3/4 xl:w-3/4 w-full text-justify text-slate-500 pl-12 md:pl-16 lg:pl-20 xl:pl-20 '>
                                    <p className='text-[0.9rem] '>{about.content_1}</p>
                                    <br />
                                    <p className='text-[0.9rem]'>{about.content_2}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
    );
};

export default AboutDetails;