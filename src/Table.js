import React from 'react';
import { useTable } from 'react-table';
import './Table.scss';

export default function Table
    ({ data }) {

    const columns = React.useMemo(
        () => [

            { Header: 'Name', accessor: 'name' },
            { Header: 'Monday', accessor: 'monday' },
            { Header: 'Tuesday', accessor: 'tuesday' },
            { Header: 'Wednesday', accessor: 'wednesday' },
            { Header: 'Thursday', accessor: 'thursday' },
            { Header: 'Friday', accessor: 'friday' },
            { Header: 'Saturday', accessor: 'saturday' },
            { Header: 'Sunday', accessor: 'sunday' },

            // Add other columns as needed
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

}
