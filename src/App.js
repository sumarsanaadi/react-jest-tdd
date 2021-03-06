import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';

import logo from './logo.svg';
import './App.css';
import HelloSection from './components/HelloSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'REACT IS 4W350M3',
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{this.state.title}</h2>
          </div>
          <p className="App-intro">
            This app do something! Let's develop this app using TDD!
          </p>
          <HelloSection username={'John Doe'} />
        </div>
      </Provider>
    );
  }
}

export default App;
