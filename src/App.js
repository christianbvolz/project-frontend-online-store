import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Cart from './pages/Cart';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ Cart } />
          <Route path="/product/:id" component={ ProductDetails } />
        </Switch>
      </Router>
    );
  }
}

export default App;
