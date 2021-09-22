import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddProductCart extends Component {
  constructor({ product: { quantity } }) {
    super();
    this.state = {
      quantity,
    };
  }

  clickButton(action) {
    let { quantity } = this.state;
    if (action === '-' && quantity > 1) quantity -= 1;
    if (action === '+') quantity += 1;
    this.setState({
      quantity,
    });
  }

  render() {
    const { product: { title, thumbnail, price } } = this.props;
    const { quantity } = this.state;
    return (
      <div
        data-testid="product"
      >
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.clickButton('+') }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.clickButton('-') }
        >
          -
        </button>
      </div>
    );
  }
}

AddProductCart.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
