import TimeInputField from "./timeInputField";
import ContextX from "./contextX"
import { useContext, useState } from "react"

export default function NewShiftInput(props) {

    const { shift, setShift, setDurationShift } = useContext(ContextX);
    //   need move to context
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
        const minutes = Math.floor((duration / (1000 * 60)) % 60);      //!!!!!! check for leading 0

        // save to shift context
        var strMinutes = '';
        if (minutes < 10) {
            strMinutes = '0' + minutes;
        }
        else {
            strMinutes = '' + minutes;
        }

        const newShift = { start: shiftStart, end: shiftEnd, hours: hours + ':' + strMinutes };
        setShift([...shift, newShift]);
        setDurationShift(p => p + duration);
        setShiftStart('00:00');
        setShiftEnd('00:00');
        //addHours(' -- ' + hours + ':' + minutes + ' ');
    };

    return (        // form with button
        <div className="bg-white">
            <form onSubmit={handleSubmit}>
                <div className="text-xs my-1">
                    {
                        props.isStart ?
                            <TimeInputField value={shiftStart} onChange={handleShiftChangeS} />
                            :
                            <TimeInputField value={shiftEnd} onChange={handleShiftChangeE} />

                    }
                </div>
            </form>
        </div>
    )
}