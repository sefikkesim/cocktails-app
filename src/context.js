// import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react'

import React, { useContext, createContext, useState, useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// const AppContext = React.createContext()

// const AppProvider = ({ children }) => {
//   return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
// }
// // make sure use
// export const useGlobalContext = () => {
//   return useContext(AppContext)
// }

// export { AppContext, AppProvider }

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktyails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktyails)
      } else {
        setCocktails([]);
       
      } 
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);
  const values = {
    loading,
    searchTerm,
    cocktails,
    setCocktails,
    setSearchTerm,
    setLoading,
  };
  return <AppContext.Provider value={values}> {children}</AppContext.Provider>;
};

export { AppContextProvider, useAppContext };
