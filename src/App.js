import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import FormCat from './FormCat';
import Catalog from './Catalog';

class App extends Component {
  constructor(){
    super();
    this.state = {
      collections: [
        {name:'Fiber1', elements:[1,2,3,4,5,6,7,8,9,10]},
        {name:'Fiber2', elements:[1,2,3,4,5]},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Catalog collections={this.state.collections} />
      </div>
    );
  }
}

export default App;
