import React, { Component } from 'react';
import { getCategories } from './services/api';

class App extends Component {
  render() {
    const callApi = getCategories().then((res) => console.log(res));
    return(
      <p>{}</p>
    );
  }
}

export default App;
