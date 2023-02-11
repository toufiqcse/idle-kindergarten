import React from 'react';
import { NavLink } from 'react-router-dom';
import QuizTest from '../quiztest/QuizTest';

const QuizHome = ({quiz}) => {
    const {id,logo,name} =quiz
    return (
        <div>
            <div className='mb-8'>
                <div className='relative overflow-hidden bg-gray-400 rounded-md'>
                    <img src={logo} alt="" />
                    <div className='absolute -inset-x-8   -skew-y-[30deg] top-[1.5rem]  bg-red-500'>
                       <p className='text-white font-bold text-center'> {name}</p>
                    </div>
                    <div className='bg-orange-600 flex justify-end px-10 py-2'>
                        
                        <NavLink className="text-white hover:text-blue-800 " to={`/exam/${id}`}>Start Quiz</NavLink> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizHome;