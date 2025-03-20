import React from 'react';
import './CardProduct.css'; 

const CardProduct = ({ image, title, price }) => {
  return (
    <div className="card-product">
      <img src={image} alt={title} className="card-product-image" />
      <div className="card-product-info">
        <h3 className="card-product-title">{title}</h3>
        <p className="card-product-price">{price}</p>
        <button className="card-product-button">Más</button>
      </div>
    </div>
  );
};

export default CardProduct;