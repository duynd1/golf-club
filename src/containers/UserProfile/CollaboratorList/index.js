import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
  },
  boxTitle: {
    backgroundColor: '#EFF2F7',
    color: '#333333',
    paddingTop:15,
    paddingBottom:15,
    paddingLeft: 20,
    borderTopLeftRadius:4,
    borderTopRightRadius:4
  }
});

function createData(name, sdt, dg, ctt) {
  return { name, sdt, dg, ctt };
}

const rows = [
  createData('duynd', '0933128462', 1, 4, ),
  createData('tamvt', '0932173213', 2, 5, ),
  createData('gianght', '0911223223', 3, 1, ),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Typography className={classes.boxTitle} variant="h6" gutterBottom>
        Danh sách cộng tác viên
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Sđt</TableCell>
            <TableCell align="right">ĐH ĐG</TableCell>
            <TableCell align="right">ĐH CTT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.sdt}</TableCell>
              <TableCell align="right">{row.dg}</TableCell>
              <TableCell align="right">{row.ctt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
