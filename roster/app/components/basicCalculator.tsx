import RosterEdit from "./rosterEdit";
import RosterPreview from "./rosterPreview";
import TotalHours from "./totalHours";

export default function BasicCalculator() {

    return (
        <div>
            <h1 className="font-bold text-blue-700 text-3xl">Basic Hours Calculator</h1>
            <div className='test text-red-700 flex justify-center'>
                <RosterEdit />
                <TotalHours />
            </div>
            <div>
                <RosterPreview />
            </div>
        </div>
    )
}