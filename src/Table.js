import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(flag, name, cost) {
  return { flag, name, cost };
}

const rows = [
  createData("fi fi-us", "United States", "12,897"),
  createData("fi fi-nl", "Netherlands", "11,789"),
  createData("fi fi-au", "Australia", "10,234"),
  createData("fi fi-nl", "United Kingdom", "9104"),
  createData("fi fi-gb", "Canada", "16205"),
];

export function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell sx={{ width: "60px" }}>
                <span
                  class={row.flag}
                  style={{
                    borderRadius: "50%",
                    height: "40px",
                    width: "40px",
                    backgroundSize: "cover",
                  }}
                ></span>
              </TableCell>
              <TableCell sx={{ fontSize: "18px" }}>{row.name}</TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: 500, fontSize: "18px" }}
              >
                ${row.cost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
