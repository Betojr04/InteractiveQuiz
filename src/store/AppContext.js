import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    //any initial state here
    message: "Hello from the context"
  });

  const actions = {
    //any actions here
    setMessage: (message) => setState((state) => ({ ...state, message }))
    //any other actions here
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStore = () => {
  return useContext(AppContext);
};
