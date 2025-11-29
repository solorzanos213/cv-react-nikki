import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

import { datosPersonales, resumenPerfil, experiencias, estudios } from "./data";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <Perfil resumen={resumenPerfil} />

      <Experiencia lista={experiencias} />

      <Educacion lista={estudios} />
    </div>
  );
}

export default App;
