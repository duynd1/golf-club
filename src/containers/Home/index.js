import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ProductList from './ProductList'
import ProductList2 from './ProductList2'
import './styles.scss'
import NavBar from '../../components/NavBar'
import EditModal from './EditModal'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openEditModal: false,
      editData: {}
    }
  }

  onOpenEditModal = (data) => {
    console.log('onOpenEditModal....', data)
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
        <ProductList2
          onPressAddNew={this.onOpenAddNewModal}
          onPressEdit={this.onOpenEditModal}/>
        <EditModal data={this.state.editData} open={this.state.openEditModal} handleClose={this.onCloseEditModal}/>
      </div>
    );
  }
}