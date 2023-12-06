export default function TimeInputField() {
    return (
        <input className='text-blue-700 font-bold px-2 mx-2'
            type="time" id="appt" name="appt" min="00:00" max="24:00" defaultValue="00:00" required />
    );
} 