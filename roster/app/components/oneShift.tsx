import TimeInputField from "./timeInputField";

export default function OneShift() {
    return (
        <div className="flex flex-col my-4 p-2">
            <div className="flex">
                <label className='mt-1'>Start of shift:</label> <TimeInputField />
                <label className='mt-1'>End of shift:</label> <TimeInputField />
            </div>
        </div>
    )
}