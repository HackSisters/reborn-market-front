import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // "fakeamos" el login y el logout
  const login = (username, password) => {
    if (username && password) {
      setIsAuthenticated(true); 
    }
  };

  const logout = () => {
    setIsAuthenticated(false); 
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook para manejo de contexto
export const useAuth = () => useContext(AuthContext);
