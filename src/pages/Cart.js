import React, { Component } from 'react';
import AddProductCart from '../components/AddProductCart';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      storageCartItems: JSON.parse(localStorage.getItem('cart')),
    };
  }

  renderCartItems() {
    const { storageCartItems } = this.state;
    return (
      <>
        {storageCartItems.map((product) => (
          <AddProductCart key={ product.id } product={ product } />
        ))}
        <span>Valor total da Compra: $</span>
        <div>
          <button type="button">Finalizar compra</button>
        </div>
      </>
    );
  }

  render() {
    const { storageCartItems } = this.state;
    return (
      <div>
        {storageCartItems
          ? this.renderCartItems()
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </div>
    );
  }
}
