import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthProvider";
import Home from "../pages/Home";
import ProductDetail from "../pages/products/ProductDetail";
import Login from "../pages/users/Login";
import Contact from "../pages/users/Contact";
import MainLayout from "../layouts/MainLayout";
import CookieConsent from "../components/users/CookieConsent";

const AppRouter = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                </Route>

                <Route path="/login" element={<Login />} />
            </Routes>
            <CookieConsent />
        </AuthProvider>

    )
}

export default AppRouter;