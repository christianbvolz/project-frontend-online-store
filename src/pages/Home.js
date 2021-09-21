import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsList from './productsList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <button type="button">Carrinho</button>
        </Link>
        <ProductsList />
      </div>
    );
  }
}
