import React, { createContext, useState } from 'react';

import { getLocalStorage } from '../services/storage';

const LoginCheckContext = createContext();

export function LoginCheckContextProvider({ children }) {
  const [isSigned, setIsSigned] = useState(getLocalStorage('isSigned'));

  return (
    <LoginCheckContext.Provider value={{ isSigned, setIsSigned }}>
      {children}
    </LoginCheckContext.Provider>
  );
}
export default LoginCheckContext;
