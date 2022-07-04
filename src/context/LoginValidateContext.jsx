import { createContext, useState } from 'react';

const LoginValidateContext = createContext();

export function LoginValidateContextProvider({ children }) {
  const [validation, setValidation] = useState({
    email: undefined,
    password: undefined,
    errorCodes: undefined,
  });
  return (
    <LoginValidateContext.Provider value={{ validation, setValidation }}>
      {children}
    </LoginValidateContext.Provider>
  );
}

export default LoginValidateContext;
