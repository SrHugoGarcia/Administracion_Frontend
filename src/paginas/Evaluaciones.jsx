import { useState } from 'react'
import FormularioEvaluaciones from '../components/FormularioEvaluaciones'
import ListadoEvaluaciones from '../components/ListadoEvaluaciones'


const Evaluaciones = () => {

    const [mostrarFormulario, setMostrarFormulario] = useState(false)

    return (
      <>
        <div className= "grid grid-cols-1 justify-items-center md:flex-row">
          <button 
          type='button' 
          className='bg-amber-500 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden' 
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          > {mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'} </button>
          <div className= {`${mostrarFormulario ? 'block' : 'hidden'} md:block md:w-full lg:w-2/3`}>
            <FormularioEvaluaciones/>
          </div>
          <ListadoEvaluaciones/>
          
        </div>
      </>
    )
  }
  
  export default Evaluaciones