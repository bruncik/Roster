import ContextX from "./contextX"
import { useContext } from "react"

export default function RosterTable() {
    const { hours } = useContext(ContextX);

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
                        <td>{hours}</td>
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