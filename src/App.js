import React, { Component } from 'react';
import './App.css';
import Catalog from './Catalog';
import {
    HashRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {getData} from './utils/ds'

class App extends Component {
  constructor(){
    super();
    this.slideIndex = 1;
    this.order = [];
    this.API = getData();
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
      x[i].style.display = "none";
      // x[i].classList.remove('fade-in');
      // x[i].classList.add('fade-out');
    }
    x[this.slideIndex-1].style.display = "block";
    // x[this.slideIndex-1].classList.remove('fade-out');
    // x[this.slideIndex-1].classList.add('fade-in');
  }

  handleOrder(c) {
    if(!(c.colName in this.order)){
        this.order = c.colName;
    }
    console.log = this.order;
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
          <img src={require('./assets/images/FiberLogo.png')} className="App-logo" alt="logo" />
            <nav>
            <ul>
                {this.API.getCatalogNames().map((catalogName,i) => {
                    return(
                        <li key={i}><Link to={'/'+catalogName}>{catalogName}</Link></li>
                    );
                })}
            </ul>
            </nav>
        </div>
        <Switch>
            {this.API.inv.map((collection,i) => {
                return(
                    <Route
                        path={'/'+collection.Name}
                        key={i}
                        render={() => (
                            <Catalog
                                onColChange={this.handleOrder}
                                collections={collection.catalogs} 
                            />
                        )}
                    />
                );
            })}
            {/*<Route component={NoMatch}/>*/}
        </Switch>
        <button className='ctrlbtn prev' onClick={this.handleClickOnPrevNext}>prev</button>
        <button className='ctrlbtn next' onClick={this.handleClickOnPrevNext}>next</button>
        <div className='App-footer'>
          <button className='finishOrder'>Finalizar</button>
        </div>
      </div>
    );
  }
}

export default App;