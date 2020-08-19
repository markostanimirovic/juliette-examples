import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerEffects } from 'juliette';
import { StoreContext } from 'juliette-react';
import { store } from './store';
import effects from './store/effects';

registerEffects(store, effects);

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
