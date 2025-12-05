import CabeceraCV from "./components/CabeceraCV";
import Educacion from "./components/Educacion";
import Skills from "./components/Skills";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import "./App.css";
import { useState } from "react";
import { tecnologiasIniciales, estudiosIniciales } from "./cvData";

function App() {
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  const agregarTecnologia = (nueva) => {
    setTecnologias((prev) => [...prev, nueva]);
  };

  const toggleHabilidades = () => {
    setMostrarHabilidades((prev) => !prev);
  };

  return (
    <>
      <Projects />

      <CabeceraCV
        nombre="Sofía Solórzano"
        cargo="Front-End Developer"
        ciudad="Bogotá, Colombia"
        contacto="sofia@email.com"
      />

      <AboutMe />

      <ToggleHabilidades toggle={toggleHabilidades} />

      {mostrarHabilidades && <Skills tecnologias={tecnologias} />}

      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

      <Educacion estudios={estudiosIniciales} />

      <Contact />
    </>
  );
}

export default App;
