'use client'

import { useState } from "react";
import OneShift from "./oneShift";


export default function Day() {

    const [oneShift, setOneShift] = useState([<OneShift />]);

    const addOneShift = () => {
        setOneShift([...oneShift, <OneShift />]);
    }

    return (

        <div className="bg-green-200">

            {oneShift}
            <button className="text text-blue-600 bg-orange-400 m-10"
                onClick={addOneShift}>+ Add shift</button>
        </div>
    )
}