import RosterEdit from "./components/rosterEdit";
import RosterPreview from "./components/rosterPreview";
import TotalHours from "./components/totalHours";

export default function BasicCalculator() {

    return (
        <div>
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