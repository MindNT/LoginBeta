// src/components/Login.js
import React from 'react';
import './Login.css'; // Optional CSS file

const Login = () => {
    return (
        <div className="login-container">
            <h2>Hola! Bienvenido de vuelta</h2>
            <form>
                <div className="form-group">
                    <label>Usuario</label>
                    <input type="text" placeholder="Ingresa tu usuario" />
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input type="email" placeholder="Ingresa tu correo" />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" placeholder="Ingresa tu contraseña" />
                </div>
                <a href="#">¿Olvidaste tu contraseña?</a>
                <button type="submit">Ingresar</button>
            </form>
            <p>Aún no tienes una cuenta? <a href="#">Crear una nueva cuenta</a></p>
        </div>
    );
};

export default Login;
