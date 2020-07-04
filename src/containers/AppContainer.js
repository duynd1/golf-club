import React, {useRef, useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './Home'
import Dashboard from './Dashboard'
import Login from './Login'
import ProductDetails from './ProductDetails'
import ProductDetails2 from './ProductDetails2'
import UserProfile from './UserProfile'

import ShoppingCart from './ShoppingCart'
import '../themes/globalStyles.scss'

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
      <Switch>
        <Route path="/userprofile" component={UserProfile}/>
        <Route path="/shopping-cart" component={ShoppingCart}/>
        <Route path="/product-details-old" component={ProductDetails}/>
        <Route path="/product-details" component={ProductDetails2}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
