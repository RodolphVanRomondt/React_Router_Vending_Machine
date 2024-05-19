import React from "react";
import { Link } from "react-router-dom";


const SNACKS = ["SODA", "CHIPS", "CANDY"]

const VendingMachine = () => {
    return (
        <>
            <div>
                <p>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</p>
            </div>
            <div>
                {SNACKS.map(e => <p><Link to={`/${e.toLocaleLowerCase()}`}>{e}</Link></p>) }
            </div>
        </>
    )
}


export default VendingMachine;