// src/contexts/PartsContext.js
import { createContext, useContext, useState, useEffect } from "react";

const PartsContext = createContext();

export const usePartsContext = () => {
  return useContext(PartsContext);
};

export const PartsProvider = ({ children }) => {
  const [selectedParts, setSelectedParts] = useState([]);
  console.log("SELCTEDPARTS CONTEXT", selectedParts);

  // Load selected parts from localStorage on component mount
  useEffect(() => {
    const storedSelectedParts = JSON.parse(
      localStorage.getItem("selectedParts")
    );
    if (storedSelectedParts) {
      setSelectedParts(storedSelectedParts);
    }
  }, []);

  const addSelectedPart = (part) => {
    const newData = [...selectedParts,part]
    setSelectedParts(newData);
    storeToLocalStorage(newData)
  };

  const removeSelectedPart = (part) => {
    const newData = selectedParts.filter((item) => item.id !== part.id)
    setSelectedParts(newData);
    storeToLocalStorage(newData)
  };

  const storeToLocalStorage = (data)=>{
    localStorage.setItem("selectedParts", JSON.stringify(data));
  }


  return (
    <PartsContext.Provider
      value={{
        selectedParts,
        addSelectedPart,
        removeSelectedPart,
      }}
    >
      {children}
    </PartsContext.Provider>
  );
};
