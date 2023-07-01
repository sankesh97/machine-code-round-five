import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { initialReceipes } from './initalReceipes';

export const ReceipesContext = createContext();

export const ReceipesProvider = ({ children }) => {
  const [receipeList, setReceipeList] = useState(initialReceipes);
  const [currentReceipe, setCurrentReceipe] = useState();

  const getReceipesList = () => {
    if (
      receipeList.length <
      JSON.parse(localStorage.getItem('receipesList')).length
    ) {
      setReceipeList(localStorage.getItem('receipesList'));
    } else {
      localStorage.setItem('receipesList', receipeList);
    }
  };

  const getSingleReceipe = (receipeId) => {
    setCurrentReceipe(
      receipeList.find((currentReceipe) => currentReceipe.id === receipeId)
    );
  };

  return (
    <ReceipesContext.Provider
      value={{
        receipeList,
        setReceipeList,
        getReceipesList,
        getSingleReceipe,
        currentReceipe,
      }}
    >
      {children}
    </ReceipesContext.Provider>
  );
};
