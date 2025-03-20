import { useState, useEffect, useRef } from "react";

function useFetch(fetchFunction, dependencies = []) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const didFetch = useRef(false);


    useEffect(() => {
        async function loadData(fetchFunction) {
            
            if (didFetch.current) return;
            didFetch.current = true;
            try {
                const res = await fetchFunction;
                setData(res);
            } catch (err) {
                console.error('Error fetching media:', err);
                setError('Error al cargar  los datos. Por favor, intenta  de nuevo.');
            }finally {
                setLoading(false);
            }

        }
        loadData();
    }, dependencies);

    return { data, error, loading };
};

export {useFetch};