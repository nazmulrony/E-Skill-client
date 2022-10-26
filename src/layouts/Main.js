import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </div>
    );
};

export default Main;