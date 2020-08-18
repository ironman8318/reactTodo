import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createGlobalStyle} from "styled-components"
import {BrowserRouter} from "react-router-dom";
import {createStore,compose,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./store/reducers/reducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(reducer,composeEnhancer(applyMiddleware(thunk)));

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    color: #555;
    font-family: sans-serif;
    line-height: 1.4;
    box-sizing: border-box;
}

:root {
--theme-color: red;
}



`
ReactDOM.render(
  <React.StrictMode>
   <Provider store = {store}>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
