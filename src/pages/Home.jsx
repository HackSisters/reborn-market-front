import { useFetch } from "../hooks/UseFetch";
import { fetchProducts } from "../services/FetchService";

const Home = () => {
  const { data: products, error, loading } = useFetch(() => fetchProducts());

    if(error) return <p>{error}</p>;
    if(loading) return;
    console.log(products);

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
        </div>
    )
}

export default Home;