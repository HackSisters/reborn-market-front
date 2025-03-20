import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // "fakeamos" el login y el logout
  const login = (username, password) => {
    if (username && password) {
      setIsAuthenticated(true); 
    }
  };

  const logout = () => {
    setIsAuthenticated(false); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook para manejo de contexto
export const useAuth = () => useContext(AuthContext);
