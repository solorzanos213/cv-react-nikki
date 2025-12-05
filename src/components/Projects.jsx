import { useState } from "react";
import perfil from "../assets/perfil.jpg";
import "../App.css";

function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className="projects"
      style={{
        padding: "20px",
        textAlign: "center",
        transition: "0.3s ease",
        backgroundColor: darkMode ? "#1e1e1e" : "#f2f2f2",
        color: darkMode ? "white" : "black",
      }}
    >
      {/* Imagen de perfil */}
      <img
        src={perfil}
        alt="Foto de perfil"
        className="perfil-img"
        style={{ borderRadius: "50%", width: "150px", marginBottom: "10px" }}
      />

      {/* Nombre y rol */}
      <h1>Sofía Solórzano</h1>
      <h2>Desarrolladora Front-End</h2>

      {/* Botón para cambiar el tema */}
      <button
        onClick={toggleTheme}
        style={{
          margin: "10px 0",
          padding: "10px 15px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          background: darkMode ? "#484848" : "#242424",
          color: "white",
        }}
      >
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>

      {/* Navegación */}
      <nav style={{ marginTop: "15px" }}>
        <a href="#about" style={{ margin: "0 10px" }}>Sobre mí</a>
        <a href="#skills" style={{ margin: "0 10px" }}>Habilidades</a>
        <a href="#projects" style={{ margin: "0 10px" }}>Proyectos</a>
        <a href="#contact" style={{ margin: "0 10px" }}>Contacto</a>
      </nav>
    </header>
  );
}

export default Projects;
