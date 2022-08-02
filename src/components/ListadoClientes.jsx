import useClintes from "../hooks/useClientes";
import Cliente from "./Cliente";

const ListadoClientes = () => {
  const { clientes } = useClintes();
  console.log(clientes);
  return (
    <>
      {clientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Constancias</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-amber-500 font-bold">
              Usuarios con Constancias.
            </span>
          </p>

          {clientes.map ( cliente => (
            <Cliente 
                key={cliente._id}
                cliente={cliente}
            />
          ))}

        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Usuarios</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza a generar constancias...{" "}
            <span className="text-amber-500 font-bold">
              ¡Apreceran en este lugar!
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default ListadoClientes;
