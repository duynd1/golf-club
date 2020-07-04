import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Grid from "@material-ui/core/Grid";

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
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

function createData(date, orderId, status, remainTime) {
  return {
    date,
    orderId,
    status,
    remainTime,
    history: [
      {id: 'D619066-XX', category: 'Driver', brand: 'DUNLOP', price: '3,600,000'},
      {id: 'D619073-HM', category: 'Fairway Wood', brand: 'HONMA', price: '4,000,000'},
    ],
  };
}

function Row(props) {
  const {row} = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell align="right">{row.orderId}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
        <TableCell align="right">{row.remainTime}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Chi tiết
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Mã SP</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell align="right">Brand</TableCell>
                    <TableCell align="right">Giá (đ)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row">
                        {historyRow.id}
                      </TableCell>
                      <TableCell>{historyRow.category}</TableCell>
                      <TableCell align="right">{historyRow.brand}</TableCell>
                      <TableCell align="right">
                        {historyRow.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('27-06-2020', '#RES001', 'booked', '10:00'),
  createData('27-06-2020', '#RES002', 'booked', '10:00'),
  createData('27-06-2020', '#RES003', 'booked', '10:00'),
  createData('27-06-2020', '#RES004', 'booked', '10:00'),
  createData('27-06-2020', '#RES005', 'booked', '10:00'),
];

export default function CollapsibleTable() {
  const classes = useRowStyles();
  return (
    <TableContainer component={Paper}>
      <Typography
        variant="h6"
        className={classes.boxTitle}
        gutterBottom>
        Đơn hàng đang hoạt động
      </Typography>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell/>
            <TableCell>Ngày</TableCell>
            <TableCell align="right">Mã đơn hàng</TableCell>
            <TableCell align="right">Trạng thái</TableCell>
            <TableCell align="right">Thời gian giữ chỗ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.date} row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
