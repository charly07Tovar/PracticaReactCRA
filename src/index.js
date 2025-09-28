import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/Navbar.css';
import './style/Footer.css';
import './style/Titulos.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>
);

reportWebVitals();
