import { CounterContext } from '../../context/counterContext'
import { useState, useEffect, useContext } from 'react'
import { getQuestion } from '../../questions'
import { Link } from 'react-router-dom'

const QuestionNine = () => {
    const [question, setQuestion] = useState({})

    const { addPoint } = useContext(CounterContext)

    useEffect(() => {
        getQuestion(9)
            .then((res) => setQuestion(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='card--question'>
            <h3>{question.question}</h3>

            <div className='layout--question'>
                <Link to={`/question/questionTen`} onClick={() => addPoint()}>{question.rightAnswer}</Link>
                <Link to={`/question/questionTen`}>{question.answerThree}</Link>
                <Link to={`/question/questionTen`}>{question.answerOne}</Link>
                <Link to={`/question/questionTen`}>{question.answerTwo}</Link>
            </div>
        </div>
    )
}

export default QuestionNine