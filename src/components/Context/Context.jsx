import { createContext, useState } from "react";

export const contextData = createContext();

const Context = ({ children }) => {
  const [listMovies, setListMovies] = useState({});

  return (
    <contextData.Provider value={{ listMovies, setListMovies }}>
      {children}
    </contextData.Provider>
  );
};

export default Context;