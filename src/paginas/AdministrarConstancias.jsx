import { useState } from 'react'
import Formulario from '../components/Formulario'
import ListadoClientes from '../components/ListadoClientes'

function AdministrarConstancias() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  return (
        <div className= "flex flex-col md:flex-row">
          <button 
          type='button' 
          className='bg-amber-500 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden' 
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          > {mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'} </button>
          <div className= {`${mostrarFormulario ? 'block' : 'hidden'} md:block md:w-1/2 lg:w-2/3`}>
            <Formulario />
          </div>

          <div className="md:w-screen sm:w-screen">
            <ListadoClientes />
          </div>
        </div>
    )
}

export default AdministrarConstancias