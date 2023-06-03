import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import './index.css';
import { Provider } from 'react-redux';
import firebaseConfig from './firebase.config';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Redux/store';
import App from './App';
import 'tailwindcss/tailwind.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate Loading={'loadign'} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>


);

