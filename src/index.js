import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { BrowserRouter } from 'react-router-dom';
const rootReducer = combineReducers({
  form: formReducer,
});

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
  );

ReactDOM.render(
  <BrowserRouter>
		<Provider store={store}><App /></Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
