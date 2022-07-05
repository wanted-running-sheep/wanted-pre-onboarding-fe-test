import React, { createContext, useState } from 'react';

const LoginInputValueContext = createContext();

export function LoginInputValueContextProvider({ children }) {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  return (
    <LoginInputValueContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </LoginInputValueContext.Provider>
  );
}
export default LoginInputValueContext;
