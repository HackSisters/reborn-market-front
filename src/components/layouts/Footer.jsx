import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/images/logo-light-full.svg';

const Footer = () => {
  return (
    <footer className="bg-[#0B2618] py-8 w-full">
      <div className="flex flex-wrap items-start justify-between text-white max-w-screen-xl mx-auto px-4">
       
       <div className="footer-logo mb-6 flex items-center justify-center h-32">
  <img src={logo} alt="Reborn Market Logo" className="footer-logo-img max-w-full" />
</div>
        <div className="footer-links mb-6">
          <ul className="space-y-2">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            <li><a href="#favoritos" className="hover:underline">Favoritos</a></li>
            <li><a href="#mi-cuenta" className="hover:underline">Mi cuenta</a></li>
          </ul>
        </div>

        
        <div className="footer-links mb-6">
          <ul className="space-y-2">
            <li><a href="#politica-cookies" className="hover:underline">Política de Cookies</a></li>
            <li><a href="#politica-privacidad" className="hover:underline">Política de Privacidad</a></li>
            <li><a href="#terminos-condiciones" className="hover:underline">Términos y Condiciones</a></li>
          </ul>

          <div className="social-media mt-4 flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
