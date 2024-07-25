import { createContext, useState } from 'react';

export const DoritoContext = createContext();

export const DoritoProvider = ({ children }) => {
  const [serving, setServing] = useState(null);
  return (
    <DoritoContext.Provider value={{ serving, setServing }}>
      {children}
    </DoritoContext.Provider>
  );
};
