import "./App.css";
import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";

function App() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Full Name",
        accessor: "full_name",
      },
      {
        Header: "Avatar",
        accessor: "avatar",
        cell: ({ value }) => (
          <img
            src={value}
            alt="Avatar"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              objectFit: "cover",
            }}
            classname="avatar-image"
          />
        ),
      },
      {
        Header: "Bio Data",
        accessor: "bio_data",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Overall Score",
        accessor: "overall_score",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
