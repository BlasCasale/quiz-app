import { CounterContext } from '../../context/counterContext'
import { useState, useEffect, useContext } from 'react'
import { getQuestion } from '../../questions'
import { Link } from 'react-router-dom'

const QuestionTwo = () => {
    const [question, setQuestion] = useState({})

    const { addPoint } = useContext(CounterContext)

    useEffect(() => {
        getQuestion(2)
            .then((res) => setQuestion(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='card--question'>
            <h3>{question.question}</h3>

            <div className='layout--question'>
                <Link to={`/question/questionThree`} onClick={() => addPoint()}>{question.rightAnswer}</Link>
                <Link to={`/question/questionThree`}>{question.answerOne}</Link>
                <Link to={`/question/questionThree`}>{question.answerTwo}</Link>
                <Link to={`/question/questionThree`}>{question.answerThree}</Link>
            </div>
        </div>
    )
}

export default QuestionTwo