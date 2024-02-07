import { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { COLUMNS } from "./columns";
import GlobalFilter from "./GlobalFilter";

export const SortingTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const authorize = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: "gebruiker101@amandus.broedersvanliefde.be",
        password: "Samen in Amandus102.",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const res = await fetch(
        "https://api.interneo.pro/auth",
        requestOptions
      ).catch(console.log("error"));
      const data = await res.json();
      localStorage.setItem("jsontoken", data.token);
      // console.log("Successful Authorization. Token: " + api_token);
    };
    authorize();

    let token = localStorage.getItem("jsontoken");

    const headers = {
      Authorization: "Bearer " + token,
    };
    fetch(
      "https://api.interneo.pro/internship/daterange/2023-01-26/2025-01-25?getBadges=true",
      { headers }
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      });
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  //   const data = useMemo(() => users, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: users,
    },
    useGlobalFilter, useSortBy
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } =
    tableInstance;

    const { globalFilter } = state

  return (
    <>
     <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} ></GlobalFilter>
    
    <table {...getTableProps()}> 
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "⬆" : " ⬇") : " "}
                </span>
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
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
};
