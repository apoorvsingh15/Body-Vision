import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import AppRoutes from './routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
