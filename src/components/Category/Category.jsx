// @ts-nocheck
import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../Context/Context';

const Category = () => {
    const cardCategory = useContext(CategoryContext)

    return (
        <div className=' group-first:border-green-800  flex flex-wrap  lg:flex-nowrap md:flex-nowrap md:gap-6 lg:gap-8 xl:gap-8 container md:container lg:container xl:container mx-auto md:px-8 lg:mx-auto  justify-between  font-[Inter]'>
                {
                    cardCategory.map(card => (
                        <div className= ' border-red-600 border-b-4  ' key={card.id} card={card}>
                            <div className='   mb-4'>
                                <div className=''>
                                    <img className='rounded-md' src={card.card_img} alt="" />
                                    <div className='flex flex-col items-center'>
                                        <p className='text-red-600 py-4 text-xl font-semibold '>{card.card_title}</p>
                                        <p className='text-[0.9rem] px-3 text-justify'>{card.card_content}</p>
                                        <div className='py-3 mb-4 '>
                                            <button className='focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 duration-500 focus:ring-red-500 bg-blue-500 px-4 py-1 rounded-sm'>{card.btn}</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
        </div>
    );
};

export default Category;