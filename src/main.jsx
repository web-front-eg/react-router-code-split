import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';

// https://www.seroundtable.com/google-no-hashtags-in-urls-26537.html

// window.location.hash -> parsed into url by react router dom
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
