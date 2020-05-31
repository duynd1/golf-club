import React, {Component} from 'react';
import {Link} from "react-router-dom";
import NavBar from '../../components/NavBar'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import MaterialLink from '@material-ui/core/Link';
import ReactImageMagnify from 'react-image-magnify';
import './styles.scss';
import Divider from '@material-ui/core/Divider';

import CopyrightIcon from '@material-ui/icons/Copyright';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
    return (
      <div className="App">
        <NavBar
          content={
            <div>
              <Breadcrumbs aria-label="breadcrumb">
                <MaterialLink color="inherit">
                  <Link to="/">Trang chủ</Link>
                </MaterialLink>
                <MaterialLink color="inherit">
                  <Link to="/">Gậy Golf</Link>
                </MaterialLink>
                <Typography color="textPrimary">CLTGS18</Typography>
              </Breadcrumbs>
              <div className="fluid">
                <div className="fluid__image-container">
                  {/*<ReactImageMagnify {...{*/}
                  {/*  smallImage: {*/}
                  {/*    alt: 'Wristwatch by Ted Baker London',*/}
                  {/*    isFluidWidth: true,*/}
                  {/*    src: 'https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-3.png?v=1573617797197',*/}
                  {/*  },*/}
                  {/*  largeImage: {*/}
                  {/*    src: 'https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-3.png?v=1573617797197',*/}
                  {/*    width: 1000,*/}
                  {/*    height: 1000*/}
                  {/*  },*/}
                  {/*  shouldUsePositiveSpaceLens: true*/}
                  {/*}} />*/}
                  <Carousel>
                    <img style={{backgroundColor: '#FAFAFA'}}
                         src='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-7.png?v=1573617877677'/>
                    <img style={{backgroundColor: '#FAFAFA'}}
                         src='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-5.png?v=1573617797197'/>
                    <img style={{backgroundColor: '#FAFAFA'}}
                         src='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-4.png?v=1573617797197'/>
                    <img style={{backgroundColor: '#FAFAFA'}}
                         src='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-3.png?v=1573617797197'/>

                  </Carousel>
                </div>
                <div className="fluid__instructions">
                  <h3>BỘ GẬY GOLF NỮ FULLSET - CALLAWAY SOLAIRE 18 - CLTGS18</h3>
                  <p>
                    Mã sản phẩm: CLTGS1856
                  </p>
                  <p>
                    Nhà sản xuất: CALLAWAY
                  </p>
                  <p className='price'>23.000.000₫</p>
                  <p style={{color: '#2ecc71'}}>
                    Còn hàng
                  </p>
                  <p>
                    Thông số sản phẩm:
                  </p>
                  <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Gậy</TableCell>
                          <TableCell align="right">Chiều dài</TableCell>
                          <TableCell align="right">Góc Loft</TableCell>
                          <TableCell align="right">Góc Lie</TableCell>
                          <TableCell align="right">Trọng lượng</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
              <div>
                <Divider/>
                <footer>
                  Copyright © 2020 <strong>Golf Shop Demo</strong>
                </footer>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}