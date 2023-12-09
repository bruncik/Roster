
export default function TimeInputField(props) {

    const handleChange = (event) => {
        props.onChange(event.target.value);
    };

    return (
        //in the future here will be form with submit button 
        <input className='text-blue-700 font-bold px-1 mx-1 border-2'
            type="time" id="appt" name="appt" min="00:00" max="24:00" defaultValue="00:00"
            required value={props.value} onChange={handleChange} />
    );
} 