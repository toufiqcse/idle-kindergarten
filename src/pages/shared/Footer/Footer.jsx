// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import footers from '../../../data/footer';
import FooterAll from './FooterAll';
import{BsFacebook,BsGoogle,BsTwitter,BsLinkedin,BsSkype,BsInstagram} from 'react-icons/bs'
const Footer = () => {

    const footer = footers;
    return (
        <div className='bg-gray-800'>
            
            {/* {
                footers.map(footerData => (
                    <FooterAll key={footerData.id} footerData={footerData}></FooterAll>
                ))
                
            } */}
            <div className='flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap  mx-auto gap-8 py-8 px-10 text-gray-400 '>
            
                <div className='flex py-4  flex-col w-1/2 border-b-2 border-red-500'>
                    <p className='text-xl pb-6 italic text-orange-500'>IdleKids <span className='text-red-500'>Kindergarten</span>
                    </p>
                    <div className='text-[16px]'>
                    <p>{footer[0].footer_address}</p>
                    <p>{footer[0].footer_address_2}</p>
                    <p>{footer[0].footer_address_3}</p>
                    <p className='pt-4 pb-2'>{footer[0].contact}</p>
                    <p className=''>{footer[0].email}</p>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 '>
                    <p className=' mb-4 pb-2 text-xl text-white border-b-2  border-red-500'>{footer[1].heading_1}</p>
                    <div className='flex flex-col text-[16px]'>
                        <Link>{footer[1].footer_link_1[0]}</Link>
                        <Link>{footer[1].footer_link_1[1]}</Link>
                        <Link>{footer[1].footer_link_1[2]}</Link>
                        <Link>{footer[1].footer_link_1[3]}</Link>
                        <Link>{footer[1].footer_link_1[4]}</Link>
                        <Link>{footer[1].footer_link_1[5]}</Link>
                    </div>
                </div>
                <div className='flex flex-col w-1/2'>
                <p className=' mb-4 pb-2 text-xl text-white border-b-2 border-red-500'>{footer[2].heading_2}</p>
                <div className='flex flex-col text-[16px]'>
                    <Link>{footer[2].footer_link_2[0]}</Link>
                    <Link>{footer[2].footer_link_2[1]}</Link>
                    <Link>{footer[2].footer_link_2[2]}</Link>
                    <Link>{footer[2].footer_link_2[3]}</Link>
                    <Link>{footer[2].footer_link_2[4]}</Link>
                    <Link>{footer[2].footer_link_2[5]}</Link>
                </div>
                </div>
                <div className='flex flex-col w-1/2'>
                <p className=' mb-4 pb-2 text-white text-2xl border-b-2 border-red-500'>{footer[3].heading_3}</p>
                <div className='flex flex-col'>
                    <Link>{footer[3].footer_link_3[0]}</Link>
                    <Link>{footer[3].footer_link_3[1]}</Link>
                    <Link>{footer[3].footer_link_3[2]}</Link>
                    <Link>{footer[3].footer_link_3[3]}</Link>
                    <Link>{footer[3].footer_link_3[4]}</Link>
                    <Link>{footer[3].footer_link_3[5]}</Link>
                </div>
                </div>
            </div>
            <div className='bg-gray-700 py-6'>
                <div className='flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap justify-between mx-10'>
                    <div className='text-slate-400'>
                        <span className='text-[14px]'>Copyright All Right Reserved 2023</span>
                    </div>
                    <div className='flex py-2 sm:py-0 md:py-0 lg:py-0 xl:py-0  gap-4 text-red-500 '>
                       
                        <Link><BsFacebook className='hover:text-white duration-300'/> </Link>
                        <Link><BsGoogle className='hover:text-white duration-300'/></Link>
                        <Link><BsTwitter className='hover:text-white duration-300'/></Link>
                        <Link>
                        <BsInstagram className='hover:text-white duration-300'></BsInstagram>
                        </Link>
                        <Link>
                        <BsLinkedin className='hover:text-white duration-300'></BsLinkedin>
                        </Link>
                        <Link>
                        <BsSkype className='hover:text-white duration-300'></BsSkype>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;