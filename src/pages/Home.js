import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardProducts from '../components/CardProducts';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from '../components/CategoriesList';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      products: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFetchApi = this.handleFetchApi.bind(this);
    this.handleEspecifyCategories = this.handleEspecifyCategories.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleFetchApi() {
    const { search } = this.state;
    const queries = await getProductsFromCategoryAndQuery(false, search);
    const { results } = queries;
    this.setState({ products: results });
  }

  async handleEspecifyCategories(id) {
    const { search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(id, search);
    this.setState({ products: results });
  }

  renderProducts(products) {
    if (products.length !== 0) {
      return <CardProducts products={ products } />;
    }
    return <p>não encontrado</p>;
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <input
          type="text"
          name="search"
          onChange={ this.handleChange }
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ this.handleFetchApi }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <button type="button">Carrinho</button>
        </Link>
        <div style={ { display: 'flex' } }>
          <CategoriesList handleEspecifyCategories={ this.handleEspecifyCategories } />
          { products && this.renderProducts(products) }
        </div>
      </div>
    );
  }
}
