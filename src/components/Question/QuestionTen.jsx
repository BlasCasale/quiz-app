import { CounterContext } from '../../context/counterContext'
import { useState, useEffect, useContext } from 'react'
import { getQuestion } from '../../questions'
import { Link } from 'react-router-dom'

const QuestionTen = () => {
    const [question, setQuestion] = useState({})

    const { addPoint } = useContext(CounterContext)

    useEffect(() => {
        getQuestion(10)
            .then((res) => setQuestion(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='card--question'>
            <h3>{question.question}</h3>

            <div className='layout--question'>
                <Link to={`/dashboard`}>{question.answerTwo}</Link>
                <Link to={`/dashboard`}>{question.answerOne}</Link>
                <Link to={`/dashboard`}>{question.answerThree}</Link>
                <Link to={`/dashboard`} onClick={() => addPoint()}>{question.rightAnswer}</Link>
            </div>
        </div>
    )
}

export default QuestionTen