import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=''>
            <div className='h-screen bg-gradient-to-bl from-purple-600 to-red-500'>
                <div className='flex flex-col items-center py-20 h-fit'>
                    <p className='text-8xl font-[Rubik] italic text-white'>404</p>
                    <p className='text-white '>LOOKS LIKE YOU ARE LOTS IN SPACE</p>
                    <Link className='border-2 hover:bg-green-500 hover:outline-none my-10 focus:outline-offset-2 duration-300 hover:text-white border-orange-400 px-4 py-1 rounded-full outline-offset-2' to='/'>Go Home</Link>
                </div>
            </div>
        </div>
    ); 
};

export default Error;