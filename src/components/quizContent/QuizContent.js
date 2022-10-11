import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizContent = () => {
    const quizContent = useLoaderData();
    
    console.log(quizContent)
    return (
        <div>
            
        </div>
    );
};

export default QuizContent;