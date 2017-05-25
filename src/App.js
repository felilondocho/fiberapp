import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import FormCat from './FormCat';
import Catalog from './Catalog';

class App extends Component {
  constructor(){
    super();
    this.slideIndex = 1;
    this.state = {
      collections: [
        {name:'Fiber1', elements:[1,2,3,4,5,6,7,8,9,10]},
        {name:'Fiber2', elements:[1,2,3,4,5]},
      ]
    }
    this.plusDivs = this.plusDivs.bind(this);
    this.plusDivs = this.plusDivs.bind(this);
  }

  componentDidMount() {
    this.showDivs(this.slideIndex);
  }

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("Collection");
    if (n > x.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[this.slideIndex-1].style.display = "block";  
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Catalog collections={this.state.collections} />
        <button class='prev' onClick={this.plusDivs(-1)}>prev</button>
        <button class='next' onClick={this.plusDivs(1)}>next</button>
      </div>
    );
  }
}

export default App;
