// @ts-nocheck
import React, { useState } from 'react';
import { HeaderContext } from '../../../Context/Context';
import navbarData from '../../../data/navbarData'
import Contact from '../../contact/Contact';
import Navbar from './Navbar';

const Header = () => { 
    const header = navbarData;
    
    return (
        <HeaderContext.Provider value={header}>
            <div className='sticky top-0 z-40'>
                <Navbar></Navbar>
            </div>
            
        </HeaderContext.Provider>
        

    );
};

export default Header;