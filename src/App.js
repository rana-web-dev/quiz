import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './main/Main';
import Header from './components/header/Header';
import Quiz from './components/quiz/Quiz';
import Home from './components/home/Home';
import QuizContent from './components/quizContent/QuizContent';

function App() {
  const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                  path: '/',
                  loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
                  element: <Home></Home>
                },
                {
                  path: '/Home',
                  loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
                  element: <Home></Home>
                },
                {
                    path: '/Header',
                    element: <Header></Header>                    
                }, 
                {
                  path: '/Quiz',
                  loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
                  element: <Quiz></Quiz>
                },
                {
                  path: '/quizContent',
                  loader: () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz/1');
                  },
                  element: <QuizContent></QuizContent>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}
export default App;
