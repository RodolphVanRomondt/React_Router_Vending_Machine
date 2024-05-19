import React from "react";
import { Link } from "react-router-dom";
import useAddItem from "./Hooks";

const Soda = () => {
    const [soda, addSoda] = useAddItem();

    return (
        <>
            <h1>SODA</h1>
            <h2>Number of Soda: { soda }</h2>
            <button onClick={addSoda}>Add</button>
            <button><Link to="/">Go Back</Link></button>
        </>
    )
}

export default Soda;