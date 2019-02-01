import React, { Component } from 'react';
import { configureStore } from 'redux-starter-kit';

import roundReducer from './reducers/round';

import Tournament from './Tournament';

import './App.css';

const reducer = {
  round: roundReducer
}

const preloadedState = {
  round: 1
}

const store = configureStore({
  reducer,
  middleware: [],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tournament></Tournament>
      </div>
    );
  }
}

export default App;
