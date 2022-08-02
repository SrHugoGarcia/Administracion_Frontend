import { createContext, useState, useEffect } from "react";
import evaluacionesAxios from "../config/axiosEvaluaciones";
const EvaluacionesContext = createContext();

export const EvaluacionesProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});

   
  const guardarEvaluacion = async (formulario) => {
    

    if (formulario.id) {
      try {
        const { data } = await evaluacionesAxios.put(
          `/evaluaciones/${formulario.id}`,
          formulario,
        );

        const evaluacionesActualizado = formulario.map((clienteState) =>
          clienteState._id === data._id ? data : clienteState
        );

        setClientes(evaluacionesActualizado);
      } catch (error) {
        console.log(error);
      }
    } else {



      try {
        const { data } = await evaluacionesAxios.post("/evaluaciones",formulario);
        console.log(data)
        const { createdAt, updatedAt, __v, ...evaluacionAlmacenado } = data;

        setClientes([evaluacionAlmacenado, ...clientes]);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
    }

    useEffect(() => {
      const obtenerEvaluaciones = async () => {
        try {
         
  
          const { data } = await evaluacionesAxios.get("/evaluaciones");
          setClientes(data);
        } catch (error) {
          console.log(error);
        }
      };
      obtenerEvaluaciones();
    }, []);
  
    const eliminarEvaluacion = async id => {
      const confirmar = confirm('¿Confirmas que desear eliminar?')

      if(confirmar) {
          try {
                const { data } = await evaluacionesAxios.delete(`/evaluaciones/${id}`)
                const clientesActualizado = clientes.filter( clientesState => clientesState._id !== id)
                setClientes(clientesActualizado)
          } catch (error) {
              console.log(error)
          }
      }
}
const setEdicion = (cliente) => {
  setCliente(cliente);
};

  
  

  return (
    <EvaluacionesContext.Provider
      value={{
        
        guardarEvaluacion,
        clientes,
        eliminarEvaluacion,
        setEdicion,
        cliente
      }}
    >
      {children}
    </EvaluacionesContext.Provider>
  );
};

export default EvaluacionesContext;
