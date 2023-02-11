// @ts-nocheck
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizChart from './QuizChart';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statics = () => {
    const totalQuiz = useLoaderData()
    const allQuiz = totalQuiz.data
    
    return (
        <div className=''>
           <p>Total Quiz Chart</p>
            <div>
            {/* {
              allQuiz.map(quiz => <QuizChart key={quiz.id} quiz={quiz}></QuizChart>)
            } */}
            </div>
            <div>
            
            </div>
        </div>
    );
};

export default Statics;