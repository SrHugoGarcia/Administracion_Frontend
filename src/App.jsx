import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";
//import RutaEvaluaciones from "./layout/RutaEvaluaciones";

import Login from "./paginas/Login";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import AdministrarConstancias from "./paginas/AdministrarConstancias";
import EditarPerfil from "./paginas/EditarPerfil";
import CambiarPassword from "./paginas/CambiarPassword";
import Evaluaciones from "./paginas/Evaluaciones";


import { AuthProvider } from "./context/AuthProvider";
import { ClientesProvider } from "./context/ClientesProvider";
import {EvaluacionesProvider} from "./context/EvaluacionesProvider"

//Pruebas
import Mmm from "../src/components/mmm"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ClientesProvider>
          <EvaluacionesProvider>
          <Routes> {/* Rutas del Area Publica */}

            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              {/* <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} /> */}
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />

            </Route>
        
            <Route path="/admin" element={<RutaProtegida />}> {/* Rutas del Area Privada */}
            <Route index element={<AdministrarConstancias />} />
            <Route path="configuracion" element={<EditarPerfil />} />
            <Route path="evaluacion" element={<Evaluaciones />} />
            <Route path="cambiar-password" element={<CambiarPassword />} />
            <Route path="pruebas" element={<Mmm />} />
            </Route>
            
          </Routes>
          </EvaluacionesProvider>
        </ClientesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
