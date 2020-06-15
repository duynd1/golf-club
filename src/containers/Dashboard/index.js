import React, {Component} from 'react';
import ProductList from './ProductList'
import './styles.scss'
import EditModal from './EditModal'
import Box from "@material-ui/core/Box";
import AppBar from '../../components/AppBar'

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
        <AppBar/>
        <Box display={'flex'} justifyContent="center" flexDirection="row" flexWrap="wrap">
          <ProductList
            onPressAddNew={this.onOpenAddNewModal}
            onPressEdit={this.onOpenEditModal}/>
        </Box>
        <EditModal data={this.state.editData} open={this.state.openEditModal} handleClose={this.onCloseEditModal}/>
      </div>
    );
  }
}