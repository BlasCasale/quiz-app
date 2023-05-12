import { CounterContext } from '../../context/counterContext'
import { useState, useEffect, useContext } from 'react'
import { getQuestion } from '../../questions'
import { Link } from 'react-router-dom'

const QuestionEight = () => {
    const [question, setQuestion] = useState({})

    const { addPoint } = useContext(CounterContext)

    useEffect(() => {
        getQuestion(8)
            .then((res) => setQuestion(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='card--question'>
            <h3>{question.question}</h3>

            <div className='layout--question'>
                <Link to={`/question/questionNine`}>{question.answerTwo}</Link>
                <Link to={`/question/questionNine`}>{question.answerOne}</Link>
                <Link to={`/question/questionNine`} onClick={() => addPoint()}>{question.rightAnswer}</Link>
                <Link to={`/question/questionNine`}>{question.answerThree}</Link>
            </div>
        </div>
    )
}

export default QuestionEight