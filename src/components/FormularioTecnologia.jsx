import { useState } from "react";

function FormularioTecnologia({ agregarTecnologia }) {
  const [nuevaTec, setNuevaTec] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    if (nuevaTec.trim() !== "") {
      agregarTecnologia(nuevaTec.trim());
      setNuevaTec(""); // limpiar input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tecnología"
        value={nuevaTec}
        onChange={(e) => setNuevaTec(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTecnologia;
