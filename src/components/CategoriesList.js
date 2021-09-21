import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.arrayCategories();
  }

    arrayCategories = async () => {
      const productsCategory = await getCategories();
      this.setState({
        products: productsCategory,
      });
    }

    render() {
      const { handleEspecifyCategories } = this.props;
      const { products } = this.state;
      return (
        <div>
          <h2>Categorias:</h2>
          <ul>
            {products.map(({ id, name }) => (
              <div style={ { display: 'flex' } } key={ id }>
                <input
                  data-testid="category"
                  type="checkbox"
                  onClick={ () => handleEspecifyCategories(id) }
                />
                <li
                  style={ { listStyleType: 'none' } }
                >
                  { name }
                </li>
              </div>
            ))}
          </ul>
        </div>
      );
    }
}

CategoriesList.propTypes = {
  handleEspecifyCategories: PropTypes.func.isRequired,
};

export default CategoriesList;
