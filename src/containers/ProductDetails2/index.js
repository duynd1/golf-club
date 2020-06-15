import React, {Component} from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import MaterialLink from '@material-ui/core/Link';
import './styles.scss';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import VerticalHeadingTable from "./VeticalHeadingTable";
import {Gallery, Item} from "react-photoswipe-gallery";

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from "@material-ui/core/Grid";
import {Carousel} from "react-responsive-carousel";
import Container from "@material-ui/core/Container";
import AppBar from "../../components/AppBar";

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
      <div className={'details-container'}>
        <AppBar/>
        <Breadcrumbs aria-label="breadcrumb">
          <MaterialLink color="inherit">
            <Link to="/">Trang chủ</Link>
          </MaterialLink>
          <MaterialLink color="inherit">
            <Link to="/">Gậy Golf</Link>
          </MaterialLink>
          <Typography color="textPrimary">D619066-XX</Typography>
        </Breadcrumbs>
        <div className={'details-content-wrapper'}>
          <Container component="main">
            <Grid container spacing={3}>
              <Grid item md={5} xs={12} justify="center">
                <div>
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
              </Grid>
              <Grid item md={7} xs={12}>
                <Box display="flex">
                  <div>
                    <h3>GẬY GOLF DUNLOP - D619066-XX</h3>
                    <p>
                      Mã sản phẩm: D619066-XX
                    </p>
                    <p>
                      Nhà sản xuất: DUNLOP
                    </p>
                    <p className='price'>3,600,000₫</p>
                    <p style={{color: '#2ecc71'}}>
                      Còn hàng
                    </p>
                    <div>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<AddShoppingCartIcon/>}
                      >
                        Đặt hàng
                      </Button>
                    </div>
                  </div>
                </Box>
                <br/>
                <p>
                  Thông số sản phẩm:
                </p>
                <VerticalHeadingTable/>
              </Grid>
            </Grid>
            <Box display="flex" flexGrow={1}/>
          </Container>
        </div>
      </div>
    );
  }
}