import { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";

export const BasicTable = () => {
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
      localStorage.setItem('jsontoken', data.token)
      // console.log("Successful Authorization. Token: " + api_token);
    };
    authorize();

    let token = localStorage.getItem('jsontoken');

  
    const headers = {
      Authorization: "Bearer " +token,
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

  

  //   const headers = {
  //     Authorization:
  //       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDY3ODI1NDksImV4cCI6MTcwNjg2ODk0OSwicm9sZXMiOlsiUk9MRV9IT1NQSVRBTF9BRE1JTiJdLCJ1c2VybmFtZSI6ImdlYnJ1aWtlcjEwMUBhbWFuZHVzLmJyb2VkZXJzdmFubGllZmRlLmJlIiwibG9naW5faGFzaCI6IjdhZTZhOWQzMWE2ZGVlYTg4NTgyZDYyYTUyZDgyNzEwZGU4YjEwZWQifQ.NLjbVvVfoA6M-Umw2cGMLlWxwr3GJO6nfi2MnvMvg03FS_mC28C2P8h5t3DqJ_QGIMBtJF_wOBHa6GH0g33VpG6mIwNhVqDGX3ALbbmEORZVzrKy9FvgjqZTCgrbxaA8MX6HItI0_mlfuTDFdnXUJkJ_zjm69MpZkrrNDV6PV82JV6qTbfRWmXGoRV2av27WOzO-8O-MG9FK6jauJjoQhPEDm_cUKlgOB79VmVJnVFo_m0vqWwMdoQwBXqq6rgKbQCvupFb8dAXnJffwvv81DrMSXKRXcKGx-Tguwvp3ZXlMVgqMRGnckMwCORpLycuOGJpSWUKCa_3Quvuk--SU1gF_b2VktOipG2I4l_zVBjF_phQ8QYW2Ck4MP6YTYAgz8MYoq2R1HGeKEFVP5L_XtKdd9pZboxfBa0C9fTq6pHVUsaA2ViQ3_8F9DVysS76Kt551GcF7Dwzfv1rtsu-NoPO9-6cR2VHg_KwyUnKDiPdcIci7Tq-EWdt3MdlQZRnqkbvqh0eERWBjXgV4951upONLRgv0MN3K4M9cDmoCTBI5pnVjC8_Yo2PJswZKioaH34FJV6f-e5MOomDudDSB-s_LUlic_oznQt_3bxuranwBL0KFU0IkpV7g5m_mw4yuzJu9QHLg2o1Srwgxj7xzefHunaLYqquJORvPNqOS3gY",
  //   };
  //   fetch(
  //     "https://api.interneo.pro/internship/daterange/2023-01-26/2025-01-25?getBadges=true",
  //     { headers }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data.data);
  //     });
  // }, []);

  const columns = useMemo(() => COLUMNS, []);
  //   const data = useMemo(() => users, []);

  const tableInstance = useTable({
    columns: columns,
    data: users,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
  );
};
