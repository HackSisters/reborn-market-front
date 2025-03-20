import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col gap-2 hover:scale-105 transition transform">
      <img src={product.image} alt={product.name} 
      className="min-w-64 h-64 rounded object-cover" />
      <div className="flex justify-between items-center gap-2 p-2">
        <h3 className="">{product.name}</h3>
        <p className="">{product.price} €</p>
      </div>
    </div>
  );
};

export default ProductCard;