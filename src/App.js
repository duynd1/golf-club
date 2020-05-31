import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './containers/Home'
import ProductDetails from './containers/ProductDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/product-details" component={ProductDetails}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
