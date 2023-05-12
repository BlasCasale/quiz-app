import React from 'react'
import { CounterContext } from '../../context/counterContext'
import { useContext } from 'react'

const Scoreboard = () => {

    const { points } = useContext(CounterContext)

    return (
        <>
            <h2>Tu puntaje es {points}</h2>
        </>
    )
}

export default Scoreboard