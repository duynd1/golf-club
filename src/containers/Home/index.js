import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ProductList from './ProductList'
import './styles.scss'
import NavBar from '../../components/NavBar'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <NavBar
          content={
            <div>
              <ProductList/>
            </div>
          }/>
      </div>
    );
  }
}