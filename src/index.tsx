import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from "react-router-dom"
import firebaseApp from './firebaseApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(firebaseApp)
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
 );
