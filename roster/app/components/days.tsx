'use client'

import { useState } from "react";
import Day from "./day";

export default function Days() {

    const [oneDay, setOneDay] = useState([<Day />]);

    const addOneDay = () => {
        setOneDay([...oneDay, <Day />]);
    }

    return (
        <div>
            <div className="flex">
                {oneDay}
            </div>
            <button className="text text-blue-600 bg-orange-400 m-10"
                onClick={addOneDay}>+ Add Day</button>
        </div>
    )
}