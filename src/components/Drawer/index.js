import React, {forwardRef, useRef, useImperativeHandle} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
import {EqualizerRounded as EqualizerIcon, HomeOutlined as HomeIcon} from "@material-ui/icons";
import BackupIcon from '@material-ui/icons/Backup';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
});

const Drawer = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    toggle(open) {
      setState({...state, showDrawer: open});
    }
  }));

  const classes = useStyles();
  const [state, setState] = React.useState({
    showDrawer: false
  });

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, showDrawer: open});
  };

  return (
    <div>
      <SwipeableDrawer
        anchor={'left'}
        open={state.showDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className={classes.drawer}>
          <List>
            <ListItem button key={'home'}>
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <Link to={'/'} className={'link-cus'}>
                <ListItemText primary={'Trang chủ'}/>
              </Link>
            </ListItem>
            <ListItem button key={'thongke'}>
              <ListItemIcon><EqualizerIcon/></ListItemIcon>
              <ListItemText primary={'Thống kê'}/>
            </ListItem>
            <ListItem button key={'import'}>
              <ListItemIcon><BackupIcon/></ListItemIcon>
              <ListItemText primary={'Nhập liệu'}/>
            </ListItem>
            <ListItem button key={'import'}>
              <ListItemIcon><SettingsIcon/></ListItemIcon>
              <ListItemText primary={'Cài đặt'}/>
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
})

export default Drawer