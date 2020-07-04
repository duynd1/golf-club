import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from "../../components/AppBar";
import TabBar from './TabBarCart'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
    marginTop: 60,
    padding: 50
  },
}));

export default function ShoppingCart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar/>
      <TabBar/>
    </div>
  );
}
