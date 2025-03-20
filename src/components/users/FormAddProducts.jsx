import React, { useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import CustomButton from "../ui/buttons/CustomButton";
import { useFetch } from '../../hooks/UseFetch';
import { fetchNewProduct } from '../../services/FetchService';

    //Clouddinary
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dtxf1xjmd/image/upload"
const CLOUDINARY_UPLOAD_PRESET = "HackatonF5"

const FormAddProducts = () => {
    const [categories, setCategories] = useState([]);
    const [conditions, setConditions] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);  
    const [imageUrl, setImageUrl] = useState("");
    const [productData, setProductData] = useState("");
    const { data, error, loading, fetchData } = useFetch();

    useEffect(() => {
        const fetchedCategories = [
            { id: 1, name: "ROPA" },
            { id: 2, name: "CALZADO" },
            { id: 3, name: "JUGUETES" },
            { id: 4, name: "ACCESORIOS" },
            { id: 5, name: "ARTÍCULOS PARA BEBÉ" },
            { id: 6, name: "SALUD Y SEGURIDAD" },
            { id: 7, name: "MUEBLES" },
            { id: 8, name: "ALIMENTACIÓN" },
            { id: 9, name: "LIBROS" },
            { id: 10, name: "ROPA DE CAMA" },
            { id: 11, name: "MATERNIDAD" }
        ];
        setCategories(fetchedCategories);

        const fetchedConditions = [
            { id: 1, name: 'Usado' },
            { id: 2, name: 'Nuevo' },
        ];
        setConditions(fetchedConditions);
    }, []);

    const uploadImageToCloudinary = async (file) => {

        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        try {
            const response = await fetch(CLOUDINARY_URL, {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.secure_url) {
                setImageUrl(data.secure_url); 
                setImagePreview(data.secure_url);
            }
        } catch (error) {
            console.error("Error subiendo imagen a Cloudinary:", error);
        }
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            uploadImageToCloudinary(file);
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        const productData = {
            name: data.name,
            image: imageUrl,
            description: data.description,
            price: data.price,
            age: data.age,
            condition: data.condition.toUpperCase(),
            userId: 1,
            categoryId: data.category,
        };

        setProductData(productData);
        fetchData(() => fetchNewProduct(productData));
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Agregar Producto Nuevo</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Categoría */}
                <div className="mb-4">
                    <label htmlFor="category" className="block text-lg font-medium mb-2">Categoría</label>
                    <select
                        id="category"
                        {...register('category', { required: 'La categoría es obligatoria' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-2"
                    >
                        <option value="">Selecciona una categoría</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.category && <p className="text-red-400 text-sm">{errors.category.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="age" className="block text-lg font-medium mb-2">Edad/Talla</label>
                    <input
                        type="text"
                        id="age"
                        {...register('age', { required: 'Edad o talla es obligatoria' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-2"
                        placeholder="Edad o talla"
                    />
                    {errors.age && <p className="text-red-400 text-sm">{errors.age.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-medium mb-2">Nombre del Producto</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'El nombre del producto es obligatorio' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-2"
                        placeholder="Nombre del producto"
                    />
                    {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-medium mb-2">Descripción</label>
                    <textarea
                        id="description"
                        {...register('description', { required: 'La descripción es obligatoria' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-2"
                        rows="4"
                        placeholder="Descripción del producto"
                    />
                    {errors.description && <p className="text-red-400 text-sm">{errors.description.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-lg font-medium mb-2">Precio (€)</label>
                    <input
                        type="number"
                        id="price"
                        {...register('price', {
                            required: 'El precio es obligatorio',
                            min: { value: 0, message: 'El precio debe ser mayor o igual a 0' },
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-2"
                        placeholder="Precio del producto"
                        step="0.01"
                    />
                    {errors.price && <p className="text-red-400 text-sm">{errors.price.message}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="image" className="block text-lg font-medium mb-2">Imagen</label>
                    <div className="flex items-center justify-center w-full">
                        <label
                            htmlFor="image"
                            className="flex flex-col items-center justify-center w-full p-4 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-2"
                        >
           
                            {imagePreview ? (
                                <div className="flex flex-col items-center">
                                    <img src={imagePreview} alt="Vista previa" className="w-32 h-32 object-cover mb-2 rounded-md" />
                                    <span className="text-sm text-gray-500">Imagen cargada</span>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <span className="text-gray-500">Haz clic para cargar una imagen</span>
                                    <span className="text-sm text-gray-400">JPG, PNG, GIF (máx. 5MB)</span>
                                </div>
                            )}
                            <input
                                type="file"
                                id="image"
                                {...register('image', { required: 'La imagen es obligatoria' })}
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>
                    {errors.image && <p className="text-red-400 text-sm">{errors.image.message}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="state" className="block text-lg font-medium mb-2">Estado del Producto</label>
                    <select
                        id="condition"
                        {...register('condition', { required: 'El estado es obligatorio' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-2"
                    >
                        <option value="">Selecciona el estado del producto</option>
                        {conditions.map((condition) => (
                            <option key={condition.id} value={condition.name}>
                                {condition.name}
                            </option>
                        ))}
                    </select>
                    {errors.condition && <p className="text-red-400 text-sm">{errors.condition.message}</p>}
                </div>

                <div className="mb-4">
                    <CustomButton
                        type="submit"
                        className="w-2/3 py-2 px-4 bg-violet-2 text-white"
                    >
                        Agregar producto
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default FormAddProducts;

