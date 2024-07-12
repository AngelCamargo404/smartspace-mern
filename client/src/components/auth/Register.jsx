import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
const serverURI = process.env.REACT_APP_SERVER_URI;

function Register() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    // Aquí se implementa la lógica de registro
    console.log('Nombre:', name, 'Correo electrónico:', email, 'Contraseña:', password);

    try {
      console.log(serverURI);
      const { data } = await Axios.post(serverURI + '/api/users/registrarse', {
        name: name,
        lastname: lastname,
        email: email,
        password: password
      });
      console.log(data);
      toast.success('¡Felicidades, registro completado con éxito!', {
        icon: '✅',
        sound: '../../sounds/success-sound-1.mp3',
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.log(error);
    }
    
  };

  const onSuccess = (response) => {
    console.log("SUCCESS: ", response);
    const userInfo = jwtDecode(response.credential);

    if (userInfo) {
      console.log("USERINFO", userInfo);
      setName(userInfo.given_name);
      setLastname(userInfo.family_name);
      setEmail(userInfo.email);
      console.log(name, lastname, email);
      handleSubmit();
    }
  };

  const onFailure = (response) => {
    console.log("ERROR: ", response);
  }

  return (
    <>
      <h1>    
        <Link to="/">SmartSpace</Link>
      </h1>

      <GoogleLogin
        text="signup_with"
        onSuccess={onSuccess}
        onError={onFailure}
      />

      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Apellido: </label>
        <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />

        <label>Correo electrónico: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Contraseña: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Registrarse</button>
      </form>

      <ToastContainer />
    </>
  );
}

export default Register;