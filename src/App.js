import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Product from './components/Product.js';
import ProductList from './components/ProductList.js';
import ProductDetails from './components/ProductDetails.js';
import Cart from './components/Cart.js';
import Default from './components/Default.js';
import Navigation from './components/Navigation.js';
import './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <React.Fragment>
          <Navigation />
          <Switch>
            <Route exact name="index" path="/" component={ProductList} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/cart" components={Cart} />
            <Route component={Default} /> 
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;

