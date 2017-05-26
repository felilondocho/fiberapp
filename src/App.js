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
    this.handleClickOnPrevNext = this.handleClickOnPrevNext.bind(this);
  }

  componentDidMount() {
    this.showDivs(this.slideIndex);
  }

  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("Collection");
    if (n > x.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      // x[i].style.opacity = "0";
      x[i].classList.remove('fade-in');
      x[i].classList.add('fade-out');
    }
    // x[this.slideIndex-1].style.opacity = "1";
    x[this.slideIndex-1].classList.remove('fade-out');
    x[this.slideIndex-1].classList.add('fade-in');
  }

  handleClickOnPrevNext(e) {
    if (e.target.classList.contains('prev')) {
      this.showDivs(this.slideIndex -= 1);
    }
    if (e.target.classList.contains('next')) {
      this.showDivs(this.slideIndex += 1);
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
        <button className='prev' onClick={this.handleClickOnPrevNext}>prev</button>
        <button className='next' onClick={this.handleClickOnPrevNext}>next</button>
      </div>
    );
  }
}

export default App;