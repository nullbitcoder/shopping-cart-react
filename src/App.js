//feature-1
import React, { Component } from 'react';
import data from './data.json';
import Products from './components/Products';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      sizes: '',
      sort: '',
    };
  }
  //
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">Cart items</div>
          </div>
        </main>
        <footer>All rights Reserved</footer>
      </div>
    );
  }
}

export default App;
// import React from 'react';
// const App = () => {
//   return (

//   );
// };

// export default App;
// // feature-1 end
