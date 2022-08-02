import { useEffect, useState } from "react"
import AdminNav from "../components/AdminNav"
import useAuth from '../hooks/useAuth'
import Alerta from "../components/Alerta"

const EditarPerfil = () => {

    const { auth, actualizarPerfil } = useAuth()
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})
    
    
    useEffect( () => {
        setPerfil(auth)
    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()

        const {nombre, email} = perfil

        if([nombre, email].includes('')) {
            setAlerta({
                msg: 'Email y Nombre son Obligatorios',
                error: true
            })
            return
        }
        const resultado = await actualizarPerfil(perfil)
        setAlerta(resultado)
    }

    const {msg} = alerta

    return (
      <>
        <AdminNav />
        <h2 className="font-black text-3xl text-center mt-10">Configuración de Perfil</h2>
        <p className="text-xl mt-5 mb-10 text-center">Modifica tu {' '} <span className="text-amber-600 font-bold">Información Aquí</span></p>
      
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

              {msg && <Alerta alerta={alerta} />}
              <form onSubmit={handleSubmit}>
                  <div className="my-3">
                      <label className="uppercase font-bold text-gray-600">Nombre Completo</label>
                      <input 
                      type="text" 
                      className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" 
                      name="nombre" 
                      value={perfil.nombre || ''} 
                      onChange={e => setPerfil({...perfil,[e.target.name] : e.target.value})} />
                  </div>
                  <div className="my-3">
                      <label className="uppercase font-bold text-gray-600">Sitio Web</label>
                      <input 
                      type="text" 
                      className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" 
                      name="web"
                      placeholder="Inserta tu sitio web o red social"
                      value={perfil.web || ''} 
                      onChange={e => setPerfil({...perfil,[e.target.name] : e.target.value})} />
                  </div>
                  <div className="my-3">
                      <label className="uppercase font-bold text-gray-600">Telefono</label>
                      <input 
                      type="text" 
                      className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" 
                      name="telefono"
                      placeholder="Inserta tu numero telefonico"
                      value={perfil.telefono || ''} 
                      onChange={e => setPerfil({...perfil,[e.target.name] : e.target.value})} />
                  </div>
                  <div className="my-3">
                      <label className="uppercase font-bold text-gray-600">Correo Electronico</label>
                      <input 
                      type="email" 
                      className="border bg-gray-50 w-full p-2 mt-5 rounded-lg" 
                      name="email"
                      value={perfil.email || ''} 
                      onChange={e => setPerfil({...perfil,[e.target.name] : e.target.value})} />
                  </div>     
                  <input type="submit" value="Guardar Cambios" className="bg-amber-500 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 hover:cursor-pointer hover:bg-amber-600"/>  
              </form>
          </div>
      </div>
      </>
    )
  }
  
  export default EditarPerfil