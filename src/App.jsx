import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Buy from './components/Buy/Buy';
import Account from './components/Account/Account';
import { Provider } from 'react-redux';
import store from './store'

import './App.css';



class App extends Component {
  render() {
    return (
      <Provider store= { store }>
      	<Router>
        <div className="App">
        	<Navigation/>
          	<Route exact path="/" component={ Home }/>
            <Route exact path="/portfolio" component={ Portfolio }/>
            <Route exact path="/buy" component={ Buy }/>
            <Route exact path="/account" component={ Account }/>
          <Footer/>
        </div>
        </Router>
      </Provider>

    );
  }
}

export default App;
