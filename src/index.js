import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer, { INITIAL_STATE } from './reducer';

const store = createStore(reducer, INITIAL_STATE);

const mainComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(mainComponent(), document.getElementById('root'));
registerServiceWorker();
