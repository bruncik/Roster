import ContextX from "./contextX"
import { useContext, useState } from "react"

export default function RosterTable() {
    const { shift, durationShift } = useContext(ContextX);

    const countTotalTime = (duration) => {
        const hours = Math.floor(duration / (1000 * 60 * 60));
        const minutes = Math.floor((duration / (1000 * 60)) % 60);

        return hours + ':' + minutes;
    }
    /* <h1>duration: {countTotalTime(durationShift)}</h1> */

    return (
        <div className="">
            <div className="flex justify-around">
                <div>Start</div>
                <div>End</div>
                <div className="font-bold text-yellow-200">Hours</div>
            </div>
            {shift.map((n, index) => (
                <div key={index} className="flex justify-around">
                    <div>{n.start}</div>
                    <div>{n.end} </div>
                    <div className="text-yellow-200"> {n.hours}</div>
                </div>
            ))};

        </div>
    );
}