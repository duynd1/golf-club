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
import VerticalHeadingTable from "./VeticalHeadingTable";
import {Gallery, Item} from "react-photoswipe-gallery";

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
          <div>
            <div>
              <div>
                <h3>GẬY GOLF DUNLOP - D619066-XX</h3>
                <p>
                  Mã sản phẩm: D619066-XX
                </p>
                <p>
                  Nhà sản xuất: DUNLOP
                </p>
                <p className='price'>3,600,000₫</p>
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
                <p style={{color: '#2ecc71'}}>
                  Còn hàng
                </p>
                <div style={{maxWidth: 300, marginBottom: 50}}>
                  <Gallery>
                    <Item
                      original='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-7.png?v=1573617877677'
                      thumbnail='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-7.png?v=1573617877677'
                      width="1024"
                      height="768"
                    >
                      {({ref, open}) => (
                        <img style={{marginRight: 5, width: 80, height: 60}}
                             ref={ref}
                             onClick={open}
                             src='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-7.png?v=1573617877677'
                        />
                      )}
                    </Item>
                    <Item
                      original='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-5.png?v=1573617797197'
                      thumbnail='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-5.png?v=1573617797197'
                      width="1024"
                      height="768"
                    >
                      {({ref, open}) => (
                        <img style={{marginRight: 5, width: 80, height: 60}}
                             ref={ref}
                             onClick={open}
                             src='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-5.png?v=1573617797197'
                        />
                      )}
                    </Item>
                    <Item
                      original='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-4.png?v=1573617797197'
                      thumbnail='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-4.png?v=1573617797197'
                      width="1024"
                      height="768"
                    >
                      {({ref, open}) => (
                        <img style={{marginRight: 5, width: 80, height: 60}}
                             ref={ref}
                             onClick={open}
                             src='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-4.png?v=1573617797197'
                        />
                      )}
                    </Item>
                    <Item
                      original='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-4.png?v=1573617797197'
                      thumbnail='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-4.png?v=1573617797197'
                      width="1024"
                      height="768"
                    >
                      {({ref, open}) => (
                        <img style={{marginRight: 5, width: 80, height: 60}}
                             ref={ref}
                             onClick={open}
                             src='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-4.png?v=1573617797197'
                        />
                      )}
                    </Item>
                    <Item
                      original='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-3.png?v=1573617797197'
                      thumbnail='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-3.png?v=1573617797197'
                      width="1024"
                      height="768"
                    >
                      {({ref, open}) => (
                        <img style={{marginRight: 5, width: 80, height: 60}}
                             ref={ref}
                             onClick={open}
                             src='https://bizweb.dktcdn.net/thumb/grande/100/182/519/products/bo-gay-golf-fullset-nu-callaway-solaire-2018-3.png?v=1573617797197'
                        />
                      )}
                    </Item>
                  </Gallery>
                </div>
              </div>
            </div>
          </div>
          <div>
            <VerticalHeadingTable/>
          </div>
        </div>
      </div>
    );
  }
}