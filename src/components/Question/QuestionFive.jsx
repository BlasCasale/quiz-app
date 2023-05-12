import { CounterContext } from '../../context/counterContext'
import { useState, useEffect, useContext } from 'react'
import { getQuestion } from '../../questions'
import { Link } from 'react-router-dom'

const QuestionFive = () => {
    const [question, setQuestion] = useState({})

    const { addPoint } = useContext(CounterContext)

    useEffect(() => {
        getQuestion(5)
            .then((res) => setQuestion(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='card--question'>
            <h3>{question.question}</h3>

            <div className='layout--question'>
                <Link to={`/question/questionSix`}>{question.answerTwo}</Link>
                <Link to={`/question/questionSix`} onClick={() => addPoint()}>{question.rightAnswer}</Link>
                <Link to={`/question/questionSix`}>{question.answerOne}</Link>
                <Link to={`/question/questionSix`}>{question.answerThree}</Link>
            </div>
        </div>
    )
}

export default QuestionFive