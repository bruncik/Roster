import { useState } from "react";
import Spreadsheet from "react-spreadsheet";
import extractTime from "../helpers/extractTime";
import countDuration from "../helpers/countDuration";
import durationToHours from "../helpers/durationToHours";

export default function SpreadSheet() {

    //let row = ["Flavour", "Food"];
    const col = ["Name", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Estimated Hours"];

    let rowCount = 1;   // for default row

    const data = [
        [{ value: "." }, { value: "." }, { value: "." }, { value: "." }, { value: "." }, { value: "." }, { value: "." }, { value: "." }, { value: "." }],   //default row

    ];

    const [dataState, setDataState] = useState(data);

    const handleAddRow = () => {
        const newRow = [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }];
        setDataState([...dataState, newRow]);
    };

    function handleChange(d) {
        const t = d.map(row => [...row]);
        setDataState(t);
    }

    function onX() {                // still removing all extra characters, and dots
        for (let i = 0; i < rowCount; i++) {
            let rowDuration = 0;
            for (let j = 1; j < 8; j++) {
                const [a1, a2, b1, b2] = extractTime(dataState[i][j].value.replaceAll(' ', ''));
                let dur = countDuration(a1.replaceAll(' ', '') + ':' + a2.replaceAll(' ', ''), b1.replaceAll(' ', '') + ':' + b2.replaceAll(' ', ''));
                console.log('<--------->', a1.replaceAll(' ', '') + ':' + a2.replaceAll(' ', ''), b1.replaceAll(' ', '') + ':' + b2.replaceAll(' ', ''));
                console.log(dur);
                rowDuration += dur;
            }
            let newData = [...dataState];
            newData[i][8] = { value: durationToHours(rowDuration) };
            setDataState(newData);
        }



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