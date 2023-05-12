import { useState, useEffect, useContext } from 'react'
import { getAnswerToPoints } from '../../questions'
import { CounterContext } from '../../context/counterContext'
import './Dashboard.css'
import JSConfetti from 'js-confetti'

const Dashboard = () => {

    const [answerPoints, setAnswerPoints] = useState("")

    const [answer, setAnswer] = useState([])

    const { points } = useContext(CounterContext)

    useEffect(() => {
        getAnswerToPoints()
            .then((res) => setAnswer(res))
            .catch((error) => console.log(error))
    }, [])

    setTimeout(() => {
        const findPoints = answer.find((answer) => answer.id === points)

        if (findPoints) {
            setAnswerPoints(findPoints.answer)
        }
    }, 100)

    const newConfetti = new JSConfetti()

    if (points > 7) {
        newConfetti.addConfetti({
            confettiNumber: 300,
            confettiRadius: 6,
        })
    }

    return (
        <>
            <p className='p--dashboard'>{answerPoints}</p>
        </>
    )
}

export default Dashboard