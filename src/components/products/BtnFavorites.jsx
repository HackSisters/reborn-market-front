import React, { useState } from 'react';

const BtnFvorites = ({product}) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (product) => {
        if (favorites.includes(product)) {
            setFavorites(favorites.filter((fav) => fav !== product));
        } else {
            setFavorites([...favorites, product]);
        }
    };

    return (
        <button onClick={() => toggleFavorite(product)}>
            {favorites.includes(product) ? 'Elimiar de favoritos' : 'Agregar a favoritos'}
        </button>
    );
};

export default BtnFvorites;