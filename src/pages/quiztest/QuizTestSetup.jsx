// @ts-nocheck
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizReview from './QuizReview';
import QuizTest from './QuizTest';

const QuizTestSetup = () => {
    const allOptions = useLoaderData()
    const options = allOptions.data.questions //get array for all questions from data
    return (
        <div>
            <p className='text-center py-4 text-2xl'>Start Quiz</p>
            <div className='grid grid-cols-5 gap-4 font-[Arial] mb-20'>
                {/* Question section */}
                <div className='col-span-3 bg-gray-200'>
                    {
                        options.map(option => <QuizTest key={option.id} option={option}></QuizTest>)
                    }
                </div>
                {/* Result Section */}
                <div className='col-span-2 bg-sky-200'>
                        
                    <QuizReview   options={options} ></QuizReview>
                    
                </div>
            </div>
            
           
        </div>
    );
};

export default QuizTestSetup;