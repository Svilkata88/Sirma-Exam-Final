import { useState, createContext, useContext } from "react";

const DateContext = createContext(null);

export const DateProvider = ({ children }) => {
  const [dateType, setDateType] = useState("iso");

  return (
    <DateContext.Provider value={[dateType, setDateType]}>
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => {
  return useContext(DateContext);
};
