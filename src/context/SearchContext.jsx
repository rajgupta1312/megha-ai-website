import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const allContent = [
    {
      id: 1,
      title: "Five most dangerous trends facing manufacturers today",
      content: "Failure to comply can result in fines...",
      type: "Blog Posts"
    },
    {
      id: 2,
      title: "Monitoring Asset Health with Megha AI Solution",
      content: "He has six patents filed...",
      type: "Blog Posts"
    }
  ];

  const results = allContent.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SearchContext.Provider value={{
      searchTerm,
      setSearchTerm,
      results
    }}>
      {children}
    </SearchContext.Provider>
  );
};
