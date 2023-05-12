import React from 'react'
import { CounterContext } from '../../context/counterContext'
import { useState, useEffect, useContext } from 'react'
import { getQuestion } from '../../questions'
import { Link } from 'react-router-dom'
import './Question.css'

const QuestionOne = () => {

    const [question, setQuestion] = useState({})

    const { addPoint } = useContext(CounterContext)

    useEffect(() => {
        getQuestion(1)
            .then((res) => setQuestion(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='card--question'>
            <h3>{question.question}</h3>

            <div className='layout--question'>
                <Link to={`/question/questionTwo`}>{question.answerTwo}</Link>
                <Link to={`/question/questionTwo`} onClick={() => addPoint()}>{question.rightAnswer}</Link>
                <Link to={`/question/questionTwo`}>{question.answerOne}</Link>
                <Link to={`/question/questionTwo`}>{question.answerThree}</Link>
            </div>
        </div>
    )
}

export default QuestionOne