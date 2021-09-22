import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardProducts extends Component {
  constructor() {
    super();
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let check = '';
    if (cart) {
      check = cart.find((({ id }) => id === product.id));
    } else {
      cart = [];
    }
    if (check) {
      Object.assign(product, { quantity: check.quantity + 1 });
      cart = cart.filter(({ id }) => id !== check.id);
      console.log(cart);
    } else {
      Object.assign(product, { quantity: 1 });
    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map(({ title, price, thumbnail, id }) => (
          <div
            key={ id }
            data-testid="product"
          >
            <p>{ title }</p>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
            <Link
              data-testid="product-detail-link"
              to={ `/product/${id}` }
            >
              Detalhes do Produto
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => this.addProductToCart({ title, price, thumbnail, id }) }
            >
              Adicionar ao carrinho.
            </button>
          </div>
        ))}
      </div>
    );
  }
}

CardProducts.propTypes = {
  products: PropTypes.oneOfType([PropTypes.array, PropTypes.any]).isRequired,
};
