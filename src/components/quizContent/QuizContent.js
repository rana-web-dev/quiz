import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizContent = () => {
    const quizContent = useLoaderData();
    const question = quizContent.data.questions;
    return (
        <div>
            {
                question.map(q => <Question
                    key={q.id}
                    questions={q}
                ></Question>)
            }
        </div>
    );
};

const Question = ({questions}) => {
    const {options, question, correctAnswer} = questions;

    console.log(questions)
    return (
        <div className='max-w-6xl mx-auto'>
            <p className='font-bold text-2xl mt-5'>{question}</p>
            <div className='grid grid-cols-2 cursor-default w-1/2'>
            {
                options.map(op => <Options 
                    option={op}
                    correctAnswer={correctAnswer}
                ></Options>)
            }
            </div>
        </div>
    )
}

const Options = ({option, correctAnswer}) => {

    return (
        <div>
            <p  className='bg-blue-500 m-2 text-white p-2 rounded'>{option}</p>
        </div>
    )
}


export default QuizContent;