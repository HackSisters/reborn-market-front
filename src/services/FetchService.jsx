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
/*function fetchCategories() {  
    return [
          { "id": 1, "name": "ROPA" },
          { "id": 2, "name": "CALZADO" },
          { "id": 3, "name": "JUGUETES" },
          { "id": 4, "name": "ACCESORIOS" },
          { "id": 5, "name": "ARTÍCULOS PARA BEBÉ" },
          { "id": 6, "name": "SALUD Y SEGURIDAD" },
          { "id": 7, "name": "MUEBLES" },
          { "id": 8, "name": "ALIMENTACIÓN" },
          { "id": 9, "name": "LIBROS" },
          { "id": 10, "name": "ROPA DE CAMA" },
          { "id": 11, "name": "MATERNIDAD" }
        ]
    return httpRequest('/categories');
}
function fetchConditions() {
    return {
        "conditions": [
          { "id": 1, "name": "USADO" },
          { "id": 2, "name": "NUEVO" }
        ]
    }
    return httpRequest('/conditions');
}*/

export { fetchProducts, fetchNewProduct };
