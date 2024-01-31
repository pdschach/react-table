import { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";


export const BasicTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const headers = {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDY2ODYwOTMsImV4cCI6MTcwNjc3MjQ5Mywicm9sZXMiOlsiUk9MRV9IT1NQSVRBTF9BRE1JTiJdLCJ1c2VybmFtZSI6ImdlYnJ1aWtlcjEwMUBhbWFuZHVzLmJyb2VkZXJzdmFubGllZmRlLmJlIiwibG9naW5faGFzaCI6IjdhZTZhOWQzMWE2ZGVlYTg4NTgyZDYyYTUyZDgyNzEwZGU4YjEwZWQifQ.J3rh5xFBDYGpLgcss7jEBco7diX40UBs3LfKE_C4B-LxXZVGRfsrBtRQSsDphs0wcfCYF9hYDo-ZRUrsjOwuLFsH19nBVTRFjlf1EQ0eBgV-v0rjBRgeg4IpOILVO7KXeSQtz-wyAX5NMO0Vm3xS6jjt-xA3tc8DE4Vg9J0pmAKOrPNuebADRm6Do0TWkMRRdhDl0n7hhgFv1-jMIdVAg60NUzx7TwfqjjFM4NG4uYm9_81EhRj1iJNcaMjqO8JxSP8krc_ASizObQu3gUT21OohVN9kUxRcoA-pctXNc61H7A2BpyP9tgDkgYeqfQBanN_OaeNZ8ok2Yfk2PtsPhBL0rMAH4dJzbhtIFEE--fW4CnbK1W9mv7fx-j68FDDqryz9jxWezQSqUXXwmg4tGfTwbT47J1njgHRk_BH0oiDmcbdpBZ9yVM27EUkMwxNQiLL95L7HdOCy8RzDpRrfMkY-Emo9r7LUSUMHoxVu1-_lACJiFPWBFU1n_4TF2WCON8TMPjNoAq0U_uX7fEG_qQn7H9QOMynOis6sXcLHHx9NbBAk9_Z-2n7z2raGVcl3ebeU09nIpslHSfT7gqTsnD9AA9wlofsQXw6sejAI6-0kNFUV9SWXGS2mVxJ2G5KtToGQSKR8ugKAB269U9JgvATq3Jfap-vsdtfWXTo_4gg",
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
