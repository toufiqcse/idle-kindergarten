// @ts-nocheck
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizHome from './QuizHome';

const Exam = () => {
    const quizs = useLoaderData();
    const quizes = quizs.data
    return (
        <div>
            <div className='my-10 text-center text-4xl font-[Rubik] font-bold text-red-500 '>
         
                Welcome To IdleKids Academy
                
                <p className='text-xl text-orange-700 font-medium'>Choose your Quiz Option</p>
            </div>
            <div className='flex flex-wrap lg:flex-nowrap xl:flex-nowrap md:flex-nowrap gap-8 mx-14'>
            {
                quizes.map(quiz => <QuizHome key={quiz.id} quiz
                ={quiz}></QuizHome>)
            }
            </div>
        </div>
    );
};

export default Exam;