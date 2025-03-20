const ProductCardDetail = ({ product }) => {
    return (
        <div className="card-product">
            <img src={product.image} alt={product.name} className="card-product-image" />
            <div className="card-product-info">
                <h3 className="card-product-title">{product.name}</h3>
                <p className="card-product-price">{product.price}</p>
                <button className="card-product-button">Más</button>
            </div>
        </div>
    );
};

export default ProductCardDetail;