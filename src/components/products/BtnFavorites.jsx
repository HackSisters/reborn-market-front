import React, { useState } from 'react';

const BtnFavorites = ({ product }) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (product) => {
        if (favorites.includes(product)) {
            setFavorites(favorites.filter((fav) => fav !== product));
        } else {
            setFavorites([...favorites, product]);
        }
    };

    return (
        <button
            onClick={() => toggleFavorite(product)}
            className="
                flex items-center justify-items-center gap-2 
                text-md text-violet font-medium 
                hover:scale-103 transition duration-300"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill={favorites.includes(product) ? "#8e4e98" : "none"}
                stroke="#8e4e98"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="18" height="18" stroke-width="1.5">
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
            </svg>
            {favorites.includes(product) ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
        </button>
    );
};

export default BtnFavorites;
