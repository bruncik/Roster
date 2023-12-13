import { useState } from "react";
import Spreadsheet from "react-spreadsheet";
import extractTime from "../helpers/extractTime";

export default function SpreadSheet() {

    //let row = ["Flavour", "Food"];
    const col = ["Name", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Estimated Hours"];

    const data = [
        [{ value: "Jaro" }, { value: "10 - F" }],
        [{ value: "Sergio" }, { value: "" }],
        [{ value: "Isaacs" }, { value: "" }],
        [{ value: "Muhamad" }, { value: "" }],
    ];

    const [dataState, setDataState] = useState(data);

    const handleAddRow = () => {
        const newRow = [{ value: "" }];
        setDataState([...dataState, newRow]);
    };

    function handleChange(d) {
        const t = d.map(row => [...row]);
        setDataState(t);
    }

    function onX() {
        const [a, s, d, f] = extractTime(dataState[0][1].value);
        let newData = [...dataState];
        newData[0][8] = { value: d };
        setDataState(newData);
    }
    //onChange={(d) => { setDataState([...dataState]) }}
    return (
        <div className="flex flex-col p-2">
            <div className="flex justify-center">
                <Spreadsheet
                    data={dataState}
                    columnLabels={col}
                    onChange={handleChange}
                />

            </div>
            <div className="flex justify-between">
                <div className="text-xs italic pt-5">* 'F' is estimeted finish time 11:00</div>
                <label className="bg-yellow-100 text-red-400 m-1 p-1">Label:{dataState[0][1].value}</label>
                <div >start   end </div>
                <button className="bg-orange-400 m-1 p-1" onClick={handleAddRow}>Add Row</button>
                <button onClick={onX} >VVVVVVVV</button>
            </div>
        </div>


    )
}