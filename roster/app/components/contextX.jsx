import { useState } from "react";
const { createContext } = require("react");

const ContextX = createContext([]);


export default ContextX;

export function XProvider({ children }) {

    const [hours, setHours] = useState([3]);
    //{
    // items: [],
    //});

    const addHours = (time) => {
        setHours(
            hours + time
        );
    };

    return (
        <ContextX.Provider value={{ hours, addHours }}>
            {children}
        </ContextX.Provider>
    );
}
