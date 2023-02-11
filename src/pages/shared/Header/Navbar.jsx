// @ts-nocheck
import { logDOM } from '@testing-library/react';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderContext } from '../../../Context/Context';
import {HiMenuAlt3,HiMenu} from 'react-icons/hi'
import {RxCross1, RxScissors} from 'react-icons/rx'

const Navbar = () => {
    const header = useContext(HeaderContext)
    const [open , setOpen] = useState(false)
    return (
        <div className= 'flex justify-between   shadow-md  px-6 py-2 h-16 items-center bg-slate-100 text-black/70 font-bold '>
            <div className='lg:mx-8 md:mx-0  lg:text-xl xl:text-xl  md:text-[16px] italic text-red-500 cursor-pointer hover:text-red-600 duration-500 '>
                <NavLink to='/'>Idle Kids center</NavLink>
            </div>
            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                
                <HiMenu className={open ? <RxScissors></RxScissors> : 'menu'}></HiMenu>
            </div>

            <div className={ `md:flex  hidden   ${
            open ? "top-15 opacity-100 " : "top-[-490px]"
                } md:opacity-100 opacity-100`}>
                {
                    header.map(nav => <NavLink key={nav.id}  to={nav.url} className= {({isActive}) => isActive ? 'border-red-500 text-red-500 border-b-4 pb-4' :
                     "lg:mx-2 md:mr-2  xl:mx-4   hover:text-red-500  hover:border-b-4 transition ease  border-red-500 pb-4 duration-500 "}>{nav.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Navbar;
