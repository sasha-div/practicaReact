import { useState } from "react";

const useCounter = (initial = 0) => {
    const [counter, setCounter] = useState(initial)

    const handleSetCounter = () => {
        setCounter(counter => counter + 1)
    }

    return {
        counter,
        handleSetCounter
    }
}

export default useCounter;