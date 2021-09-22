import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const products = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        {products.map(({ title, price, thumbnail, id, quantity }) => (
          <div
            key={ id }
            data-testid="product"
          >
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
            <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
          </div>
        ))}
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}
