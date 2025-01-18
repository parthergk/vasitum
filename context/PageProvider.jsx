"use client";
const { createContext, useState, useContext } = require("react");

const pageContext = createContext("");

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState("dashboard");
  return (
    <pageContext.Provider value={{ page, setPage }}>
      {children}
    </pageContext.Provider>
  );
};

export const usePageContext = () => {
  return useContext(pageContext);
};