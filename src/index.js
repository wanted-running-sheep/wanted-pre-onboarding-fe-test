import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/globalStyles';
import { LoginCheckContextProvider } from './context/LoginCheckContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <LoginCheckContextProvider>
        <App />
      </LoginCheckContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
