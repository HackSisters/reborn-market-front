import { useFetch } from "../hooks/UseFetch";
import { fetchProducts } from "../services/FetchService";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/products/ProductCard";
import Hero from "../components/ui/Hero";
import CategoryFilter from "../components/filters/CategoryFilter";
import SearchBar from "../components/filters/SearchBar";


const Home = () => {
  

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const { data, error, loading, fetchData } = useFetch();
  useEffect(() => {
    fetchData(fetchProducts);
  }, []);
  useEffect(() => {
    if (data && Array.isArray(data)) {
      setProducts(data);
    }
  }, [data]);

  if(error) return <p>{error}</p>;
  if(loading) return;
  console.log(products);


  const categories = [...new Set(products.map((product) => product.category.name))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category.name === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="flex flex-col gap-10 justify-center items-center w-full my-12">
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
          {filteredProducts.length > 0 ? (filteredProducts.map((product) => (
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

    </section>
    
  );

};

export default Home;
