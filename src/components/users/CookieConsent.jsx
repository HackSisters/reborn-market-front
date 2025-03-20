import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookie = localStorage.getItem('cookie-consent');
        if (!cookie) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }
    
    return (
        <div className="fixed bottom-0 w-full bg-black text-white p-4 text-center z-50">
            <p className="mb-4"> 
                Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando por este sitio, usted acepta nuestro uso de cookies.
            </p>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={handleAccept}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                    Aceptar
                </button>
                <button
                    onClick={handleReject}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                    Rechazar
                </button>
                </div>
        </div>
    );
};

export default CookieConsent;