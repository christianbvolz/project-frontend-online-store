import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardProducts extends Component {
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
          </div>
        ))}
      </div>
    );
  }
}

CardProducts.propTypes = {
  products: PropTypes.oneOfType([PropTypes.array, PropTypes.any]).isRequired,
};
