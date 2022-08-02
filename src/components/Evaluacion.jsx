import useEvaluaciones from "../hooks/useEvaluaciones"

const Evaluacion = ({cliente}) => {
    const {setEdicion,eliminarEvaluacion} = useEvaluaciones()


    const { nombreEvaluacion, tipoEvaluacion, _id} = cliente
    const url = "http://localhost:3001/evaluaciones/"+ _id
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold uppercase text-amber-600 my-1">Url de la evaluacion: {' '}
            <span className="font-normal normal-case text-black"><a href={url}>{url}</a></span>
        </p>
        <p className="font-bold uppercase text-amber-600 my-1">Tipo de Evaluacion: {' '}
            <span className="font-normal normal-case text-black">{tipoEvaluacion}</span>
        </p>
        <p className="font-bold uppercase text-amber-600 my-1">Nombre de la Evaluacion: {' '}
            <span className="font-normal normal-case text-black">{nombreEvaluacion}</span>
        </p>

        <div className="flex justify-between my-5">
            <button type="button" className="py-2 px-10 bg-amber-500 hover:bg-amber-600 text-white uppercase font-bold rounded-lg"
             onClick={() => setEdicion(cliente)}
            >
                Editar
            </button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                        onClick={() => eliminarEvaluacion(_id)}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Evaluacion