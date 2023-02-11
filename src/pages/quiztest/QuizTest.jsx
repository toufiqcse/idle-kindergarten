// @ts-nocheck
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SetQuestion from './SetQuestion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuizReview from './QuizReview';


const QuizTest = ({option}) => {

    //set state for showing correct answer
    const [correctAnswer, setCorrectAnswer] = useState(0)

    // set state for count right ans
    const [correct, setCorrect] = useState(0)

    // handle  showing correct answer
    const showCorrectAns =() =>{
        const ans = option.correctAnswer;
        toast.success(`${ans}`)
        setCorrectAnswer(ans)
    }

    // handle  for  right ans and wrong answer
     const handleCorrectAns =(e) =>{
        const getValue = e.target.value
        const rightAns = option.correctAnswer;
  

        if(getValue === rightAns){
            if(toast.success('Correct Answer')){
                setCorrect(correct + 1)
            }

        }else{
            toast.warning('Wrong Answer') 

        }
    }

    return (
        <div className=''>
            <div>
            {
                <SetQuestion  option={option} handleCorrectAns={handleCorrectAns} showCorrectAns={showCorrectAns}></SetQuestion>
            }
            </div>
            
        </div>
        
    );
};

export default QuizTest;