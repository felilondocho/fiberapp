import React, { Component } from 'react';
import './App.css';
import Catalog from './Catalog';
import ContentMenu from './ContentMenu';
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
    this.API = getData();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={require('./assets/images/FiberLogo.png')} className="App-logo" alt="logo" />
            <nav>
                <ul>
                    <ContentMenu
                        cat_names={this.API.getCatalogNames()}
                    />
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
            <Route 
                render={() => (
                    <ContentMenu
                        cat_names={this.API.getCatalogNames()}
                    />
                )}
            />
        </Switch>
      </div>
    );
  }
}

export default App;