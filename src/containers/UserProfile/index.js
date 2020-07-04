import React, {Component} from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import './styles.scss';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {withStyles} from '@material-ui/styles';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField/TextField";
import AppBar from "../../components/AppBar";
import Typography from "@material-ui/core/Typography";
import OrderList from './OrderList'
import CollaboratorList from './CollaboratorList'
import EditIcon from '@material-ui/icons/Edit';

const cusStyles = theme => ({
  rootForm: {
    '& .MuiTextField-root': {
      marginTop: 10,
    },
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  customBox: {
    borderRadius: 4
  },
  boxTitle: {
    backgroundColor: '#EFF2F7',
    color: '#333333',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileAvatar: {
    position: 'relative',
    '& .avt-edit-btn': {
      backgroundColor: '#000000',
      borderRadius: '100%',
      opacity: 0.35,
      width: 40,
      height: 40,
      color: '#FFFFFF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 6,
      top: 6,
      zIndex: 999
    },
    '& .avt-img': {
      width: 110,
      height: 110,
      borderRadius: 4,
    },
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
    '& .profile-name': {
      color: '#333333',
      fontSize: 22,
    },
    '& .profile-date': {
      color: '#A8A8A8',
      fontSize: 15,
      marginTop: 5
    },
  },
});

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={'page-container'}>
        <AppBar/>
        <Container component="main">
          <Grid>
            <div className={classes.profileWrapper}>
              <div className={classes.profileAvatar}>
                <div className={'avt-edit-btn'}>
                  <EditIcon/>
                </div>
                <img
                  className={classes.avt}
                  className={'avt-img'}
                  src={'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg'}
                />
              </div>
              <div className={classes.profileInfo}>
                <div className={'profile-name'}>Duy Ngô</div>
                <div className={'profile-date'}>Ngày tham gia: 12/10/2019</div>
              </div>
            </div>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={5} xs={12} justify="center" alignItems="center">
              <Box
                className={classes.customBox}
                boxShadow={1}
              >
                <Typography className={classes.boxTitle} variant="h6" gutterBottom>
                  Thông tin cá nhân
                </Typography>
                <form className={classes.rootForm} noValidate autoComplete="off">
                  <TextField
                    label="Họ và tên"
                    value={'Duy Ngô'}
                    disabled
                    fullWidth
                  />
                  <TextField
                    label="Username"
                    value={'ngoducduy'}
                    disabled
                    fullWidth
                  />
                  <TextField
                    label="Nhóm người dùng"
                    value={'CTV'}
                    disabled
                    fullWidth
                  />
                  <TextField
                    label="Tên công ty"
                    value={'MTP entertainment'}
                    disabled
                    fullWidth
                  />
                  <TextField
                    label="Người phụ trách"
                    value={'Tùng Sơn'}
                    disabled
                    fullWidth
                  />
                </form>
              </Box>
              <Grid item md={12} justify="center" alignItems="center">
                <br/>
                <CollaboratorList/>
              </Grid>
            </Grid>
            <Grid item md={7} xs={12}>
              <OrderList/>
            </Grid>
          </Grid>
          <Box display="flex" flexGrow={1}/>
        </Container>
      </div>
    );
  }
}

export default withStyles(cusStyles)(UserProfile)