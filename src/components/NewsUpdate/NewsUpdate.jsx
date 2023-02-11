// @ts-nocheck
import React, { useContext } from 'react';
import { NewsContext } from '../../Context/Context';
import AOS from 'aos'
import { Link } from 'react-router-dom';
import {CiLocationOn} from 'react-icons/ci'
import { BiAlarmExclamation } from 'react-icons/bi'
import {FaLongArrowAltRight} from 'react-icons/fa'
const NewsUpdate = () => {
    const newses = useContext(NewsContext)
    
    return (
        <div className=''>
            <div className=''>
                <div className='grid grid-cols-5  font-[Inter]' >
                    <div style={{backgroundImage: `url('https://assets.entrepreneur.com/content/3x2/2000/20190311153646-GettyImages-932272022.jpeg')`}} 
                    className='col-span-3 bg-cover bg-center'>        
                        <div className='bg-gradient-to-br from-sky-500 to-slate/40 h-full'>
                            <div className='flex mx-10 py-8 '>
                                <div className='w-1/2 '>
                                    <div data-aos='fade-right'
                                        data-aos-duration='1000'
                                        data-aso-delay='150' className='flex gap-3 pb-8 items-center '>
                                        <img src='https://a6e8z9v6.stackpathcdn.com/kingster/kindergarten/wp-content/uploads/2019/06/blog-title.png' alt="" />
                                        <p  className='text-white font-bold text-xl'>News & Update</p>
                                    </div>
                                    <div>
                                        <div className='overflow-hidden '>
                                        <img className='hover:scale-125 cursor-pointer duration-500'  src='https://a6e8z9v6.stackpathcdn.com/kingster/kindergarten/wp-content/uploads/2016/06/shutterstock_1188632551-400x245.jpg' alt="" />
                                        </div>
                                        <div className='pt-14 '>
                                            <p className='text-white font-medium text-[15px]'>Professor Albert joint  research on mobile money in Tanzania</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-1/2 pt-16'>
                                    {
                                         newses.map(news => (
                                        <div className='' key={news.id} news={news}>
                                            <div className='flex flex-col ml-8 pb-3 text-white text-[15px]'>
                                                <div className='flex gap-2 overflow-hidden'>
                                                    <img className='w-1/4 rounded-sm hover:scale-125 cursor-pointer duration-500  ' src={news.img} alt="" />
                                                    <p>{news.title}</p>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* event */}
                    <div className='bg-gray-300 col-span-2 font-[Inter] py-8 px-10'>
                        <p className='pb-4  text-xl font-bold text-red-500 '>Upcoming Events </p>
                    {
                        newses.map(news => (
                            <div className='flex py-3 '>
                                <div className='flex flex-col'>
                                    <p className='text-3xl font-bold text-blue-500'>{news.date}</p>
                                    <p className='uppercase font-bold pt-1 pb-2 border-b-2 border-blue-500'>{news.month}</p>
                                </div>
                                <div className='flex flex-col  ml-4'>
                                    <p className='font-semibold text-[18px]'>{news.event}</p>
                                    <div className='items-center flex pt-8'>
                                    <span className='text-blue-500 text-[14px]'>
                                    <BiAlarmExclamation className='inline-block  mr-1'/>{news.duration}
                                        <span className='ml-8'>
                                         <CiLocationOn className='inline-block mr-1'></CiLocationOn>{news.location}
                                        </span>
                                        
                                    </span>
                                    </div>
                                    
                                </div>
                            </div>
                        ))
                    }
                    
                        <Link to='' className='flex items-center  font-bold text-red-500 hover:text-blue-500 duration-300'>View All Events 
                        <FaLongArrowAltRight className='ml-2'/>
                        </Link>
                    
                    </div>
                </div>           
            </div>   
        </div>
    );
};

export default NewsUpdate;