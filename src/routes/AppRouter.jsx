import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/products/ProductDetail";
import Login from "../pages/users/Login";
import { AuthProvider } from "../contexts/AuthProvider";

const AppRouter = () => {
    return (
        <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                </Routes>
        </AuthProvider>

    )
}

export default AppRouter;