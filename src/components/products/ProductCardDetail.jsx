import CustomButton from "../ui/buttons/CustomButton";
const ProductCardDetail = ({ product }) => {
    return (
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-8">

            <div className="flex flex-col justify-center items-center gap-2 lg:w-1/2 mb-6 lg:mb-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg shadow-md w-full max-w-xs sm:max-w-md lg:max-w-lg max-h-96 object-cover"
                />
                <div className="w-full flex justify-around items-center text-md">
                    <p className=" text-gray-500">Estado: <span className="font-bold text-gray-800">Nuevo</span></p>
                    <p className=" text-gray-500">Categoría: <span className="font-bold text-gray-800">Ropa</span></p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-left lg:w-1/2 lg:pl-8">
                <h3 className="text-4xl font-semibold text-gray-800 mb-4">{product.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg text-gray-600 mb-4">Edad: 4 años</p>
                <p className="text-xl font-medium text-gray-800">Precio: <span className="text-violet">{product.price}€</span></p>
                <CustomButton
                disabled={true}
                className={`mt-4 px-4 py-2 bg-light-green text-violet rounded w-1/2`}
                >Comprar</CustomButton>
            </div>
        </div>
    );
};

export default ProductCardDetail;
