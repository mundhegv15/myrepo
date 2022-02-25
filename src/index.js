import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountApp from './CountApp';
// import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   < CountApp />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
