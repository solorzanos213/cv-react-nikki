import { useState } from "react";

function Skills() {
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <section id="skills" className="skills" style={{ padding: "20px" }}>
      <h2>Habilidades</h2>

      {/* Botón para mostrar/ocultar */}
      <button 
        onClick={toggleSkills}
        style={{
          padding: "10px 15px",
          marginBottom: "15px",
          cursor: "pointer",
          background: "#242424",
          color: "white",
          border: "none",
          borderRadius: "6px"
        }}
      >
        {showSkills ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>

      {/* Lista de habilidades solo cuando showSkills sea true */}
      {showSkills && (
        <ul>
          <li>HTML, CSS y JavaScript</li>
          <li>React (componentes funcionales y hooks)</li>
          <li>MySQL y SQL Server básico</li>
          <li>Git y GitHub</li>
          <li>Comunicación, empatía y pensamiento lógico</li>
          <li>Aprendizaje autodidacta y disciplina</li>
        </ul>
      )}
    </section>
  );
}

export default Skills;
