import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from "@material-ui/core/Badge";
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function MainAppBar(props) {
  const classes = useStyles();
  console.log('AppBar.....', props)
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit" aria-label="menu"
            onClick={props.onPressMenu}
          >
            <MenuIcon/>
          </IconButton>
          <img
            src={'https://www.golfthefairways.com/wp-content/uploads/2019/01/fairways-patch-logo.png'}
            className="App-logo-99" alt="logo"/>

          <div className={classes.grow}/>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingBasketOutlinedIcon/>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}