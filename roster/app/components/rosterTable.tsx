import ContextX from "./contextX"
import { useContext, useState } from "react"

export default function RosterTable() {
    const { hours, shiftStart, shiftEnd } = useContext(ContextX);
    const [value, setValue] = useState([]);

    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                        <th>Total hours</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Starting:{shiftStart} ending:{shiftEnd} Total:{hours}</td>
                        <td>{ }</td>
                        <td>{ }</td>
                        <td>{ }</td>
                        <td>{ }</td>
                        <td>{ }</td>
                        <td>{ }</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}