import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se implementa la lógica de inicio de sesión
    console.log('Usuario:', email, 'Contraseña:', password);
  };

  return (
    <>
    <h1>    
      <Link to="/">SmartSpace</Link>
    </h1>
    <form onSubmit={handleSubmit}>
      <label>Correo electrónico: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Contraseña: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Iniciar sesión</button>
    </form>
    </>
  );
}

export default Login;