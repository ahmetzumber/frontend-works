import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/Header/index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
