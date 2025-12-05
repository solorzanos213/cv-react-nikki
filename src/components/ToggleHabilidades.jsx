import { useState } from "react";
import Skills from "./Skills";

function ToggleHabilidades() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <section>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>
      {mostrar && <Skills />}
    </section>
  );
}

export default ToggleHabilidades;
