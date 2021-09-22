import React, { Component } from 'react';

export default class RatingForm extends Component {
  // constructor() {
  //     super();
  //     this.state ={

  //     }
  // }

  render() {
    return (
      <div>
        <h1>Avaliações</h1>
        <form>
          <input type="email" placeholder="Email" />
          <div>
            <label htmlFor="number">
              <input placeholder="nota" type="number" min="1" max="5" />
            </label>
          </div>
          <div>
            <textarea
              data-testid="product-detail-evaluation"
            >
              Mensagem(opcional)
            </textarea>
          </div>
          <div>
            <button type="button">Avaliar</button>
          </div>
        </form>
      </div>
    );
  }
}
