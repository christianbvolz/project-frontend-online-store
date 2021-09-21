import React from 'react';
import { getCategories } from '../services/api';

class ProductsList extends React.Component {
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
      const { products } = this.state;
      return (
        <div>
          <h2>Categorias:</h2>
          <ul>
            {products.map(({ id, name }) => (
              <li key={ id } data-testid="category">{ name }</li>
            ))}
          </ul>
        </div>
      );
    }
}

export default ProductsList;
