import React, {useEffect, useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from "@material-ui/core/Badge";
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'
import Drawer from '../Drawer'
import Logo from '../Logo'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  logo: {
    color: 'white',
    textDecoration: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function MainAppBar(props) {
  const classes = useStyles();

  const drawerRef = useRef(null);

  useEffect(() => {
    console.log(drawerRef);
  }, [drawerRef]);

  const onToggleMenu = (open) => {
    drawerRef.current && drawerRef.current.toggle(open)
  };

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit" aria-label="menu"
            onClick={() => onToggleMenu(true)}
          >
            <MenuIcon/>
          </IconButton>
          <Link to={'/'} className={classes.logo}>
            <Logo/>
          </Link>
          <div className={classes.grow}/>
          <div className={classes.sectionDesktop}>
            <Link to={'/shopping-cart'} style={{color: 'white'}}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingBasketOutlinedIcon/>
                </Badge>
              </IconButton>
            </Link>
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
      <Drawer ref={drawerRef}/>
    </div>
  );
}