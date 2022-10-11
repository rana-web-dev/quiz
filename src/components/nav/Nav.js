import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className='py-4 bg-blue-300'>
            <div className='max-w-6xl mx-auto flex justify-between '>
                <div className="logo text-blue-500">
                    <h2 className='font-bold text-2xl'>Quiz Test Yourself</h2>
                </div>
                <div className="nav-link">
                    <Link to='/'>Home</Link>
                    <Link to='/Header'>Header</Link>
                    <Link to='/Quiz'>Quiz</Link>
                    <Link to='/QuizContent'>Quiz Content</Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;