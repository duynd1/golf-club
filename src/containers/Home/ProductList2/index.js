import React from "react";
import {makeStyles} from '@material-ui/core/styles';
// import MUIDataTable from "mui-datatables";
import MUIDataTable from '../../../components/Table'
import products from '../../../_mockData/products'
import {Link} from "react-router-dom";
import {Gallery, Item} from "react-photoswipe-gallery";

import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));

export default class ProductList2 extends React.PureComponent {

  renderToolBarSelect = () => {
    return (<div style={{marginRight: 10}}>
        <Grid container alignItems="center">
          <Tooltip title="Xoá tất cả">
            <IconButton aria-label="delete">
              <DeleteIcon fontSize="small"/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Chọn mua tất cả">
            <IconButton aria-label="delete">
              <AddShoppingCartIcon fontSize="small"/>
            </IconButton>
          </Tooltip>
        </Grid>
      </div>
    );
  }

  render() {
    const columns = [
      {
        label: 'Mã SP', name: 'id',
        options: {
          searchable: true,
          filter: false,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) =>
            <Link to={'/product-details-old'}>
              {value}
            </Link>
        },
      },
      {
        label: 'Category', name: 'category',
        options: {
          searchable: false,
          filter: true,
          filterType: 'multiselect',
          sort: false,
        }
      },
      {
        label: 'Brand', name: 'brand',
        options: {
          searchable: false,
          filter: true,
          filterType: 'multiselect',
          sort: false,
        }
      },
      {
        label: 'Model', name: 'model',
        options: {
          searchable: false,
          filter: true,
          filterType: 'multiselect',
          sort: false,
        }
      },
      {
        label: 'Shaft', name: 'shaft',
        options: {
          searchable: false,
          filter: true,
          filterType: 'multiselect',
          sort: false,
        }
      },
      {
        label: 'Loft', name: 'loft',
        options: {
          searchable: false,
          filter: true,
          filterType: 'multiselect',
          sort: false,
        }
      },
      {
        label: 'Flex', name: 'flex',
        options: {
          searchable: false,
          filter: true,
          filterType: 'multiselect',
          sort: false,
        }
      },
      {
        label: 'Giá', name: 'price',
        options: {
          searchable: false,
          filter: false,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => `${value} ₫`
        }
      },
      {
        label: 'Barcode', name: 'barcode',
        options: {
          searchable: false,
          filter: false,
          sort: false,
        }
      },
      {
        label: 'hình ảnh',
        name: 'images',
        options: {
          searchable: false,
          filter: false,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            if (!!value) {
              return (
                <div>
                  <Gallery>
                    {value.map((item, index) => {
                      return <Item
                        original={item.url}
                        thumbnail={item.url}
                        width="1024"
                        height="768"
                      >
                        {({ref, open}) => (
                          <img style={
                            index != 0 ?
                              {width: 0, height: 0} :
                              {width: 40, height: 40, borderRadius: 20}
                          }
                               ref={ref}
                               onClick={open}
                               src={item.url}
                          />
                        )}
                      </Item>
                    })}
                  </Gallery>
                </div>
              )
            } else {
              return <div>Không có hình ảnh!</div>
            }
          }
        }
      },
      {
        label: 'Tình trạng', name: 'status',
        options: {
          searchable: false,
          filter: true,
          filterType: 'multiselect',
          sort: false,
        },
      },
      {
        label: 'Actions',
        name: 'meta',
        options: {
          searchable: false,
          filter: false,
          sort: false,
          viewColumns: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div style={{width: 180}}>
                <Tooltip title="Xoá">
                  <IconButton aria-label="delete">
                    <DeleteIcon fontSize="small"/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Sửa">
                  <IconButton onClick={() => {
                    this.props.onPressEdit(value)
                  }} aria-label="delete">
                    <EditIcon fontSize="small"/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Chi tiết">
                  <Link to={'/product-details'}>
                    <IconButton aria-label="delete">
                      <InfoIcon fontSize="small"/>
                    </IconButton>
                  </Link>
                </Tooltip>
                <Tooltip title="Chọn mua">
                  <IconButton aria-label="delete">
                    <AddShoppingCartIcon fontSize="small"/>
                  </IconButton>
                </Tooltip>
              </div>
            )
          }
        }
      }
    ]

    const data = products

    const options = {
      filterType: "dropdown",
      responsive: "stackedFullWidth",
      rowsPerPage: products.length,
      rowsPerPageOptions: [{label: 'Tất cả', value: products.length}, 10, 25, 50, 100],
      download: false,
      print: false,
      customToolbarSelect: this.renderToolBarSelect,
      textLabels: {
        body: {
          noMatch: "Không tìm thấy dữ liệu!",
        },
        pagination: {
          next: "Trang sau",
          previous: "Trang trước",
          rowsPerPage: "Hàng trên mỗi trang:",
          displayRows: "trên tổng",
        },
        toolbar: {
          search: "Tìm mã sản phẩm",
          downloadCsv: "Download CSV",
          print: "Print",
          viewColumns: "Cột hiển thị",
          filterTable: "Bộ lọc",
        },
        filter: {
          all: "Tất cả",
          title: "BỘ LỌC",
          reset: "Xoá bộ lọc",
        },
        viewColumns: {
          title: "Cột hiển thị",
          titleAria: "Show/Hide Table Columns",
        },
        selectedRows: {
          text: "SP đang được chọn",
          delete: "Xoá",
          deleteAria: "Xoá những dòng đang chọn",
        },
      }
    };

    return (
      <MUIDataTable
        title={"Danh sách sản phẩm"}
        data={data}
        columns={columns}
        options={options}
        onAddNew={() => this.props.onPressAddNew()}
      />
    );
  }
}