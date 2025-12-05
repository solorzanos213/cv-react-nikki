import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";
import Contact from "./components/Contact";
import { useState } from "react";
import "./App.css";

function App() {
  const [tecnologias, setTecnologias] = useState([
    "HTML", "CSS", "JavaScript", "React"
  ]);

  const agregarTecnologia = (tec) => {
    setTecnologias((prev) => [...prev, tec]);
  };

  return (
    <>
      <Projects />
      <AboutMe />

      {/* Toggle de Habilidades */}
      <ToggleHabilidades />

      {/* Formulario para agregar tecnología */}
      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

      {/* Renderizado dinámico de tecnologías */}
      <section id="stack">
        <h2>Stack Tecnológico</h2>
        <ul>
          {tecnologias.map((tec, idx) => (
            <li key={idx}>{tec}</li>
          ))}
        </ul>
      </section>

      <Contact />
    </>
  );
}

export default App;
