import React, { useReducer, useState } from 'react';
import NewShiftInput from './newShiftInput';
import TimeInputField from './timeInputField';
import OneShift from './oneShift';

export default function Timetable() {

    const [data, setData] = useState([
        { name: 'John', sMonday: 0, eMonday: 25 },        //!!!!!!!!!!!!!!!! mo tu we th ...

    ]);

    const handleEdit = (index, field, value) => {
        const updatedData = [...data];
        updatedData[index][field] = value;
        setData(updatedData);
    };

    const handleAdd = () => {
        const newData = { name: '', sMonday: '00:12', eMonday: '12:55' };        //!!!!!!!!!!!!!!!! mo tu we th ...
        setData([...data, newData]);
    };

    return (
        <div className='flex flex-col'>
            <div className='flex justify-around '>
                <div>Total hours:</div>
                <div>Monday</div>
                <div>Monday</div>
                <div>Monday</div>
                <div>Monday</div>
                <div>Monday</div>
                <div>Monday</div>
                <div>Monday</div>
            </div>

            <div className='flex justify-around'>       { /*main container */}

                <div className='bg-red-100'>
                    <div>Name</div>
                    {data.map((row, index) => (
                        <div key={index}>
                            <input className='text-xs'
                                type="text"
                                value={row.name}
                                onChange={(event) =>
                                    handleEdit(index, 'name', event.target.value)
                                }
                            />
                        </div>
                    ))}
                </div>

                <div className='bg-blue-100 '>
                    <div>Start</div>
                    {data.map((row, index) => (
                        <div key={index}>
                            <NewShiftInput
                                isStart={true}
                                value={row.sMonday}
                            />
                        </div>
                    ))}
                </div>

                <div className='bg-blue-100 '>
                    <div>End</div>
                    {data.map((row, index) => (
                        <div key={index}>
                            <NewShiftInput isStart={false}
                                value={row.eMonday}
                            />
                        </div>
                    ))}
                </div>

                <div className='bg-blue-100 '>
                    <div>Start</div>
                    {data.map((row, index) => (
                        <div key={index}>
                            <NewShiftInput isStart={true}
                                value={row.sMonday}
                            />
                        </div>
                    ))}
                </div>

                <div className='bg-blue-100 '>
                    <div>End</div>
                    {data.map((row, index) => (
                        <div key={index}>
                            <NewShiftInput isStart={false}
                                value={row.eMonday}
                            />
                        </div>
                    ))}
                </div>

                <div className='bg-blue-100 '>
                    <div>Start</div>
                    {data.map((row, index) => (
                        <div key={index}>
                            <NewShiftInput isStart={true}
                                value={row.sMonday}
                            />
                        </div>
                    ))}
                </div>

                <div className='bg-blue-100 '>
                    <div>End</div>
                    {data.map((row, index) => (
                        <div key={index}>
                            <NewShiftInput isStart={false}
                                value={row.eMonday}
                            />
                        </div>
                    ))}
                </div>



            </div>

            <button onClick={handleAdd}>Add Row</button>
        </div>
    );
}
