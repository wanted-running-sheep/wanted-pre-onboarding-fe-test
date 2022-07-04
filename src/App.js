import { useContext } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import LoginCheckContext from './context/LoginCheckContext';

function App() {
  const { isSigned } = useContext(LoginCheckContext);

  return (
    <Routes>
      <Route
        path="/"
        element={isSigned ? <MainPage /> : <Navigate replace to="/login" />}
      />
      <Route
        path="/login"
        element={isSigned ? <Navigate replace to="/" /> : <LoginPage />}
      />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
}

export default App;
