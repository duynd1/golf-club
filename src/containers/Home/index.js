import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ProductList from './ProductList'
import ProductList2 from './ProductList2'
import './styles.scss'
import NavBar from '../../components/NavBar'
import EditModal from './EditModal'
import Slider from '../../components/Slider'
import Box from "@material-ui/core/Box";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openEditModal: false,
      editData: {}
    }
  }

  onOpenEditModal = (data) => {
    this.setState({
      openEditModal: true,
      editData: data
    })
  }

  onOpenAddNewModal = () => {
    this.setState({
      openEditModal: true,
      editData: {}
    })
  }

  onCloseEditModal = () => {
    this.setState({openEditModal: false})
  }

  render() {
    return (
      <div className="page-container">
        <Box display={'flex'} justifyContent="center" flexDirection="row" flexWrap="wrap">
          <ProductList2
            onPressAddNew={this.onOpenAddNewModal}
            onPressEdit={this.onOpenEditModal}/>
        </Box>
        <EditModal data={this.state.editData} open={this.state.openEditModal} handleClose={this.onCloseEditModal}/>
      </div>
    );
  }
}