import { createContext, useState } from "react";

export const CounterContext = createContext({ points: 0 })

export const CounterProvider = ({ children }) => {
    const [points, setPoints] = useState(0)

    const addPoint = () => {
        return setPoints(points + 1)
    }

    return (
        <CounterContext.Provider value={{ addPoint, points }}>
            {children}
        </CounterContext.Provider>
    )
}