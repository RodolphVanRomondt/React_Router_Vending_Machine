import React from "react";
import { Link } from "react-router-dom";
import useAddItem from "./Hooks";

const Chips = () => {
    const [chips, addChips] = useAddItem();

    return (
        <>
            <h1>CHIPS</h1>
            <h2>Number Of Chips: {chips}</h2>
            <button onClick={addChips}>Add</button>
            <button><Link to="/">Go Back</Link></button>
        </>
    )
}

export default Chips;