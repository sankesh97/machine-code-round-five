import { createContext, useState } from 'react';

export const ReceipesContext = createContext();

export const ReceipesProvider = ({ children }) => {
  const [receipeList, setReceipeList] = useState();
  return (
    <ReceipesContext.Provider value={{ receipeList, setReceipeList }}>
      {children}
    </ReceipesContext.Provider>
  );
};
