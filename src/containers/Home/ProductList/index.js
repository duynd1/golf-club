import React, {forwardRef} from 'react';
import MaterialTable from 'material-table';
// import Link from '@material-ui/core/Link';
import {Link} from "react-router-dom";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


import {Gallery, Item} from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import products from '../../../_mockData/products'

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};
export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      {
        title: 'Mã SP', field: 'id',
        render: (rowData) =>
          <Link to={'/product-details'}>
            {rowData.id}
          </Link>
      },
      {title: 'Thông tin', field: 'description'},
      {
        title: 'hình ảnh',
        editComponent: () => <div>Upload!</div>,
        render: (rowData) => {
          if (rowData && rowData.images) {
            const maxWidthImgRow = rowData.images.length < 4 ? 80 * rowData.images.length : 300
            return (
              <div style={{minWidth: maxWidthImgRow}}>
                <Gallery>
                  {rowData.images.map(item => {
                    return <Item
                      original={item.url}
                      thumbnail={item.url}
                      width="1024"
                      height="768"
                    >
                      {({ref, open}) => (
                        <img style={{marginRight: 5, width: 80, height: 60}}
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
      },
      {title: 'Giá', field: 'price'},
      {title: 'Tình trạng', field: 'status'}
    ],
    data: products
  });

  return (
    <MaterialTable
      title={" "}
      searchText={'Tìm kiếm sản phầm'}
      icons={tableIcons}
      actionsColumnIndex={2}
      columns={state.columns}
      data={state.data}
      detailPanelColumnAlignment={'left'}
      editable={true ? {
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return {...prevState, data};
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return {...prevState, data};
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return {...prevState, data};
              });
            }, 600);
          }),
      } : null}
    />
  );
}
