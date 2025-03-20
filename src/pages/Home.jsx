import { Link } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const products = [
    { 
      id: 1, 
      name: "Zapatillas Nike", 
      price: 120, 
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&h=300", 
      description: "Zapatillas deportivas Nike, ligeras y cómodas, ideales para correr y entrenar." 
    },
    { 
      id: 2, 
      name: "Camisa Adidas", 
      price: 45, 
      image: "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&h=300", 
      description: "Camisa deportiva Adidas de algodón, perfecta para un estilo casual y cómodo." 
    },
    { 
      id: 3, 
      name: "Reloj Casio", 
      price: 60, 
      image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&h=300", 
      description: "Reloj digital Casio resistente al agua, con cronómetro y luz LED integrada." 
    }
  ];
  
const Home = () => {
    return (
        <>
        <Header />
        <div className="grid grid-cols-3 gap-4 p-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              state={{ product }} 
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
        <Footer/>
        </>
      );
};

export default Home;
