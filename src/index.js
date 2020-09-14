import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer/reducer'
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'



const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);



const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));


serviceWorker.unregister();
