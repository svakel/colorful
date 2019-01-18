import React  from 'react';
import{ BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './components/Product.js';
import ProductContainer from './components/ProductContainer.js';

import './App.css';

const App = appProps => (
  <Router>
    <div className="App">
      <Switch>
          <Route exact name="index" path="/" component={ProductContainer} />
          <Route path="/product/:id" component={Product} />
          <Route path="/colors" component={Product} />

      </Switch>
    </div>
  </Router>
)

export default App;

