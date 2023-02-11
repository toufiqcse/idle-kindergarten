import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Contact from '../../pages/contact/Contact';
import Footer from '../../pages/shared/Footer/Footer';
import Header from '../../pages/shared/Header/Header';

const Main = () => {
    const footers = useLoaderData()

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;