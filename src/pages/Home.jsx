import { useEffect, useState, useRef } from "react"
import { fetchProducts } from "../services/FetchService";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const didFetch = useRef(false);


    useEffect(() => {
        async function loadData() {
            
            if (didFetch.current) return;
            didFetch.current = true;
            try {
                const res = await fetchProducts();
                setProducts(res);
            } catch (err) {
                console.error('Error fetching media:', err);
                setError('Error al cargar  los datos. Por favor, intenta  de nuevo.');
            }finally {
                setLoading(false);
            }

        }
        loadData();
    }, []);

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