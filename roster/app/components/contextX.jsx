import { useState } from "react";
const { createContext } = require("react");

const ContextX = createContext([]);


export default ContextX;

export function XProvider({ children }) {

    //const [hours, setHours] = useState([]);
    //const [shiftStart, setShiftStart] = useState('00:00');
    //const [shiftEnd, setShiftEnd] = useState('00:00');
    const [shift, setShift] = useState([]);
    const [durationShift, setDurationShift] = useState(0);

    //{
    // items: [],
    //});

    //const addHours = (time) => {
    //   setHours(
    //      hours + time
    //  );
    //};

    return (
        <ContextX.Provider value={{ shift, setShift, durationShift, setDurationShift }}>
            {children}
        </ContextX.Provider>
    );
}
