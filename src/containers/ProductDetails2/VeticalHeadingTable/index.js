import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box";

export default class VerticalHeadingTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {
        "id": "D1019154-HM",
        "category": "Driver",
        "brand": "HONMA",
        "loft": "10.5",
        "flex": "R",
        "gender": "Men",
        "hand": "Left Hand",
        "shaft": "Graphite",
        "conditionRank": "Acceptable",
        "headcover": "Yes",
        "PLU": "2.123E+12",
        "price": "3,950,000",
        "shop": "Japan golf Phương Đông",
        "status": "Còn hàng",
      }
    }

  }

  createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
  }

  render() {
    const rows = [
      this.createData('Driver', 44.0, 21.0, 35.0, '276g'),
      this.createData('W#5', 41.0, 29.0, 43.30, '296g'),
      this.createData('Hybrid', 37.0, 33.0, 63.0, '325g'),
      this.createData('#7', 35.0, 43.0, 64.0, '345g'),
      this.createData('#9', 34.0, 63.0, 70.0, '365g'),
    ];
    const details = this.state.details
    return (
      <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
        <TableContainer component={Paper} style={{width: 300, margin: 10}}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} variant='head' scope="row">
                  Category</TableCell>
                <TableCell align="right">{details.category}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Brand</TableCell>
                <TableCell align="right">{details.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Model</TableCell>
                <TableCell align="right">{details.model}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Shaft</TableCell>
                <TableCell align="right">{details.shaft}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Loft</TableCell>
                <TableCell align="right">{details.loft}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Flex</TableCell>
                <TableCell align="right">{details.flex}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Player</TableCell>
                <TableCell align="right">{details.gender}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Hand</TableCell>
                <TableCell align="right">{details.hand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  ShaftMaterial</TableCell>
                <TableCell align="right">{details.shaftMaterial}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} style={{width: 300, margin: 10}}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  ConditionalRank</TableCell>
                <TableCell align="right">{details.conditionRank}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} variant='head' scope="row">
                  Headcover</TableCell>
                <TableCell align="right">{details.headcover}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Price</TableCell>
                <TableCell align="right">{details.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Barcode</TableCell>
                <TableCell align="right">{details.barcode}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  PLU</TableCell>
                <TableCell align="right">{details.PLU}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Status</TableCell>
                <TableCell align="right">{details.status}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Location</TableCell>
                <TableCell align="right">{details.location}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Madein</TableCell>
                <TableCell align="right">{details.madein}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" style={{fontWeight: 'bold'}} scope="row">
                  Note</TableCell>
                <TableCell align="right">{details.note}</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    )
  }
}

