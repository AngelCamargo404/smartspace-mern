import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

export default function Header() {
    const isLoggedIn = false;

    return (
        <header className="app-header">
            <h1>    
                <Link to="/">SmartSpace</Link>
            </h1>
            <nav>
                <Link to="/contact">Contacto</Link>
                <Link to="/about">Nosotros</Link>
                {isLoggedIn ? (
                <Link to="/profile">Perfil</Link> // Enlace a perfil si hay sesión
                ) : (
                <>
                    <Link to="/login">Iniciar Sesión</Link>
                    <Link to="/register">Registrarse</Link>
                </>
                )}
            </nav>
        </header>
    )
}
