import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './Quiz.css';

const Quiz = () => {
    const quizData = useLoaderData();
    const itemArr = quizData.data;
    console.log(itemArr);
    return (
        <div className='mt-10'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-4 gap-10 w-'>
                    {
                        itemArr.map(item => <Item
                            key={item.id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

const Item = ({ item }) => {
    const {id, name, logo } = item;
    const router = useNavigate();
    const handleClick = () => {
        router(`/Quiz/${id}`)
    }
    return (
        <div className='w-30 rounded-md bg'>
            <div>
                <img src={logo} alt=''></img>
            </div>
            <div className='flex justify-between p-2'>
                <p className='font-bold'>{name}</p>
                <button
                    onClick={handleClick}
                    className='bg-blue-500 text-white font-bold py-1 px-3 rounded-md cursor-pointer'>Quiz</button>
            </div>
        </div>
    )
}

export default Quiz;