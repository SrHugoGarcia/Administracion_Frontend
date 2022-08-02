import { useState, useEffect } from "react";
import Alerta from "./Alerta";
import useClintes from "../hooks/useClientes";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [fechaFinalizacion, setFechaFinalizacion] = useState("");
  const [curso, setCurso] = useState("");
  const [id, setId] = useState(null)

  const [alerta, setAlerta] = useState({});

  const { guardarCliente, cliente } = useClintes();

  useEffect(() => {
    if(cliente?.nombre) {
      setNombre(cliente.nombre)
      setApellidos(cliente.apellidos)
      setEmail(cliente.email)
      setFechaFinalizacion(cliente.fechaFinalizacion)
      setCurso(cliente.curso)
      setId(cliente._id)
    }
  }, [cliente])

  const handleSubmit = (e) => {
    e.preventDefault();

    //* Validar el formulario
    if ([nombre, apellidos, email, fechaFinalizacion, curso].includes("")) {
      setAlerta({
        msg: "Oops! Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    guardarCliente({ nombre, apellidos, email, fechaFinalizacion, curso, id });
    setAlerta({
      msg: 'Guardado Correctamente'
    });

    setNombre('')
    setApellidos('')
    setEmail('')
    setFechaFinalizacion('')
    setCurso('')
    setId('')

  };

  const { msg } = alerta;

  return (
    <>
      <h2 className="font-black text-3xl text-center">Administrador de Constancias</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Añade Constancias{" "}
        <span className="text-amber-500 font-bold">y Administralas.</span>
      </p>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label htmlFor="nombre" className="text-gray-700 uppercase font-bold">
            Nombre(s)
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre del practicante"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="apellidos"
            className="text-gray-700 uppercase font-bold"
          >
            Apellido(s)
          </label>
          <input
            id="apellidos"
            type="text"
            placeholder="Ingresa los Apellidos"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-gray-700 uppercase font-bold">
            Correo Electronico
          </label>
          <input
            id="email"
            type="correo"
            placeholder="Ingresa el Correo Electronico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fechaFinalizacion"
            className="text-gray-700 uppercase font-bold"
          >
            Fecha de Finalizacion
          </label>
          <input
            id="fechaFinalizacion"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fechaFinalizacion}
            onChange={(e) => setFechaFinalizacion(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="curso" className="text-gray-700 uppercase font-bold">
            Constancia Obtenida
          </label>
          <select
            id="curso"
            className="uppercase border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          >
            <option value="ERM">Gestión de Riesgos Empresariales</option>
            <option value="PHA">Análisis de Preligros de Procesos</option>
            <option value="RCA/II">
              Análisis Causa-Raíz e Investigación de Incidentes
            </option>
            <option value="PSM">GESTIÓN DE SEGURIDAD EN LOS PROCESOS</option>
            <option value="AGP">
              AUDITORÍA DE GESTIÓN DE SEGURIDAD EN LOS PROCESOS
            </option>
            <option value="RBPS">
              SEGURIDAD EN LOS PROCESOS BASADO EN RIESGOS
            </option>
          </select>
        </div>

        <input
          type="submit"
          value={id ? 'Guardar Cambios' : 'Agregar Constancia'}
          className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors rounded-md"
        />
      </form>
    </>
  );
};

export default Formulario;
