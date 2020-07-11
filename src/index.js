import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import "@babel/polyfill";

import React from 'react';
import './dist/scss/styles.scss';
import App from './App';
import {render} from 'react-dom';     // Başlangıç componenti
import { Provider } from "react-redux"; // React Redux
import store from "./redux/store";      // Redux Store
import './dist/scss/styles.scss';     // Ana scss dosyası

const target = document.querySelector('#root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  target
)