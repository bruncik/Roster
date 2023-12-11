import React, { useState } from 'react';

export default function Testing() {
    const [data, setData] = useState([
        { name: 'John', age: 25, email: 'john@example.com' },
        { name: 'Jane', age: 30, email: 'jane@example.com' },
        { name: 'Bob', age: 35, email: 'bob@example.com' },
    ]);

    const handleEdit = (index, field, value) => {
        const updatedData = [...data];
        updatedData[index][field] = value;
        setData(updatedData);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>
                            <input
                                type="text"
                                value={row.name}
                                onChange={(event) =>
                                    handleEdit(index, 'name', event.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                value={row.age}
                                onChange={(event) =>
                                    handleEdit(index, 'age', parseInt(event.target.value))
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="email"
                                value={row.email}
                                onChange={(event) =>
                                    handleEdit(index, 'email', event.target.value)
                                }
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}