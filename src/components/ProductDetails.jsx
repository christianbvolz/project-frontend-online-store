import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RatingForm from './RatingForm';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.pickAPI();
  }

    pickAPI = async () => {
      const { match: { params: { id } } } = this.props;
      const productDetails = await fetch(`https://api.mercadolibre.com/items/${id}`);
      const productDetailsJson = await productDetails.json();
      console.log(productDetailsJson);
      this.setState({
        product: productDetailsJson,
      });
    }

    render() {
      const { product: { title, thumbnail, price } } = this.state;
      return (
        <div>
          <div>
            <p data-testid="product-detail-name">
              {' '}
              { title }
              {' '}
            </p>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </div>
          <div>
            <RatingForm />
          </div>
        </div>
      );
    }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
