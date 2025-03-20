import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authRequest } from '../services/AuthService';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(true);
  const navigate = useNavigate();

  const login = async (username, password) => {
    if (username && password) {
      try {
        const isAuthenticated = await authRequest(username, password);
        setIsAuthenticated(isAuthenticated);
  
        
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]); 

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

export const useAuth = () => useContext(AuthContext);
