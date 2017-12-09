import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {
  incrementState
} from './actions'

const App = ({ count, onIncrementClick }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      <p>Count: {count}</p>
      <button onClick={onIncrementClick}>Increment</button>
    </p>
  </div>
);

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementClick: () => {
    dispatch(incrementState());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
