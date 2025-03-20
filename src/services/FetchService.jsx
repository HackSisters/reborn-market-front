async function httpRequest() {
    try {
        const response = await fetch(`http://localhost:8080/api/v1/products`);
        if (!response.ok) throw new Error("Error al obtener los datos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getData:', error);
        throw error; 
    }
};
function fetchProducts() {  
    return httpRequest();
}

export { fetchProducts };
