import axios from "axios";

const evaluacionesAxios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_EVALUACIONES
    
});

export default evaluacionesAxios;