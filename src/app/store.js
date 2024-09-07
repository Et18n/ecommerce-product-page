"use client";
import { useState, useContext, createContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [itemname, setitemname] = useState("Shoe1");
  const [item_number, setitem_number] = useState(0);
  return (
    <GlobalContext.Provider value={[item_number, setitem_number]}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
