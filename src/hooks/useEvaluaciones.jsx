import { useContext } from 'react'
import EvaluacionesContext from '../context/EvaluacionesProvider'

const useEvaluaciones = () => {
    return useContext(EvaluacionesContext);
}

export default useEvaluaciones;