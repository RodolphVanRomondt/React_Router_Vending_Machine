import React from "react";
import { Link } from "react-router-dom";
import useAddItem from "./Hooks";


const Candy = () => {
    const [candy, addCandy] = useAddItem();

    return (
        <>
            <h1>CANDY</h1>
            <h2>Number Of Candy: {candy}</h2>
            <button onClick={addCandy}>Add</button>
            <button><Link to="/">Go Back</Link></button>
        </>
    )
}


export default Candy;