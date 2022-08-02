import useEvaluaciones from "../hooks/useEvaluaciones";
import Evaluacion from "./Evaluacion";

const ListadoEvaluaciones = () => {
  const { clientes} = useEvaluaciones();

  return (
    <>
      {clientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Evaluaciones</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-amber-500 font-bold">
              Evaluaciones.
            </span>
          </p>
        

        <div className='overflow-y-auto h-96 '>
          {clientes.map ( cliente => (
            <Evaluacion 
                key={cliente._id}
                cliente={cliente}
            />
          ))}
        </div>

        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Usuarios</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza a generar Evaluaciones...{" "}
            <span className="text-amber-500 font-bold">
              ¡Apreceran en este lugar!
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default ListadoEvaluaciones;
