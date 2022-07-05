import { createContext, useState } from 'react';

const BtnActiveContext = createContext();

export function BtnActiveContextProvider({ children }) {
  const [disabled, setDisabled] = useState(true);
  return (
    <BtnActiveContext.Provider value={{ disabled, setDisabled }}>
      {children}
    </BtnActiveContext.Provider>
  );
}

export default BtnActiveContext;
