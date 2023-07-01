import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ReceipesProvider } from './Context/ReceipesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReceipesProvider>
        <App />
      </ReceipesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
