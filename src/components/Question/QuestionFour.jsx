import { CounterContext } from '../../context/counterContext'
import { useState, useEffect, useContext } from 'react'
import { getQuestion } from '../../questions'
import { Link } from 'react-router-dom'

const QuestionFour = () => {
    const [question, setQuestion] = useState({})

    const { addPoint } = useContext(CounterContext)

    useEffect(() => {
        getQuestion(4)
            .then((res) => setQuestion(res))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div className='card--question'>
            <h3>{question.question}</h3>

            <div className='layout--question'>
                <Link to={`/question/questionFive`}>{question.answerTwo}</Link>
                <Link to={`/question/questionFive`}>{question.answerThree}</Link>
                <Link to={`/question/questionFive`}>{question.answerOne}</Link>
                <Link to={`/question/questionFive`} onClick={() => addPoint()}>{question.rightAnswer}</Link>
            </div>
        </div>
    )
}

export default QuestionFour