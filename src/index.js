import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import App from './App';
import 'tailwindcss/tailwind.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
    
 
);

