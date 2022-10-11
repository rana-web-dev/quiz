import React from 'react'
import { useLoaderData } from 'react-router-dom'

const QuizContent = () => {
  const quizContent = useLoaderData()
  const question = quizContent.data.questions

  return (
    <div>
      {question.map(q => (
        <Question key={q.id} questions={q} />
      ))}
    </div>
  )
}

const Question = ({ questions }) => {
  const { options, question, correctAnswer } = questions
  const handleOptionClick = ans => {
    const isCorrect = ans === correctAnswer

    alert(`Correct: ${isCorrect}`)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <p className="font-bold text-2xl mt-5">{question}</p>
      <div className="grid grid-cols-2 cursor-default w-1/2">
        {options.map((op, ind) => (
          <Options key={ind} option={op} onOptionClick={handleOptionClick} />
        ))}
      </div>
    </div>
  )
}

const Options = ({ option, onOptionClick }) => {
  const handleClick = () => {
    onOptionClick(option)
  }

  return (
    <div>
      <p
        onClick={handleClick}
        className="bg-blue-500 m-2 text-white p-2 rounded"
      >
        {option}
      </p>
    </div>
  )
}

export default QuizContent
