
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../components/products/ProductCard";
import Hero from "../components/ui/Hero";
import CategoryFilter from "../components/filters/CategoryFilter";
import SearchBar from "../components/filters/SearchBar";
import Footer from "../components/layouts/Footer";


const products = [
  {
    id: 1,
    name: "Zapatillas Nike",
    price: 120,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&h=300",
    description: "Zapatillas deportivas Nike, ligeras y cómodas, ideales para correr y entrenar.",
    category: "Calzado",
    age: "Adulto"
  },
  {
    id: 2,
    name: "Camisa Adidas",
    price: 45,
    image: "https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&h=300",
    description: "Camisa deportiva Adidas de algodón, perfecta para un estilo casual y cómodo.",
    category: "Ropa",
    age: "Adulto"
  },
  {
    id: 3,
    name: "Reloj Casio",
    price: 60,
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&h=300",
    description: "Reloj digital Casio resistente al agua, con cronómetro y luz LED integrada.",
    category: "Accesorios",
    age: "Adulto"
  },
  {
    id: 4,
    name: "Zapatillas Bebé",
    price: 35,
    image: "https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&h=300",
    description: "Zapatillas suaves y cómodas para bebés, con suela antideslizante.",
    category: "Calzado",
    age: "Bebé (0-2 años)"
  },
  {
    id: 5,
    name: "Conjunto Infantil",
    price: 50,
    image: "https://images.pexels.com/photos/6623813/pexels-photo-6623813.jpeg?auto=compress&cs=tinysrgb&h=300",
    description: "Conjunto de ropa infantil de algodón, ideal para niños de 3 a 5 años.",
    category: "Ropa",
    age: "Niño (3-5 años)"
  }
];

const Home = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="flex flex-col gap-10 justify-center items-center w-full">
      <Hero />

      {/* buscador y filtro */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 w-full max-w-4xl">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
      </div>

      {/* lista de productos */}
      <div className="flex flex-col justify-center items-center w-full">
        <h2 className="text-3xl font-bold">Nuestros productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 max-w-screen-xl w-full">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                state={{ product }}
                className="bg-white shadow-md rounded-lg p-4 text-center"
              >
                <ProductCard product={product} />
              </Link>
            ))
          ) : (
            <p className="text-red-400">No se encontraron productos</p>
          )}
        </div>
      </div>
      <Footer/>
    </section>
    
  );

};

export default Home;
