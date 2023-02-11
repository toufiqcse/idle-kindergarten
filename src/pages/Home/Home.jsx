// @ts-nocheck
import { logDOM } from '@testing-library/react';
import React from 'react';
import About from '../../components/About/About';
import Category from '../../components/Category/Category';
import AboutServices from '../../components/About/AboutServices'
import { AboutContext, AboutService, CategoryContext, NewsContext, SliderContext } from '../../Context/Context';
import aboutSchool from '../../data/aboutSchool';
import idleKindergarten from '../../data/idleKindergarten';
import sliderData from '../../data/sliderData';
import Slider from './Slider';
import schoolService from '../../data/schoolService';
import NewsUpdate from '../../components/NewsUpdate/NewsUpdate';
import newsData from '../../data/newsupdate';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const idle = idleKindergarten;
    const slider = sliderData;
    const aboutScl = aboutSchool;
    const aboutServ = schoolService
    const news = newsData;
    
    return (
        <SliderContext.Provider value={slider}>
                <Slider></Slider>
                <CategoryContext.Provider value={idle}>
                    <div className='group'>
                    <Category></Category> 
                    </div>
                </CategoryContext.Provider>
            <AboutContext.Provider value={aboutScl}>
                    <About></About>
                </AboutContext.Provider>
            <div className='bg-gray-800'>
                <AboutService.Provider value={aboutServ}>
                    <AboutServices></AboutServices>
                </AboutService.Provider>
            </div>
            <NewsContext.Provider value={news}>
                <NewsUpdate></NewsUpdate>
            </NewsContext.Provider>
        </SliderContext.Provider>
    );
};

export default Home;