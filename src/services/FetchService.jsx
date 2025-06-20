const BASE_URL = 'http://localhost:8080/api/v1';  
async function httpRequest(method, endpoint, params = {}) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            headers: { 'Content-Type': 'application/json' }, 
            ...params  
        });
        if (!response.ok) throw new Error("Error al obtener los datos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getData:', error);
        throw error; 
    }
};
function fetchProducts() {  
    return httpRequest('GET','/products');
}

function fetchNewProduct(product){
    return httpRequest('POST','/products', {body: JSON.stringify(product)});
    
}

export { fetchProducts, fetchNewProduct };
