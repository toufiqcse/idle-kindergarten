import React, { useState } from 'react';
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SetQuestion = ({option,handleCorrectAns,showCorrectAns}) => {

    return (
        <div>
            <div className='odd:bg-slate-400 odd:text-slate-200 even:bg-slate-300'>

            <div className=' py-4 px-14'>
                <div className='flex justify-between'>
                    <div>
                    
                        <span className='font-bold text-red-500 '>Question:</span>
                    {option.question}
                    </div>
                    
                    <div className='px-4 text-xl cursor-pointer'>
                        {/* showing correct answer */}
                        <AiFillEye onClick={showCorrectAns}>
                        
                        </AiFillEye>
                        <ToastContainer 
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        limit={1}
                        theme="dark"
                        
                        />
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    {/* Option 1 */}
                    <div>
                        <input onClick={ handleCorrectAns} type="radio" className='appearance-none  checked:bg-blue-500' name={option.question} value={option.options[0]} />
                        
                        <label className='text-slate-600 pl-2 text-[16px]'>{option.options[0]}</label>
                        <ToastContainer 
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        limit={1}
                        theme="dark"
                       
                        />
                    </div>
                    {/* Option 2 */}
                    <div>
                    <input  onClick={handleCorrectAns} type="radio" className='appearance-none  checked:bg-blue-500' name={option.question} value={option.options[1]} />
                    <label className='text-slate-600 pl-2 text-[16px]'>{option.options[1]}</label>
                    </div>
                    {/* Option 3 */}
                    <div>
                    <input onClick={handleCorrectAns} type="radio" className='appearance-none  checked:bg-blue-500' name={option.question} value={option.options[2]} />
                    <label className='text-slate-600 pl-2 text-[16px]'>{option.options[2]}</label>
                    </div>
                    {/* option 4 */}
                    <div>
                    <input onClick={handleCorrectAns} type="radio" className='appearance-none  checked:bg-blue-500' name={option.question} value={option.options[3]} />
                    <label className='text-slate-600 pl-2 text-[16px]'>{option.options[3]}</label>
                    </div>
                </div>
            </div>   

            </div>

            
        </div>
    );
};

export default SetQuestion;