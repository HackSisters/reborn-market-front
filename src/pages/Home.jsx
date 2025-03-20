import { useEffect, useState } from "react";
import { fetchProducts } from "../services/FetchService";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetchProducts();
                setProducts(res);
            } catch (err) {
                console.error('Error fetching media:', err);
                setError('Error al cargar  los datos. Por favor, intenta  de nuevo.');
            } 

        }
        loadData();
    }, []);

    if(error) return <p>{error}</p>;
    console.log(products);

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
        </div>
    )
}

export default Home;