import { useState } from "react";

function useFetch() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (fetchFunction) => {
        setLoading(true);
        try {
            const res = await fetchFunction();
            setData(res);
        } catch (err) {
            console.error('Error fetching data:', err);
            setError("Error al cargar los datos. Intenta de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchData };
}

export { useFetch };