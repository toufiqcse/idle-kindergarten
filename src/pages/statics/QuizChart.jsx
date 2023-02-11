import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const QuizChart = ({quiz}) => {
    const {total,name} = quiz
    console.log(quiz);// this is dynamic API data
   
    return (
        <div className='flex flex-wrap sm:flex-nowrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap'>
            <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 '>
                {/* <LineChart
                width={500}
                height={600}
                data={quiz}
                >
                    <CartesianGrid></CartesianGrid>
                    <XAxis dataKey={name}/>
                    <Tooltip/>
                    <YAxis/>
                    <Line type="monotone" dataKey={name} stroke="8884d8"></Line>
                    <Line type="monotone" dataKey={total} stroke="82ca9d"></Line>
                </LineChart> */}
                
            </div>
            <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2'></div>
        </div>
    );
};

export default QuizChart;