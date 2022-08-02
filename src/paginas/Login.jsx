import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios';
import useAuth from '../hooks/useAuth';
import Footer from '../components/Footer';
import Cabecera from '../components/Cabezera';

const Login = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ alerta, setAlerta ] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if([email, password].includes('')) {
      setAlerta({
        msg: 'Oops! Todos los campos son obligatorios',
        error: true
      });
      return
    }

    try {
      const { data } = await clienteAxios.post('/administradores/login', {email, password});
      localStorage.setItem('token', data.token)
      navigate('/admin')
      setAuth(data)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }

  const { msg } = alerta;

  return (
    <>
      <section className="py-4  h-screen m-auto">
      <section className="align-middle lg:mx-96">
      <Cabecera />
      <div>
        <h1 className="text-center text-amber-500 font-black text-5xl">
          Bienvenido al Dashboard{" "}
          <span className="text-black">Administrativo</span>
        </h1>
      </div>
      <div className='mt-10 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>

        {msg && <Alerta alerta={alerta} /> }

        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Ingresa tu correo electronico"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesion"
            className=" bg-amber-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-amber-600 md:w-auto "
          />
        </form>
      </div>
      <Footer />
      </section>
      </section>
    </>
  );
};

export default Login;
