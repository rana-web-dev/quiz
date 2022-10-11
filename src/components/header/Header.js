import React from 'react';

const Header = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='flex'>
                <div className="flex items-center">
                    <h1 className='text-5xl font-bold text-blue-500'>Make Yourself Perfect Dev By Join Quiz</h1>
                </div>
                <div className="head-img w-1/2">
                    <img src='https://thumbs.dreamstime.com/b/quiz-word-red-d-letters-to-illustrate-exam-evaluation-assessment-to-measure-your-knowledge-expertise-44060147.jpg' alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Header;