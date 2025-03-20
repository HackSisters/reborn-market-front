import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import CustomButton from "../ui/buttons/CustomButton";
import LogoLight from '../../assets/images/logo-light.png';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative flex justify-between items-center p-2 bg-white border-b border-gray-200">

      <Link
        to="/"
        className={`transition-all duration-300 lg:block ${isMenuOpen ? 'hidden' : 'block'}`}
      >
        <img
          src={LogoLight}
          alt="Logo"
          className="w-12 hover:scale-110 transition-transform"
        />
      </Link>

      {/* boton hamburguesa para pantallas pequeñas */}
      <button
        onClick={toggleMenu}
        className="block lg:hidden p-2 text-violet focus:outline-none z-10"
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#8e4e98"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#8e4e98"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* navegacion */}
      <nav
        className={`flex absolute top-0 right-0 transition-all duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0`}
      >
        <ul
          className={`flex flex-row items-center gap-4 p-4 lg:flex ${
            isMenuOpen ? 'block' : 'hidden'
          }` }
        >
          <li>
            <CustomButton to="/contact" className="">
              Contacto
            </CustomButton>
          </li>

          {isAuthenticated ? (
            <>
              <li>
                <CustomButton
                  onClick={logout}
                  className="bg-violet text-white"
                >
                  Logout
                </CustomButton>
              </li>
              <li>
                <img
                  src="https://picsum.photos/100"
                  alt="User Avatar"
                  className="w-8 rounded-full"
                />
              </li>
            </>
          ) : (
            <>
              <li>
                <CustomButton
                  to="/login"
                  className="bg-violet text-white"
                >
                  Iniciar Sesión
                </CustomButton>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
