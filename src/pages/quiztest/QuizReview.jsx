import React from 'react';

const QuizReview = ({options,demoCount}) => {
    // console.log('quiz review',options);


    return (
        <div>
            <div className='text-center text-xl py-6'>Result Overview</div>
                <div className='flex flex-col text-white mx-10'>
                    
                    
                    <p className='bg-slate-300 text-black px-4 py-4'>You Attemped  Question: {}</p>
                    <p className='bg-green-500  px-4 py-4'>Correct Answer: {}</p>

                    <p className='bg-red-500 px-4 py-4'>Wrong Answer: {}</p>

                    <p className='bg-yellow-600 px-4 py-4'>Obtained Marks: {}</p>
                    
                </div>
        </div>
    );
};

export default QuizReview;