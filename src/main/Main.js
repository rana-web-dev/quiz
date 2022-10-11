import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;