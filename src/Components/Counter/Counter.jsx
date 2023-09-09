import { useState, useEffect } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
    const [price, setPrice] = useState(0);

    const sumar = () => {
        setNumber(number + 1);
    };

    const restar = () => {
        setNumber(number - 1);
    };

    useEffect(() => {
        const newPrice = number * 15000;
        setPrice(newPrice);
    }, [number]);

    return (
        <div>
            <button onClick={sumar} disabled={number === 10}>+</button>
            <p>{number}</p>
            <button onClick={restar} disabled={number === 0}>-</button>
            <p>${price}</p>
        </div>
    );
};

export default Counter;
