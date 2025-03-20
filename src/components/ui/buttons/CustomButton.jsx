import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ onClick, children, className, type = "button", disabled = false, to, form }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);  // Si se pasa la prop `to`, navegará a esa ruta.
    } else if (onClick) {
      onClick();  // Si se pasa un `onClick`, ejecutará esa función.
    }
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      className={`p-2 rounded-md hover:scale-110 transition transform cursor-pointer
      disabled:hover:scale-100 disabled:opacity-50 disabled:pointer-events-none ${className}`}
      disabled={disabled}
      form={form} // Si es un formulario, puede estar asociado a un formulario específico
    >
      {children}
    </button>
  );
};

export default Button;
