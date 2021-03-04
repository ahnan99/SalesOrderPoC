import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";
import { Provider } from 'react-redux';
import store from './modules/store';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
