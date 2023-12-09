import ContextX from "./contextX"
import { useContext, useState } from "react"

export default function TotalHours() {
    const { durationShift } = useContext(ContextX);

    const countTotalTime = (duration) => {
        const hours = Math.floor(duration / (1000 * 60 * 60));
        const minutes = Math.floor((duration / (1000 * 60)) % 60);

        return hours + ':' + minutes;
    }

    return (
        <div className="m-2 p-1 bg-orange-100 flex flex-col content-center">
            <h1>Total hours:</h1>
            <div className=" text-center bg-red-200 justify-items-center items-center text-2xl font-bold text-emerald-700">{countTotalTime(durationShift)}</div>
        </div>
    )
}