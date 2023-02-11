// @ts-nocheck
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AboutService } from '../../Context/Context';

const AboutServices = () => {
    const schoolService = useContext(AboutService)
    return (
        <div className='flex flex-wrap  md:flex-nowrap lg:flex-nowrap xl:flex-nowrap gap-4 container sm:container md:container lg:container xl:container items-center py-14 mx-auto md:px-8 lg:px-8  xl:mx-auto text-white font-[Inter]'>
            {
                schoolService.map(service => (
                    <div key={service.id} service={service}>
                        <div className='flex'>
                            <img className='w-[40px] h-[40px]' src={service.img} alt="" />
                            <div>
                                <div className='flex flex-col ml-5'>
                                    <p className='font-semibold py-1'>{service.title}</p>
                                    <p className='text-[0.9rem]'>{service.body}</p>
                                    <Link className='text-[0.8rem] py-2 hover:text-white duration-300 text-red-600' to=''>{service.btn}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AboutServices;