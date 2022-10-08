import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ImgProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataConsult = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=2000"
      );
      const dataImg = await response.json();
      setData(dataImg);
    };

    dataConsult();
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ImgProvider;