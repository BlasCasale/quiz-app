import { CounterContext } from '../../context/counterContext'
import { useState, useEffect, useContext } from 'react'
import { getQuestion } from '../../questions'
import { Link } from 'react-router-dom'

const QuestionSix = () => {
    const [question, setQuestion] = useState({})

    const { addPoint } = useContext(CounterContext)

    useEffect(() => {
        getQuestion(6)
            .then((res) => setQuestion(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='card--question'>
            <h3>{question.question}</h3>

            <div className='layout--question'>
                <Link to={`/question/questionSeven`} onClick={() => addPoint()}>{question.rightAnswer}</Link>
                <Link to={`/question/questionSeven`}>{question.answerOne}</Link>
                <Link to={`/question/questionSeven`}>{question.answerThree}</Link>
                <Link to={`/question/questionSeven`}>{question.answerTwo}</Link>
            </div>
        </div>
    )
}

export default QuestionSix