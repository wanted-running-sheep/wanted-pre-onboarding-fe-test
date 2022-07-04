import { useState } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

import { loadItem } from './services/storage';

function App() {
  const [email, setEmail] = useState(loadItem('email'));

  return (
    <Routes>
      <Route path="/" element={ email ? <MainPage setEmail={setEmail}/> : <Navigate replace to="/login"/> }/>
      <Route path="/login" element={ email ? <Navigate replace to="/"/> : <LoginPage setEmail={setEmail}/> }/>
      <Route path="*" element={<div>not found</div>}/>
    </Routes>
  )
}

export default App;
