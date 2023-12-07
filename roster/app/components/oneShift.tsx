import TimeInputField from "./timeInputField";
import ContextX from "./contextX"
import { useContext, useState } from "react"

export default function OneShift() {

    const { addHours } = useContext(ContextX);
    const [shiftStart, setShiftStart] = useState('00:00');
    const [shiftEnd, setShiftEnd] = useState('00:00');

    const handleShiftChangeS = (newX) => {
        setShiftStart(newX);
    };

    const handleShiftChangeE = (newX) => {
        setShiftEnd(newX);
    };

    const handleSubmit = (event) => {       //here you shoul count ==> endShitf - startShift 
        console.log('handleSubmit ran');
        event.preventDefault(); // 👈️ prevent page refresh

        //******************************** */
        const startDate = new Date(`1970-01-01T${shiftStart}:00Z`);
        const endDate = new Date(`1970-01-01T${shiftEnd}:00Z`);

        var duration = endDate - startDate;

        if (duration < 0) {
            duration += 24 * 60 * 60 * 1000;
        }

        const hours = Math.floor(duration / (1000 * 60 * 60));
        const minutes = Math.floor((duration / (1000 * 60)) % 60);

        setShiftStart('00:00');
        setShiftEnd('00:00');
        addHours(' -- ' + hours + ':' + minutes + ' ');
    };

    return (        // form with button
        <div className="flex flex-col my-4 p-2">
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <label className='mt-1'>Start of shift:</label>
                    <TimeInputField value={shiftStart} onChange={handleShiftChangeS} />
                    <label className='mt-1'>End of shift:</label>
                    <TimeInputField value={shiftEnd} onChange={handleShiftChangeE} />
                </div>
                <button type="submit">Submit shift</button>
            </form>
        </div>
    )
}