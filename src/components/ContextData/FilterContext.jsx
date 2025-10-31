import { createContext, useState, useContext } from "react";

// Create context
const FilterContext = createContext();

// Provider component
export const FilterProvider = ({ children }) => {
  const [filterQuery, setFilterQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  return (
    <FilterContext.Provider
      value={{ filterQuery, setFilterQuery, filteredData, setFilteredData }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook (optional but recommended)
export const useFilter = () => useContext(FilterContext);
