import { useContext, useReducer } from "react"
import { color } from "../context/Context"

const initialState = { count: 0 }

type CounterState = {
    count: number
}

type ResetAction = {
    type: "reset"
}
type UpdateAction = {
    type: "increment" | "decrement"
    payload: number
}

type CounterAction = UpdateAction | ResetAction

const reducer = (state:CounterState, action:CounterAction) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + (action.payload || 0) }
        case "decrement":
            return { count: state.count - (action.payload || 0) }
        case "reset":
            return initialState
        default:
            return state
    }
}

const Counter = () => {

    const colorBg = useContext(color)
        
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: "increment", payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>Decrement 10</button>
            <button style={{ backgroundColor: colorBg ? colorBg : 'black' }} onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default Counter