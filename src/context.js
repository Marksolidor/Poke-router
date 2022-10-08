import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ImgProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const dataConsult = async () => {
      try{
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=151`
      );
      const dataImg = await response.json();
      setData(dataImg);
      } catch (err) {}
    };

    dataConsult();
  }, []);

  useEffect(() => {
    const infoConsult = async () => {
      try{
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=151`
      );
      const dataImg = await response.json();
      setData(dataImg);
      } catch (err) {}
    };

    infoConsult();
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