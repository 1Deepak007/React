import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {Users} from './components/Users';
import reportWebVitals from './reportWebVitals';
// import ClsComp from './components/ClsComp';
// import NestedComp from './components/NestedComp';
// For navbar (routing)
import 'bootstrap/dist/css/bootstrap.min.css';    // importing bootstrap after installing 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
