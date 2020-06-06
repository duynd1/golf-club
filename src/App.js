import React, {Component, useRef, useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './containers/Home'
import ProductDetails from './containers/ProductDetails'
import ProductDetails2 from './containers/ProductDetails2'
import AppBar from './components/AppBar'
import Drawer from './components/Drawer'
import Divider from "@material-ui/core/Divider";
import ShoppingCart from './containers/ShoppingCart'
import Box from "@material-ui/core/Box";

function App() {
  const drawerRef = useRef(null);

  useEffect(() => {
    console.log(drawerRef);
  }, [drawerRef]);

  const onToggleMenu = (open) => {
    drawerRef.current && drawerRef.current.toggle(open)
  };

  return (
    <BrowserRouter>
      <AppBar onPressMenu={() => onToggleMenu(true)}/>
      <Drawer ref={drawerRef}/>
      <Switch>
        <Route path="/shopping-cart" component={ShoppingCart}/>
        <Route path="/product-details-old" component={ProductDetails}/>
        <Route path="/product-details" component={ProductDetails2}/>
        <Route path="/" component={Home}/>
      </Switch>
      <footer>
        Copyright © 2020 <strong>Golf Shop Demo</strong>
      </footer>
    </BrowserRouter>
  );
}

export default App;
