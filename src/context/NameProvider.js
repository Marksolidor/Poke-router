import React, { createContext, useEffect, useState } from "react";

export const getPokemon = createContext();
const NameProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataConsult = async () => {
      try{
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=151`
      );
      const dataImg = await response.json();
      setData(dataImg);
      } catch (err) {alert( "Nuestras disculpas, parece que un Porygon se ha metido en el sistema." );}
    };

    dataConsult();
  }, []);

  return (
    <getPokemon.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </getPokemon.Provider>
  );
};

export default NameProvider;