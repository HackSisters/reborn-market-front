import { useLocation, useNavigate } from "react-router-dom";
import ProductCardDetail from "../../components/products/ProductCardDetail";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product; 

  if (!product) {
    return <h2 className="text-center mt-10 text-red-600">Producto no encontrado</h2>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <ProductCardDetail product={product} />
      <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Volver
      </button>
    </div>
  );
};

export default ProductDetail;
