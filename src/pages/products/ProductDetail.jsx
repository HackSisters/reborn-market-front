import { useLocation, useNavigate } from "react-router-dom";
import ProductCardDetail from "../../components/products/ProductCardDetail";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product; 

  if (!product) {
    return <h2 className="text-center mt-10 text-red-400">Producto no encontrado</h2>;
  }

  return (
    <div className="mt-10 p-6 bg-white">
      <ProductCardDetail product={product} />
    </div>
  );
};

export default ProductDetail;
