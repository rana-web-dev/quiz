import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Questions = ({ data }) => {
  console.log({ data })

  return <p>{data.question}</p>
}

const QuizContent = () => {
  const quizContent = useLoaderData().data

  return (
    <div>
      {quizContent.questions.map(data => (
        <Questions key={data.id} data={data} />
      ))}
    </div>
  )
}

export default QuizContent
