import { CounterContext } from '../../context/counterContext'
import { useState, useEffect, useContext } from 'react'
import { getQuestion } from '../../questions'
import { Link } from 'react-router-dom'

const QuestionSeven = () => {
    const [question, setQuestion] = useState({})

    const { addPoint } = useContext(CounterContext)

    useEffect(() => {
        getQuestion(7)
            .then((res) => setQuestion(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='card--question'>
            <h3>{question.question}</h3>

            <div className='layout--question'>
                <Link to={`/question/questionEight`}>{question.answerTwo}</Link>
                <Link to={`/question/questionEight`}>{question.answerOne}</Link>
                <Link to={`/question/questionEight`} onClick={() => addPoint()}>{question.rightAnswer}</Link>
                <Link to={`/question/questionEight`}>{question.answerThree}</Link>
            </div>
        </div>
    )
}

export default QuestionSeven