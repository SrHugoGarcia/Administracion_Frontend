import useClintes from "../hooks/useClientes"

const Cliente = ({cliente}) => {

    const {setEdicion, eliminarCliente} = useClintes()

    const { nombre, apellidos, email, fechaFinalizacion, curso, _id} = cliente

    const formatearFecha = (fechaFinalizacion) => {
        const nuevaFecha = new Date(fechaFinalizacion)
        return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(nuevaFecha)
    }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold uppercase text-amber-600 my-1">Folio de Validacion: {' '}
            <span className="font-normal normal-case text-black">{_id}</span>
        </p>
        <p className="font-bold uppercase text-amber-600 my-1">Nombre: {' '}
            <span className="font-normal normal-case text-black">{nombre}</span>
        </p>
        <p className="font-bold uppercase text-amber-600 my-1">Apellidos: {' '}
            <span className="font-normal normal-case text-black">{apellidos}</span>
        </p>
        <p className="font-bold uppercase text-amber-600 my-1">Email: {' '}
            <span className="font-normal normal-case text-black">{email}</span>
        </p>
        <p className="font-bold uppercase text-amber-600 my-1">Fecha de Finalizacion: {' '}
            <span className="font-normal normal-case text-black">{formatearFecha(fechaFinalizacion)}</span>
        </p>
        <p className="font-bold uppercase text-amber-600 my-1">Certificado: {' '}
            <span className="font-normal normal-case text-black">{curso}</span>
        </p>

        <div className="flex justify-between my-5">
            <button type="button" className="py-2 px-10 bg-amber-500 hover:bg-amber-600 text-white uppercase font-bold rounded-lg"
            onClick={() => setEdicion(cliente)}>
                Editar
            </button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
            onClick={() => eliminarCliente(_id)}>
                Eliminar
            </button>
        </div>

    </div>
  )
}

export default Cliente