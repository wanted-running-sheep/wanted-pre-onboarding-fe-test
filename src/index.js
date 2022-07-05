import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/globalStyles';
import { LoginCheckContextProvider } from './context/LoginCheckContext';
import { LoginValidateContextProvider } from './context/LoginValidateContext';
import { LoginInputValueContextProvider } from './context/LoginInputValueContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <LoginCheckContextProvider>
        <LoginValidateContextProvider>
          <LoginInputValueContextProvider>
            <App />
          </LoginInputValueContextProvider>
        </LoginValidateContextProvider>
      </LoginCheckContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
