import { useContext } from 'react'
import ClientesContext from '../context/ClientesProvider'

const useClintes = () => {
    return useContext(ClientesContext);
}

export default useClintes;