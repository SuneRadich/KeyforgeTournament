import React, { Component } from 'react';
import Tournament from './Tournament';
import AppProvider from './AppProvider';
import './App.css';

class App extends Component {

  render() {
    return (
      <AppProvider>
        <div className="App">
          <Tournament></Tournament>
        </div>
      </AppProvider>
    );
  }
}

export default App;
