import React from 'react';

const Contact = () => {
    return (
        <div>
            <div style={{backgroundImage: `url("https://us.123rf.com/450wm/evgenyatamanenko/evgenyatamanenko2007/evgenyatamanenko200700075/evgenyatamanenko200700075.jpg?ver=6")`}} className='h-full bg-cover bg-center h-screen'>
                <div className='bg-gradient-to-b h-screen from-red-400 to-red/90'>
                    <div className='flex flex-col items-center py-40'>
                    <p className='text-5xl text-white'>Contact US</p>
                    <p><small className='text-white text-xl'>Get In Touch</small></p>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800 text-white mb-4'>
                <div className='flex gap-6 mx-20 py-10 items-center'>
                    <div className='w-1/3'>
                        <div className='flex flex-col items-start'>
                            <div className='py-4'>logo</div>
                            <div className='pb-2'>Phone</div>
                            <div>
                                <p>A wonderful serenity has taken possession of my entire soul like these</p>
                                <p className='py-4'>+1-2345-2345</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-1/3'><div className='flex flex-col items-start'>
                            <div>logo</div>
                            <div>Phone</div>
                            <div>
                                <p>A wonderful serenity has taken possession of my entire soul like these</p>
                                <p>+1-2345-2345</p>
                            </div>
                        </div></div>
                    <div className='w-1/3'><div className='flex flex-col items-start'>
                            <div>logo</div>
                            <div>Phone</div>
                            <div>
                                <p>A wonderful serenity has taken possession of my entire soul like these</p>
                                <p>+1-2345-2345</p>
                            </div>
                        </div></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;