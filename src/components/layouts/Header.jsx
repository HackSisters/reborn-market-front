import React from 'react';
import { Link } from 'react-router-dom';  
import { useAuth } from '../../contexts/AuthProvider';  

const Header = () => {
  const { isAuthenticated, logout } = useAuth();  

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>

          {isAuthenticated ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
              <li><img src="path-to-avatar.jpg" alt="User Avatar" className="avatar" /></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
