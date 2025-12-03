import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; 
import reducers  from './reducers';
import App from './App';
import './index.css';


const store = configureStore({
  reducer: reducers,
  // The thunk middleware is included by default, so we don't need to explicitly add it here.
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);