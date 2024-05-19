import { useState } from "react";


const useAddItem = () => {
    const [item, setItem] = useState(0);

    const addItem = () => {
        setItem(item => item + 1);
    }
    
    return [item, addItem];
}


export default useAddItem;